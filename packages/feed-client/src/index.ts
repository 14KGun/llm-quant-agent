export { FeedClient, createFeedClient } from "./client.js";
export { HttpClient } from "./http.js";
export type { QueryParams, QueryValue } from "./http.js";
export {
  resolveConfig,
  DEFAULT_BASE_URL,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_MAX_RETRIES,
  DEFAULT_RETRY_BASE_DELAY_MS,
} from "./config.js";
export type { FeedClientConfig, ResolvedConfig } from "./config.js";
export { FmpError, FmpConfigError, FmpApiError } from "./errors.js";
export type { FmpApiErrorOptions } from "./errors.js";

// Resources
export { QuotesResource } from "./resources/quotes.js";
export { CompanyResource } from "./resources/company.js";
export { FinancialsResource } from "./resources/financials.js";

// Response types
export type { ReportingPeriod, StatementQuery } from "./types/common.js";
export type {
  Quote,
  QuoteShort,
  HistoricalPrice,
  HistoricalPriceQuery,
} from "./types/quote.js";
export type { CompanyProfile } from "./types/company.js";
export type {
  FinancialStatementBase,
  IncomeStatement,
  BalanceSheet,
  CashFlowStatement,
  FinancialRatios,
  KeyMetrics,
} from "./types/financial.js";
