/** 재무제표 공통 식별 필드. */
export interface FinancialStatementBase {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fiscalYear: string;
  period: string;
}

/** 손익계산서 (`/income-statement`). 주요 라인 아이템의 부분 집합. */
export interface IncomeStatement extends FinancialStatementBase {
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  operatingExpenses: number;
  operatingIncome: number;
  ebitda: number;
  netIncome: number;
  eps: number;
  epsDiluted: number;
}

/** 재무상태표 (`/balance-sheet-statement`). 주요 항목의 부분 집합. */
export interface BalanceSheet extends FinancialStatementBase {
  totalAssets: number;
  totalCurrentAssets: number;
  cashAndCashEquivalents: number;
  totalLiabilities: number;
  totalCurrentLiabilities: number;
  totalDebt: number;
  netDebt: number;
  totalStockholdersEquity: number;
}

/** 현금흐름표 (`/cash-flow-statement`). 주요 항목의 부분 집합. */
export interface CashFlowStatement extends FinancialStatementBase {
  netIncome: number;
  operatingCashFlow: number;
  capitalExpenditure: number;
  freeCashFlow: number;
  dividendsPaid: number;
}

/** 재무비율 (`/ratios`). 주요 비율의 부분 집합. */
export interface FinancialRatios {
  symbol: string;
  date: string;
  fiscalYear: string;
  period: string;
  reportedCurrency: string;
  grossProfitMargin: number;
  operatingProfitMargin: number;
  netProfitMargin: number;
  currentRatio: number;
  quickRatio: number;
  debtToEquityRatio: number;
  returnOnEquity: number;
  returnOnAssets: number;
  priceToEarningsRatio: number;
}

/** 핵심 지표 (`/key-metrics`). 주요 지표의 부분 집합. */
export interface KeyMetrics {
  symbol: string;
  date: string;
  fiscalYear: string;
  period: string;
  reportedCurrency: string;
  marketCap: number;
  enterpriseValue: number;
  evToSales: number;
  evToEBITDA: number;
  freeCashFlowYield: number;
  returnOnInvestedCapital: number;
}
