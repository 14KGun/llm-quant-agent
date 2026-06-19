import { resolveConfig, type FeedClientConfig, type ResolvedConfig } from "./config.js";
import { HttpClient, type QueryParams } from "./http.js";

/**
 * Entry point for the FMP SDK.
 *
 * Phase 1 ships the configured transport and a generic typed {@link request}
 * method. Domain modules (quotes, financials, news, ...) are layered on top of
 * this client in later phases.
 *
 * @example
 * ```ts
 * const client = new FeedClient({ apiKey: process.env.FMP_API_KEY });
 * const quote = await client.request<Quote[]>("quote", { symbol: "AAPL" });
 * ```
 */
export class FeedClient {
  /** Low-level HTTP transport. Domain modules build on this. */
  readonly http: HttpClient;
  private readonly config: ResolvedConfig;

  constructor(config: FeedClientConfig = {}) {
    this.config = resolveConfig(config);
    this.http = new HttpClient(this.config);
  }

  /** Issue a typed GET request against an FMP endpoint path. */
  request<T>(path: string, params?: QueryParams): Promise<T> {
    return this.http.get<T>(path, params);
  }

  /** Resolved base URL the client is pointed at (api key omitted). */
  get baseUrl(): string {
    return this.config.baseUrl;
  }
}

/** Convenience factory mirroring the {@link FeedClient} constructor. */
export function createFeedClient(config: FeedClientConfig = {}): FeedClient {
  return new FeedClient(config);
}
