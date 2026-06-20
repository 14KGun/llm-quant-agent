import { resolveConfig, type ResolvedConfig, type TradingClientConfig } from "./config.js";
import { TossConfigError } from "./errors.js";
import { HttpClient, type RequestOptions } from "./http.js";
import { StaticTokenProvider, type TokenProvider } from "./token.js";

/**
 * Entry point for the 토스증권 Open API SDK.
 *
 * Phase 1 ships the transport core: configuration, auth header injection,
 * BFF envelope handling, error parsing, retries, caching, and concurrency
 * limiting. Domain resources (market data, account, asset, order, ...) and the
 * OAuth token provider land in later phases. Until then, use the generic
 * {@link TradingClient.request} method with a pre-issued `accessToken`.
 *
 * @example
 * ```ts
 * const client = new TradingClient({ accessToken: process.env.TOSSINVEST_ACCESS_TOKEN });
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
 * Default token provider for Phase 1. Uses a pre-issued `accessToken` when
 * available; otherwise defers to Phase 2, where credentials are exchanged for a
 * token via the OAuth `client_credentials` flow.
 */
function createDefaultTokenProvider(config: ResolvedConfig): TokenProvider {
  if (config.accessToken) return new StaticTokenProvider(config.accessToken);
  return {
    getAccessToken() {
      return Promise.reject(
        new TossConfigError(
          "OAuth 토큰 발급은 Phase 2 에서 구현됩니다. 지금은 `accessToken` 을 전달하거나 `tokenProvider` 를 주입하세요.",
        ),
      );
    },
  };
}
