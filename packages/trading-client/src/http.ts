import { TtlCache } from "./cache.js";
import type { ResolvedConfig } from "./config.js";
import { TossApiError, TossConfigError, TossError } from "./errors.js";
import { Semaphore } from "./semaphore.js";
import type { TokenProvider } from "./token.js";

/** Primitive values accepted as query parameters. */
export type QueryValue = string | number | boolean | undefined | null;

/** Query parameter map. Array values are serialized as comma-joined strings. */
export type QueryParams = Record<string, QueryValue | QueryValue[]>;

/** Options for a single request. */
export interface RequestOptions {
  /** HTTP method. Defaults to `GET`. */
  method?: "GET" | "POST";
  /** Query string parameters. */
  query?: QueryParams;
  /** JSON request body (serialized for `POST`). */
  body?: unknown;
  /**
   * 계좌 식별자(`X-Tossinvest-Account`). 미지정 시 클라이언트 기본 계좌(`accountSeq`)를 사용한다.
   * 계좌·자산·주문 API 에서 필요하다.
   */
  accountSeq?: string | number;
}

/** HTTP statuses that are safe to retry. */
const RETRYABLE_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);

const MAX_BODY_SNIPPET = 500;

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Thin HTTP layer over the 토스증권 Open API: builds URLs, injects the
 * `Authorization: Bearer` token (and `X-Tossinvest-Account` when applicable),
 * unwraps the BFF `{ "result": ... }` envelope, parses the `{ "error": ... }`
 * envelope into {@link TossApiError}, enforces a per-request timeout, retries
 * transient failures with exponential backoff (honoring `Retry-After`), and
 * optionally caches successful GETs and limits request concurrency.
 */
export class HttpClient {
  private readonly cache?: TtlCache;
  private readonly limiter?: Semaphore;

  constructor(
    private readonly config: ResolvedConfig,
    private readonly tokenProvider: TokenProvider,
  ) {
    if (config.cacheTtlMs > 0) this.cache = new TtlCache(config.cacheTtlMs);
    if (config.maxConcurrentRequests > 0) {
      this.limiter = new Semaphore(config.maxConcurrentRequests);
    }
  }

