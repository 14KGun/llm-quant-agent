import type { ResolvedConfig } from "./config.js";
import { FmpApiError, FmpError } from "./errors.js";

/** Primitive values accepted as query parameters. */
export type QueryValue = string | number | boolean | undefined | null;

/** Query parameter map. Array values are serialized as comma-joined strings. */
export type QueryParams = Record<string, QueryValue | QueryValue[]>;

/** HTTP statuses that are safe to retry. */
const RETRYABLE_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);

const MAX_BODY_SNIPPET = 500;

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Thin HTTP layer over FMP: builds URLs (injecting the api key), enforces a
 * per-request timeout, and retries transient failures with exponential backoff.
 */
export class HttpClient {
  constructor(private readonly config: ResolvedConfig) {}

  /** Issue a GET request and parse the JSON response as `T`. */
  async get<T>(path: string, params: QueryParams = {}): Promise<T> {
    const url = this.buildUrl(path, params);
    let lastError: unknown;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        const response = await this.fetchWithTimeout(url);

        if (response.ok) {
          return await this.parseJson<T>(response, path);
        }

        const body = await safeText(response);
        const apiError = new FmpApiError(
          `FMP API request failed with status ${response.status}`,
          { status: response.status, endpoint: path, responseBody: body },
        );

        if (RETRYABLE_STATUS.has(response.status) && attempt < this.config.maxRetries) {
          lastError = apiError;
          await sleep(this.retryDelay(attempt, response.headers.get("retry-after")));
          continue;
        }
        throw apiError;
      } catch (err) {
        // Non-retryable API errors (4xx, parse failures) bubble up immediately.
        if (err instanceof FmpApiError) throw err;

        // Network errors / timeouts are transient: retry until budget is spent.
        lastError = wrapNetworkError(err, path);
        if (attempt < this.config.maxRetries) {
          await sleep(this.retryDelay(attempt, null));
          continue;
        }
      }
    }

    throw lastError instanceof Error
      ? lastError
      : new FmpError(`FMP request to ${path} failed after retries`);
  }

  /** Build a fully-qualified request URL with serialized params and api key. */
  buildUrl(path: string, params: QueryParams = {}): string {
    const cleanPath = path.replace(/^\/+/, "");
    const url = new URL(`${this.config.baseUrl}/${cleanPath}`);

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) {
        const joined = value.filter((v) => v !== undefined && v !== null).join(",");
        if (joined.length > 0) url.searchParams.set(key, joined);
      } else {
        url.searchParams.set(key, String(value));
      }
    }

    url.searchParams.set("apikey", this.config.apiKey);
    return url.toString();
  }

  private async fetchWithTimeout(url: string): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.config.timeoutMs);
    try {
      return await this.config.fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
  }

  private async parseJson<T>(response: Response, endpoint: string): Promise<T> {
    let data: unknown;
    try {
      data = await response.json();
    } catch (err) {
      throw new FmpApiError("Failed to parse FMP response as JSON", {
        status: response.status,
        endpoint,
        cause: err,
      });
    }

    // FMP occasionally returns HTTP 200 with an `{ "Error Message": ... }` body.
    if (
      data !== null &&
      typeof data === "object" &&
      "Error Message" in data &&
      typeof (data as Record<string, unknown>)["Error Message"] === "string"
    ) {
      throw new FmpApiError(String((data as Record<string, unknown>)["Error Message"]), {
        status: response.status,
        endpoint,
      });
    }

    return data as T;
  }

  /** Exponential backoff with jitter, honoring a `Retry-After` header in seconds. */
  private retryDelay(attempt: number, retryAfter: string | null): number {
    if (retryAfter) {
      const seconds = Number(retryAfter);
      if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000;
    }
    const base = this.config.retryBaseDelayMs * 2 ** attempt;
    const jitter = Math.random() * this.config.retryBaseDelayMs;
    return base + jitter;
  }
}

async function safeText(response: Response): Promise<string> {
  try {
    const text = await response.text();
    return text.slice(0, MAX_BODY_SNIPPET);
  } catch {
    return "";
  }
}

function wrapNetworkError(err: unknown, endpoint: string): FmpError {
  if (err instanceof Error && err.name === "AbortError") {
    return new FmpError(`FMP request to ${endpoint} timed out`, { cause: err });
  }
  return new FmpError(`FMP request to ${endpoint} failed: ${stringifyError(err)}`, {
    cause: err,
  });
}

function stringifyError(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}
