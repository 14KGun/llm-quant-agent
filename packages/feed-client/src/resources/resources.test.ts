import { describe, expect, it, vi } from "vitest";
import type { HttpClient } from "../http.js";
import { CompanyResource } from "./company.js";
import { FinancialsResource } from "./financials.js";
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