  /** Convenience GET helper. */
  get<T>(path: string, query: QueryParams = {}, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, { ...options, method: "GET", query });
  }

  /** Convenience POST helper. */
  post<T>(path: string, body?: unknown, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, { ...options, method: "POST", body });
  }

  /**
   * Issue a request and parse the JSON response as `T`. Successful `GET`
   * responses are served from / written to the cache when caching is enabled;
   * the underlying fetch is gated by the concurrency limiter when configured.
   */
  async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const method = options.method ?? "GET";
    const cacheable = this.cache && method === "GET";
    const key = cacheable ? cacheKeyFor(path, options) : "";
    if (cacheable) {
      const cached = this.cache!.get(key);
      if (cached !== undefined) return cached as T;
    }

    const result = this.limiter
      ? await this.limiter.run(() => this.fetchJson<T>(path, options))
      : await this.fetchJson<T>(path, options);

    if (cacheable) this.cache!.set(key, result);
    return result;
  }

  /** Clear all cached responses (no-op when caching is disabled). */
  clearCache(): void {
    this.cache?.clear();
  }

  /** Execute the request with timeout + retry, returning the unwrapped body. */
  private async fetchJson<T>(path: string, options: RequestOptions): Promise<T> {
    const url = this.buildUrl(path, options.query);
    const method = options.method ?? "GET";
    let lastError: unknown;
    // 401 수신 시 토큰을 1 회 무효화·재발급하고 재시도한다(일시 재시도 예산과 별개).
    let reauthed = false;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        const init = await this.buildRequestInit(method, options);
        const response = await this.fetchWithTimeout(url, init);

        if (response.ok) {
          return await this.parseJson<T>(response, path);
        }

        const apiError = await this.parseError(response, path);

        if (
          response.status === 401 &&
          !reauthed &&
          typeof this.tokenProvider.invalidate === "function"
        ) {
          reauthed = true;
          this.tokenProvider.invalidate();
          attempt--; // 인증 재시도는 일시 재시도 예산에서 차감하지 않는다.
          continue;
        }

        if (RETRYABLE_STATUS.has(response.status) && attempt < this.config.maxRetries) {
          lastError = apiError;
          await sleep(this.retryDelay(attempt, response.headers.get("retry-after")));
          continue;
        }
        throw apiError;
      } catch (err) {
        // Non-retryable API/config errors (4xx, parse failures, token issuance)
        // bubble up immediately — retrying won't fix them.
        if (err instanceof TossApiError || err instanceof TossConfigError) throw err;

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
      : new TossError(`토스증권 요청(${path})이 재시도 후에도 실패했습니다.`);
  }

  /** Build a fully-qualified request URL with serialized params. */
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

    return url.toString();
  }

  /** Assemble fetch `RequestInit`: bearer token, account header, JSON body. */
  private async buildRequestInit(
    method: "GET" | "POST",
    options: RequestOptions,
  ): Promise<RequestInit> {
    const token = await this.tokenProvider.getAccessToken();
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };

    const accountSeq = options.accountSeq ?? this.config.accountSeq;
    if (accountSeq !== undefined) headers["X-Tossinvest-Account"] = String(accountSeq);

    const init: RequestInit = { method, headers };
    if (method === "POST" && options.body !== undefined) {
      headers["Content-Type"] = "application/json";
      init.body = JSON.stringify(options.body);
    }
    return init;
  }

  private async fetchWithTimeout(url: string, init: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.config.timeoutMs);
    try {
      return await this.config.fetch(url, { ...init, signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
  }

  /** Parse a success body, unwrapping the BFF `{ "result": ... }` envelope. */
  private async parseJson<T>(response: Response, endpoint: string): Promise<T> {
    // 204 등 본문이 없는 응답은 undefined 로 처리한다.
    const text = await safeText(response);
    if (text.length === 0) return undefined as T;

    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new TossApiError("토스증권 응답을 JSON 으로 파싱하지 못했습니다.", {
        status: response.status,
        endpoint,
        responseBody: text.slice(0, MAX_BODY_SNIPPET),
        cause: err,
      });
    }

    if (data !== null && typeof data === "object" && "result" in data) {
      return (data as { result: T }).result;
    }
    return data as T;
  }

  /** Parse an error response into a {@link TossApiError} from the error envelope. */
  private async parseError(response: Response, endpoint: string): Promise<TossApiError> {
    const text = await safeText(response);
    const base = {
      status: response.status,
      endpoint,
      requestId: response.headers.get("x-request-id") ?? undefined,
      responseBody: text.slice(0, MAX_BODY_SNIPPET),
    };

    try {
      const parsed = JSON.parse(text) as { error?: TossErrorEnvelope };
      const envelope = parsed.error;
      if (envelope) {
        return new TossApiError(envelope.message ?? `토스증권 API 오류 (${response.status})`, {
          ...base,
          code: envelope.code,
          requestId: envelope.requestId ?? base.requestId,
          data: envelope.data,
        });
      }
    } catch {
      // 본문이 JSON 이 아니거나 envelope 형식이 아니면 상태 코드 기반 메시지로 폴백.
    }

    return new TossApiError(`토스증권 API 요청이 ${response.status} 로 실패했습니다.`, base);
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

interface TossErrorEnvelope {
  requestId?: string;
  code?: string;
  message?: string;
  data?: unknown;
}

/** Stable cache key from method + path + sorted params + account. */
function cacheKeyFor(path: string, options: RequestOptions): string {
  const cleanPath = path.replace(/^\/+/, "");
  const params = options.query ?? {};
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]): [string, string] => [
      key,
      Array.isArray(value)
        ? value.filter((v) => v !== undefined && v !== null).join(",")
        : String(value),
    ])
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const account = options.accountSeq === undefined ? "" : `@${options.accountSeq}`;
  const base = query.length > 0 ? `${cleanPath}?${query}` : cleanPath;
  return `${base}${account}`;
}

async function safeText(response: Response): Promise<string> {
  try {
    return await response.text();
  } catch {
    return "";
  }
}

function wrapNetworkError(err: unknown, endpoint: string): TossError {
  if (err instanceof Error && err.name === "AbortError") {
    return new TossError(`토스증권 요청(${endpoint})이 타임아웃되었습니다.`, { cause: err });
  }
  return new TossError(`토스증권 요청(${endpoint})이 실패했습니다: ${stringifyError(err)}`, {
    cause: err,
  });
}

function stringifyError(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}
