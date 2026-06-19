import type { HttpClient } from "../http.js";
import type { StatementQuery } from "../types/common.js";
import type {
  BalanceSheet,
  CashFlowStatement,
  FinancialRatios,
  IncomeStatement,
  KeyMetrics,
} from "../types/financial.js";

/** 재무제표 / 비율 / 지표 엔드포인트. */
export class FinancialsResource {
  constructor(private readonly http: HttpClient) {}

  /** 손익계산서. */
  getIncomeStatement(symbol: string, query: StatementQuery = {}): Promise<IncomeStatement[]> {
    return this.http.get<IncomeStatement[]>("income-statement", {
      symbol,
      period: query.period,
      limit: query.limit,
    });
  }

  /** 재무상태표. */
  getBalanceSheet(symbol: string, query: StatementQuery = {}): Promise<BalanceSheet[]> {
    return this.http.get<BalanceSheet[]>("balance-sheet-statement", {
      symbol,
      period: query.period,
      limit: query.limit,
    });
  }

  /** 현금흐름표. */
  getCashFlow(symbol: string, query: StatementQuery = {}): Promise<CashFlowStatement[]> {
    return this.http.get<CashFlowStatement[]>("cash-flow-statement", {
      symbol,
      period: query.period,
      limit: query.limit,
    });
  }

  /** 재무비율. */
  getRatios(symbol: string, query: StatementQuery = {}): Promise<FinancialRatios[]> {
    return this.http.get<FinancialRatios[]>("ratios", {
      symbol,
      period: query.period,
      limit: query.limit,
    });
  }

  /** 핵심 지표. */
  getKeyMetrics(symbol: string, query: StatementQuery = {}): Promise<KeyMetrics[]> {
    return this.http.get<KeyMetrics[]>("key-metrics", {
      symbol,
      period: query.period,
      limit: query.limit,
    });
  }
}
