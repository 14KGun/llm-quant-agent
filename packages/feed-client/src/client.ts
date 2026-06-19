import { resolveConfig, type FeedClientConfig, type ResolvedConfig } from "./config.js";
import { HttpClient, type QueryParams } from "./http.js";
import { CompanyResource } from "./resources/company.js";
import { FinancialsResource } from "./resources/financials.js";
import { QuotesResource } from "./resources/quotes.js";

/**
 * Entry point for the FMP SDK.
 *
 * Domain modules are exposed as resources ({@link FeedClient.quotes},
 * {@link FeedClient.company}, {@link FeedClient.financials}). For endpoints not
 * yet covered by a resource, use the generic {@link FeedClient.request} method.
 *
 * @example
 * ```ts
 * const client = new FeedClient({ apiKey: process.env.FMP_API_KEY });
 * const quote = await client.quotes.getQuote("AAPL");
 * ```
 */
export class FeedClient {
  /** Low-level HTTP transport. Domain modules build on this. */
  readonly http: HttpClient;
  /** 시세 엔드포인트. */
  readonly quotes: QuotesResource;
  /** 기업 정보 엔드포인트. */
  readonly company: CompanyResource;
  /** 재무제표 / 비율 / 지표 엔드포인트. */
  readonly financials: FinancialsResource;
  private readonly config: ResolvedConfig;

  constructor(config: FeedClientConfig = {}) {
    this.config = resolveConfig(config);
    this.http = new HttpClient(this.config);
    this.quotes = new QuotesResource(this.http);
    this.company = new CompanyResource(this.http);
    this.financials = new FinancialsResource(this.http);
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
