import { describe, expect, it, vi } from "vitest";
import type { HttpClient } from "../http.js";
import { AnalystResource } from "./analyst.js";
import { CalendarResource } from "./calendar.js";
import { CompanyResource } from "./company.js";
import { DirectoryResource } from "./directory.js";
import { EconomicResource } from "./economic.js";
import { FinancialsResource } from "./financials.js";
import { MarketResource } from "./market.js";
import { NewsResource } from "./news.js";
import { QuotesResource } from "./quotes.js";

function stubHttp(result: unknown) {
  const get = vi.fn().mockResolvedValue(result);
  const http = { get } as unknown as HttpClient;
  return { http, get };
}

describe("QuotesResource", () => {
  it("getQuote unwraps the first element", async () => {
    const { http, get } = stubHttp([{ symbol: "AAPL", price: 100 }]);
    const quote = await new QuotesResource(http).getQuote("AAPL");
    expect(quote).toEqual({ symbol: "AAPL", price: 100 });
    expect(get).toHaveBeenCalledWith("quote", { symbol: "AAPL" });
  });

  it("getQuote returns undefined for an empty array", async () => {
    const { http } = stubHttp([]);
    await expect(new QuotesResource(http).getQuote("AAPL")).resolves.toBeUndefined();
  });

  it("getBatchQuotes forwards the symbols array", async () => {
    const { http, get } = stubHttp([{ symbol: "AAPL" }, { symbol: "MSFT" }]);
    const quotes = await new QuotesResource(http).getBatchQuotes(["AAPL", "MSFT"]);
    expect(quotes).toHaveLength(2);
    expect(get).toHaveBeenCalledWith("batch-quote", { symbols: ["AAPL", "MSFT"] });
  });

  it("getHistoricalPrice forwards from/to", async () => {
    const { http, get } = stubHttp([]);
    await new QuotesResource(http).getHistoricalPrice("AAPL", {
      from: "2024-01-01",
      to: "2024-02-01",
    });
    expect(get).toHaveBeenCalledWith("historical-price-eod/full", {
      symbol: "AAPL",
      from: "2024-01-01",
      to: "2024-02-01",
    });
  });
});

describe("CompanyResource", () => {
  it("getProfile unwraps the first element", async () => {
    const { http, get } = stubHttp([{ symbol: "AAPL", companyName: "Apple Inc." }]);
    const profile = await new CompanyResource(http).getProfile("AAPL");
    expect(profile?.companyName).toBe("Apple Inc.");
    expect(get).toHaveBeenCalledWith("profile", { symbol: "AAPL" });
  });
});

describe("FinancialsResource", () => {
  it("getIncomeStatement forwards period and limit", async () => {
    const { http, get } = stubHttp([]);
    await new FinancialsResource(http).getIncomeStatement("AAPL", {
      period: "quarter",
      limit: 4,
    });
    expect(get).toHaveBeenCalledWith("income-statement", {
      symbol: "AAPL",
      period: "quarter",
      limit: 4,
    });
  });

  it("maps each statement method to its endpoint path", async () => {
    const { http, get } = stubHttp([]);
    const financials = new FinancialsResource(http);
    await financials.getBalanceSheet("AAPL");
    await financials.getCashFlow("AAPL");
    await financials.getRatios("AAPL");
    await financials.getKeyMetrics("AAPL");

    const paths = get.mock.calls.map((call) => call[0]);
    expect(paths).toEqual([
      "balance-sheet-statement",
      "cash-flow-statement",
      "ratios",
      "key-metrics",
    ]);
  });
});

describe("NewsResource", () => {
  it("getStockNews forwards symbols and pagination", async () => {
    const { http, get } = stubHttp([]);
    await new NewsResource(http).getStockNews({
      symbols: ["AAPL", "MSFT"],
      from: "2024-01-01",
      limit: 10,
    });
    expect(get).toHaveBeenCalledWith("news/stock", {
      symbols: ["AAPL", "MSFT"],
      from: "2024-01-01",
      to: undefined,
      page: undefined,
      limit: 10,
    });
  });

  it("maps news methods to their endpoint paths", async () => {
    const { http, get } = stubHttp([]);
    const news = new NewsResource(http);
    await news.getGeneralNews();
    await news.getPressReleases({ symbols: ["AAPL"] });
    await news.getArticles();
    await news.getCryptoNews();
    await news.getForexNews();

    const paths = get.mock.calls.map((call) => call[0]);
    expect(paths).toEqual([
      "news/general-latest",
      "news/press-releases",
      "fmp-articles",
      "news/crypto-latest",
      "news/forex-latest",
    ]);
  });
});

