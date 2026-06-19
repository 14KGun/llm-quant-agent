/** 국채 금리 (`/treasury-rates`). */
export interface TreasuryRate {
  date: string;
  month1: number;
  month2: number;
  month3: number;
  month6: number;
  year1: number;
  year2: number;
  year3: number;
  year5: number;
  year7: number;
  year10: number;
  year20: number;
  year30: number;
}

/**
 * 경제지표 이름 (`/economic-indicators` 의 `name`).
 * 자주 쓰는 값을 제안하되 임의 문자열도 허용한다.
 */
export type EconomicIndicatorName =
  | "GDP"
  | "realGDP"
  | "realGDPPerCapita"
  | "federalFunds"
  | "CPI"
  | "inflationRate"
  | "inflation"
  | "retailSales"
  | "consumerSentiment"
  | "durableGoods"
  | "unemploymentRate"
  | "totalNonfarmPayroll"
  | "initialClaims"
  | "industrialProductionTotalIndex"
  | "30YearFixedRateMortgageAverage"
  | "15YearFixedRateMortgageAverage"
  // 그 외 FMP가 지원하는 임의 지표명
  | (string & {});

/** 경제지표 값 (`/economic-indicators`). */
export interface EconomicIndicator {
  name: string;
  date: string;
  value: number;
}

/** 경제 캘린더 이벤트 (`/economic-calendar`). */
export interface EconomicCalendarEvent {
  date: string;
  country: string;
  event: string;
  currency: string;
  previous: number | null;
  estimate: number | null;
  actual: number | null;
  change: number | null;
  impact: string;
  changePercentage: number | null;
  unit?: string;
}

/** 시장 위험 프리미엄 (`/market-risk-premium`). */
export interface MarketRiskPremium {
  country: string;
  continent: string | null;
  countryRiskPremium: number;
  totalEquityRiskPremium: number;
}
