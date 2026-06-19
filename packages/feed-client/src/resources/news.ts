import type { HttpClient } from "../http.js";
import type {
  ArticlesQuery,
  FmpArticle,
  NewsArticle,
  NewsQuery,
  SymbolNewsQuery,
} from "../types/news.js";

/** 뉴스 엔드포인트 (`/news/*`, `/fmp-articles`). */
export class NewsResource {
  constructor(private readonly http: HttpClient) {}

  /** 종목 지정 주식 뉴스. */
  getStockNews(query: SymbolNewsQuery): Promise<NewsArticle[]> {
    return this.http.get<NewsArticle[]>("news/stock", {
      symbols: query.symbols,
      from: query.from,
      to: query.to,
      page: query.page,
      limit: query.limit,
    });
  }

  /** 최신 일반 경제 뉴스. */
  getGeneralNews(query: NewsQuery = {}): Promise<NewsArticle[]> {
    return this.http.get<NewsArticle[]>("news/general-latest", {
      from: query.from,
      to: query.to,
      page: query.page,
      limit: query.limit,
    });
  }

  /** 종목 지정 보도자료. */
  getPressReleases(query: SymbolNewsQuery): Promise<NewsArticle[]> {
    return this.http.get<NewsArticle[]>("news/press-releases", {
      symbols: query.symbols,
      from: query.from,
      to: query.to,
      page: query.page,
      limit: query.limit,
    });
  }

  /** FMP 큐레이션 기사. */
  getArticles(query: ArticlesQuery = {}): Promise<FmpArticle[]> {
    return this.http.get<FmpArticle[]>("fmp-articles", {
      page: query.page,
      limit: query.limit,
    });
  }

  /** 최신 암호화폐 뉴스. */
  getCryptoNews(query: NewsQuery = {}): Promise<NewsArticle[]> {
    return this.http.get<NewsArticle[]>("news/crypto-latest", {
      from: query.from,
      to: query.to,
      page: query.page,
      limit: query.limit,
    });
  }

  /** 최신 외환 뉴스. */
  getForexNews(query: NewsQuery = {}): Promise<NewsArticle[]> {
    return this.http.get<NewsArticle[]>("news/forex-latest", {
      from: query.from,
      to: query.to,
      page: query.page,
      limit: query.limit,
    });
  }
}