describe("MarketResource", () => {
  it("maps mover methods to their endpoint paths", async () => {
    const { http, get } = stubHttp([]);
    const market = new MarketResource(http);
    await market.getGainers();
    await market.getLosers();
    await market.getMostActive();

    const paths = get.mock.calls.map((call) => call[0]);
    expect(paths).toEqual(["biggest-gainers", "biggest-losers", "most-actives"]);
  });

  it("getSectorPerformance and getMarketHours forward params", async () => {
    const { http, get } = stubHttp([]);
    const market = new MarketResource(http);
    await market.getSectorPerformance("2024-06-03");
    await market.getMarketHours("NASDAQ");

    expect(get).toHaveBeenNthCalledWith(1, "sector-performance-snapshot", {
      date: "2024-06-03",
    });
    expect(get).toHaveBeenNthCalledWith(2, "exchange-market-hours", { exchange: "NASDAQ" });
  });
});

describe("EconomicResource", () => {
  it("getEconomicIndicator forwards name and date range", async () => {
    const { http, get } = stubHttp([]);
    await new EconomicResource(http).getEconomicIndicator("GDP", {
      from: "2023-01-01",
      to: "2024-01-01",
    });
    expect(get).toHaveBeenCalledWith("economic-indicators", {
      name: "GDP",
      from: "2023-01-01",
      to: "2024-01-01",
    });
  });

  it("maps economic methods to their endpoint paths", async () => {
    const { http, get } = stubHttp([]);
    const economic = new EconomicResource(http);
    await economic.getTreasuryRates();
    await economic.getEconomicCalendar();
    await economic.getMarketRiskPremium();

    const paths = get.mock.calls.map((call) => call[0]);
    expect(paths).toEqual(["treasury-rates", "economic-calendar", "market-risk-premium"]);
  });
});

describe("CalendarResource", () => {
  it("maps calendar methods to their endpoint paths with date range", async () => {
    const { http, get } = stubHttp([]);
    const calendar = new CalendarResource(http);
    await calendar.getEarningsCalendar({ from: "2024-01-01", to: "2024-01-31" });
    await calendar.getDividendsCalendar();
    await calendar.getIPOCalendar();
    await calendar.getStockSplitsCalendar();

    const paths = get.mock.calls.map((call) => call[0]);
    expect(paths).toEqual([
      "earnings-calendar",
      "dividends-calendar",
      "ipos-calendar",
      "splits-calendar",
    ]);
    expect(get).toHaveBeenNthCalledWith(1, "earnings-calendar", {
      from: "2024-01-01",
      to: "2024-01-31",
    });
  });
});

describe("AnalystResource", () => {
  it("getEstimates forwards symbol, period and pagination", async () => {
    const { http, get } = stubHttp([]);
    await new AnalystResource(http).getEstimates("AAPL", { period: "annual", limit: 5 });
    expect(get).toHaveBeenCalledWith("analyst-estimates", {
      symbol: "AAPL",
      period: "annual",
      page: undefined,
      limit: 5,
    });
  });

  it("maps analyst methods to their endpoint paths", async () => {
    const { http, get } = stubHttp([]);
    const analyst = new AnalystResource(http);
    await analyst.getPriceTargetSummary("AAPL");
    await analyst.getPriceTargetConsensus("AAPL");
    await analyst.getRatingsSnapshot("AAPL");
    await analyst.getHistoricalRatings("AAPL", 10);
    await analyst.getGrades("AAPL");
    await analyst.getGradesConsensus("AAPL");

    const paths = get.mock.calls.map((call) => call[0]);
    expect(paths).toEqual([
      "price-target-summary",
      "price-target-consensus",
      "ratings-snapshot",
      "ratings-historical",
      "grades",
      "grades-consensus",
    ]);
    expect(get).toHaveBeenNthCalledWith(4, "ratings-historical", { symbol: "AAPL", limit: 10 });
  });
});

describe("DirectoryResource", () => {
  it("search methods forward query and limit", async () => {
    const { http, get } = stubHttp([]);
    const directory = new DirectoryResource(http);
    await directory.searchSymbol("AAP", 5);
    await directory.searchByName("Apple");

    expect(get).toHaveBeenNthCalledWith(1, "search-symbol", { query: "AAP", limit: 5 });
    expect(get).toHaveBeenNthCalledWith(2, "search-name", { query: "Apple", limit: undefined });
  });

  it("maps directory list methods to their endpoint paths", async () => {
    const { http, get } = stubHttp([]);
    const directory = new DirectoryResource(http);
    await directory.getStockList();
    await directory.getETFList();
    await directory.getAvailableExchanges();
    await directory.getAvailableSectors();
    await directory.getAvailableIndustries();

    const paths = get.mock.calls.map((call) => call[0]);
    expect(paths).toEqual([
      "stock-list",
      "etf-list",
      "available-exchanges",
      "available-sectors",
      "available-industries",
    ]);
  });
});
