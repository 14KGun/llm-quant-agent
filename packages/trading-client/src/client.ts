import { resolveConfig, type ResolvedConfig, type TradingClientConfig } from "./config.js";
import { TossConfigError } from "./errors.js";
import { HttpClient, type RequestOptions } from "./http.js";
import { OAuthTokenProvider } from "./oauth.js";
import { StaticTokenProvider, type TokenProvider } from "./token.js";

/**
 * Entry point for the 토스증권 Open API SDK.
 *
 * Configuration, auth (OAuth `client_credentials` token issuance + caching),
 * header injection, BFF envelope handling, error parsing, retries, caching, and
 * concurrency limiting are in place. Domain resources (market data, account,
 * asset, order, ...) land in later phases; until then use the generic
 * {@link TradingClient.request} method.
 *
 * @example
 * ```ts
 * // client_id/secret 를 주면 토큰을 자동 발급·갱신한다.
 * const client = new TradingClient({
 *   clientId: process.env.TOSSINVEST_API_KEY,
 *   clientSecret: process.env.TOSSINVEST_SECRET_KEY,
 * });
 * const stocks = await client.request("api/v1/stocks", { query: { symbols: "005930" } });
 * ```
 */
export class TradingClient {
  /** Low-level HTTP transport. Domain modules build on this. */
  readonly http: HttpClient;
  /** Access token provider backing the `Authorization` header. */
  readonly tokenProvider: TokenProvider;
  private readonly config: ResolvedConfig;

  constructor(config: TradingClientConfig = {}) {
    this.config = resolveConfig(config);
    this.tokenProvider = config.tokenProvider ?? createDefaultTokenProvider(this.config);
    this.http = new HttpClient(this.config, this.tokenProvider);
  }

  /** Issue a typed request against a 토스증권 API endpoint path. */
  request<T>(path: string, options?: RequestOptions): Promise<T> {
    return this.http.request<T>(path, options);
  }

  /** Clear cached responses (no-op when caching is disabled). */
  clearCache(): void {
    this.http.clearCache();
  }

  /** Resolved base URL the client is pointed at. */
  get baseUrl(): string {
    return this.config.baseUrl;
  }
}

/** Convenience factory mirroring the {@link TradingClient} constructor. */
export function createTradingClient(config: TradingClientConfig = {}): TradingClient {
  return new TradingClient(config);
}

/**
 * Default token provider. Uses a pre-issued `accessToken` when available;
 * otherwise exchanges `clientId`/`clientSecret` for a token via the OAuth
 * `client_credentials` flow. {@link resolveConfig} guarantees one of these is
 * present, so the rejecting fallback is defensive only.
 */
function createDefaultTokenProvider(config: ResolvedConfig): TokenProvider {
  if (config.accessToken) return new StaticTokenProvider(config.accessToken);
  if (config.clientId && config.clientSecret) {
    return new OAuthTokenProvider({
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      baseUrl: config.baseUrl,
      fetch: config.fetch,
      timeoutMs: config.timeoutMs,
      maxRetries: config.maxRetries,
      retryBaseDelayMs: config.retryBaseDelayMs,
      refreshMarginMs: config.tokenRefreshMarginMs,
    });
  }
  return {
    getAccessToken() {
      return Promise.reject(
        new TossConfigError(
          "토스증권 인증 정보가 없습니다. `clientId`+`clientSecret`, `accessToken`, 또는 `tokenProvider` 를 제공하세요.",
        ),
      );
    },
  };
}
