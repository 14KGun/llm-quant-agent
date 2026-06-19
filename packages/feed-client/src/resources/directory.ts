import type { HttpClient } from "../http.js";
import type {
  ExchangeInfo,
  StockListItem,
  SymbolSearchResult,
} from "../types/directory.js";

/** 검색 / 디렉토리 엔드포인트 (심볼 검색, 종목 목록, 메타 정보). */
export class DirectoryResource {
  constructor(private readonly http: HttpClient) {}

  /** 티커 심볼로 검색. */
  searchSymbol(query: string, limit?: number): Promise<SymbolSearchResult[]> {
    return this.http.get<SymbolSearchResult[]>("search-symbol", { query, limit });
  }

  /** 회사명으로 검색. */
  searchByName(query: string, limit?: number): Promise<SymbolSearchResult[]> {
    return this.http.get<SymbolSearchResult[]>("search-name", { query, limit });
  }

  /** 전체 주식 목록. */
  getStockList(): Promise<StockListItem[]> {
    return this.http.get<StockListItem[]>("stock-list");
  }

  /** 전체 ETF 목록. */
  getETFList(): Promise<StockListItem[]> {
    return this.http.get<StockListItem[]>("etf-list");
  }

  /** 사용 가능한 거래소 목록. */
  getAvailableExchanges(): Promise<ExchangeInfo[]> {
    return this.http.get<ExchangeInfo[]>("available-exchanges");
  }

  /** 사용 가능한 섹터 목록. */
  getAvailableSectors(): Promise<string[]> {
    return this.http.get<string[]>("available-sectors");
  }

  /** 사용 가능한 산업 목록. */
  getAvailableIndustries(): Promise<string[]> {
    return this.http.get<string[]>("available-industries");
  }
}
