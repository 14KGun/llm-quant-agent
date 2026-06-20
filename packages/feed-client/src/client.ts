import { resolveConfig, type FeedClientConfig, type ResolvedConfig } from "./config.js";
import { HttpClient, type QueryParams } from "./http.js";
import { AnalystResource } from "./resources/analyst.js";
import { CalendarResource } from "./resources/calendar.js";
import { CompanyResource } from "./resources/company.js";
import { DirectoryResource } from "./resources/directory.js";
import { EconomicResource } from "./resources/economic.js";
import { FinancialsResource } from "./resources/financials.js";
import { MarketResource } from "./resources/market.js";
import { NewsResource } from "./resources/news.js";
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
  /** 뉴스 엔드포인트. */
  readonly news: NewsResource;
  /** 시장 데이터 엔드포인트. */
  readonly market: MarketResource;
  /** 경제지표 엔드포인트. */
  readonly economic: EconomicResource;
  /** 캘린더 엔드포인트(실적/배당/IPO/분할). */
  readonly calendar: CalendarResource;
  /** 애널리스트 엔드포인트. */
  readonly analyst: AnalystResource;
  /** 검색 / 디렉토리 엔드포인트. */
  readonly directory: DirectoryResource;
  private readonly config: ResolvedConfig;

  constructor(config: FeedClientConfig = {}) {
    this.config = resolveConfig(config);
    this.http = new HttpClient(this.config);
    this.quotes = new QuotesResource(this.http);
    this.company = new CompanyResource(this.http);
    this.financials = new FinancialsResource(this.http);
    this.news = new NewsResource(this.http);
    this.market = new MarketResource(this.http);
    this.economic = new EconomicResource(this.http);
    this.calendar = new CalendarResource(this.http);
    this.analyst = new AnalystResource(this.http);
    this.directory = new DirectoryResource(this.http);
  }

  /** Issue a typed GET request against an FMP endpoint path. */
  request<T>(path: string, params?: QueryParams): Promise<T> {
    return this.http.get<T>(path, params);
  }

  /** Clear cached responses (no-op when caching is disabled). */
  clearCache(): void {
    this.http.clearCache();
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
