/** 목표주가 요약 (`/price-target-summary`). */
export interface PriceTargetSummary {
  symbol: string;
  lastMonthCount: number;
  lastMonthAvgPriceTarget: number;
  lastQuarterCount: number;
  lastQuarterAvgPriceTarget: number;
  lastYearCount: number;
  lastYearAvgPriceTarget: number;
  allTimeCount: number;
  allTimeAvgPriceTarget: number;
  publishers: string;
}

/** 목표주가 컨센서스 (`/price-target-consensus`). */
export interface PriceTargetConsensus {
  symbol: string;
  targetHigh: number;
  targetLow: number;
  targetConsensus: number;
  targetMedian: number;
}

/** 애널리스트 실적 추정치 (`/analyst-estimates`). */
export interface AnalystEstimate {
  symbol: string;
  date: string;
  revenueLow: number;
  revenueHigh: number;
  revenueAvg: number;
  ebitdaAvg: number;
  netIncomeAvg: number;
  epsAvg: number;
  epsHigh: number;
  epsLow: number;
  numAnalystsRevenue: number;
  numAnalystsEps: number;
}

/** 종합 등급 스냅샷 (`/ratings-snapshot`). */
export interface RatingSnapshot {
  symbol: string;
  rating: string;
  overallScore: number;
  discountedCashFlowScore: number;
  returnOnEquityScore: number;
  returnOnAssetsScore: number;
  debtToEquityScore: number;
  priceToEarningsScore: number;
  priceToBookScore: number;
}

/** 등급 히스토리 (`/ratings-historical`). */
export interface HistoricalRating {
  symbol: string;
  date: string;
  rating: string;
  overallScore: number;
}

/** 투자의견 변경(업/다운그레이드) (`/grades`). */
export interface StockGrade {
  symbol: string;
  date: string;
  gradingCompany: string;
  previousGrade: string;
  newGrade: string;
  action: string;
}

/** 등급 컨센서스 분포 (`/grades-consensus`). */
export interface GradesConsensus {
  symbol: string;
  strongBuy: number;
  buy: number;
  hold: number;
  sell: number;
  strongSell: number;
  consensus: string;
}

/** 애널리스트 추정치 조회 쿼리. */
export interface AnalystEstimateQuery {
  period?: "annual" | "quarter";
  page?: number;
  limit?: number;
}
