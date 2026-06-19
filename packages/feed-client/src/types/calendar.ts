/** 실적 발표 일정 (`/earnings-calendar`). */
export interface EarningsEvent {
  symbol: string;
  date: string;
  epsActual: number | null;
  epsEstimated: number | null;
  revenueActual: number | null;
  revenueEstimated: number | null;
  lastUpdated: string;
}

/** 배당 일정 (`/dividends-calendar`). */
export interface DividendEvent {
  symbol: string;
  date: string;
  recordDate: string;
  paymentDate: string;
  declarationDate: string;
  adjDividend: number;
  dividend: number;
  yield: number;
  frequency: string;
}

/** IPO 일정 (`/ipos-calendar`). */
export interface IpoEvent {
  symbol: string;
  date: string;
  company: string;
  exchange: string;
  actions: string;
  shares: number | null;
  priceRange: string | null;
  marketCap: number | null;
}

/** 주식 분할 일정 (`/splits-calendar`). */
export interface StockSplitEvent {
  symbol: string;
  date: string;
  numerator: number;
  denominator: number;
}
