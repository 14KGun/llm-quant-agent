/** 전체 실시간 시세 (`/quote`). */
export interface Quote {
  symbol: string;
  name: string;
  price: number;
  changePercentage: number;
  change: number;
  volume: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  exchange: string;
  open: number;
  previousClose: number;
  timestamp: number;
}

/** 경량 시세 (`/quote-short`). */
export interface QuoteShort {
  symbol: string;
  price: number;
  change: number;
  volume: number;
}

/** 일봉(EOD) 히스토리 조회 파라미터. */
export interface HistoricalPriceQuery {
  /** 시작일 (YYYY-MM-DD). */
  from?: string;
  /** 종료일 (YYYY-MM-DD). */
  to?: string;
}

/** 일봉(EOD) 가격 캔들 (`/historical-price-eod/full`). */
export interface HistoricalPrice {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  change: number;
  changePercent: number;
  vwap: number;
}
