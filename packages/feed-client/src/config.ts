import { FmpConfigError } from "./errors.js";

/** User-supplied configuration for {@link FeedClient}. */
export interface FeedClientConfig {
  /** FMP API key. Falls back to the `FMP_API_KEY` environment variable. */
  apiKey?: string;
  /** Override the API base URL. Defaults to the FMP stable base URL. */
  baseUrl?: string;
  /** Per-request timeout in milliseconds. Defaults to 10_000. */
  timeoutMs?: number;
  /** Maximum number of retries for transient failures. Defaults to 3. */
  maxRetries?: number;
  /** Base delay (ms) for exponential backoff between retries. Defaults to 500. */
  retryBaseDelayMs?: number;
  /** Inject a custom fetch implementation (useful for tests). */
  fetch?: typeof fetch;
}

/** Fully resolved configuration with all defaults applied. */
export interface ResolvedConfig {
  apiKey: string;
  baseUrl: string;
  timeoutMs: number;
  maxRetries: number;
  retryBaseDelayMs: number;
  fetch: typeof fetch;
}

export const DEFAULT_BASE_URL = "https://financialmodelingprep.com/stable";
export const DEFAULT_TIMEOUT_MS = 10_000;
export const DEFAULT_MAX_RETRIES = 3;
export const DEFAULT_RETRY_BASE_DELAY_MS = 500;

/** Validate and merge user config with defaults and environment variables. */
export function resolveConfig(config: FeedClientConfig = {}): ResolvedConfig {
  const apiKey = config.apiKey ?? process.env.FMP_API_KEY;
  if (!apiKey) {
    throw new FmpConfigError(
      "FMP API key is required. Pass `apiKey` or set the FMP_API_KEY environment variable.",
    );
  }

  const fetchImpl = config.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new FmpConfigError(
      "No fetch implementation found. Use Node 18+ or pass a `fetch` in the config.",
    );
  }

  return {
    apiKey,
    baseUrl: (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, ""),
    timeoutMs: config.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    maxRetries: config.maxRetries ?? DEFAULT_MAX_RETRIES,
    retryBaseDelayMs: config.retryBaseDelayMs ?? DEFAULT_RETRY_BASE_DELAY_MS,
    fetch: fetchImpl,
  };
}
