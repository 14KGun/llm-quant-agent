/** 심볼/이름 검색 결과 (`/search-symbol`, `/search-name`). */
export interface SymbolSearchResult {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  exchangeFullName: string;
}

/** 종목 목록 항목 (`/stock-list`, `/etf-list`). */
export interface StockListItem {
  symbol: string;
  companyName: string;
}

/** 거래소 정보 (`/available-exchanges`). */
export interface ExchangeInfo {
  exchange: string;
  name: string;
  countryName: string;
  countryCode: string;
  symbolSuffix: string;
  delay: string;
}
