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
export { NewsResource } from "./resources/news.js";
export { MarketResource } from "./resources/market.js";
export { EconomicResource } from "./resources/economic.js";
export { CalendarResource } from "./resources/calendar.js";
export { AnalystResource } from "./resources/analyst.js";
export { DirectoryResource } from "./resources/directory.js";

// Response types
export type { ReportingPeriod, StatementQuery, DateRangeQuery } from "./types/common.js";
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
export type {
  NewsArticle,
  FmpArticle,
  NewsQuery,
  SymbolNewsQuery,
  ArticlesQuery,
} from "./types/news.js";
export type { MarketMover, SectorPerformance, MarketHours } from "./types/market.js";
export type {
  TreasuryRate,
  EconomicIndicatorName,
  EconomicIndicator,
  EconomicCalendarEvent,
  MarketRiskPremium,
} from "./types/economic.js";
export type {
  EarningsEvent,
  DividendEvent,
  IpoEvent,
  StockSplitEvent,
} from "./types/calendar.js";
export type {
  PriceTargetSummary,
  PriceTargetConsensus,
  AnalystEstimate,
  AnalystEstimateQuery,
  RatingSnapshot,
  HistoricalRating,
  StockGrade,
  GradesConsensus,
} from "./types/analyst.js";
export type {
  SymbolSearchResult,
  StockListItem,
  ExchangeInfo,
} from "./types/directory.js";
