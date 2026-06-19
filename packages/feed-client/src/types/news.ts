/** 뉴스 기사 (`/news/*`). */
export interface NewsArticle {
  symbol?: string;
  publishedDate: string;
  publisher: string;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
}

/** FMP 큐레이션 기사 (`/fmp-articles`). */
export interface FmpArticle {
  title: string;
  date: string;
  content: string;
  tickers: string;
  image: string;
  link: string;
  author: string;
  site: string;
}

/** 뉴스 조회 공통 쿼리. */
export interface NewsQuery {
  from?: string;
  to?: string;
  page?: number;
  limit?: number;
}

/** 종목 지정 뉴스 조회 쿼리. */
export interface SymbolNewsQuery extends NewsQuery {
  symbols: string[];
}

/** FMP 기사 조회 쿼리. */
export interface ArticlesQuery {
  page?: number;
  limit?: number;
}
