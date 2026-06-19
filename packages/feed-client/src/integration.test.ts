import { describe, expect, it } from "vitest";
import { FeedClient } from "./client.js";
import { FmpApiError } from "./errors.js";

const apiKey = process.env.FMP_API_KEY;

/**
 * 호출을 실행하되, 상위 플랜 전용 엔드포인트의 402(Restricted)는
 * 실패가 아니라 런타임 skip 으로 처리한다. 그 외 에러는 전파.
 */
async function callOrSkip402<T>(
  ctx: { skip: () => void },
  fn: () => Promise<T>,
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (err) {
    if (err instanceof FmpApiError && err.status === 402) {
      ctx.skip();
      return undefined;
    }
    throw err;
  }
}

/**
 * 실제 FMP API를 호출하는 통합 테스트.
 * FMP_API_KEY 가 설정된 환경(CI secret 등)에서만 실행되고, 없으면 스킵된다.
 * Phase 2 리소스 메서드의 실제 엔드포인트 경로를 검증한다.
 */
describe.skipIf(!apiKey)("FMP API integration", () => {
  // describe 본문은 스킵 시에도 수집되므로, 키가 있을 때만 생성한다.
  const client = apiKey ? new FeedClient({ apiKey }) : (undefined as unknown as FeedClient);

  it("quotes.getQuote returns a real AAPL quote", async () => {
    const quote = await client.quotes.getQuote("AAPL");
    expect(quote?.symbol).toBe("AAPL");
    expect(typeof quote?.price).toBe("number");
    expect(quote!.price).toBeGreaterThan(0);
  }, 20_000);

  it("quotes.getQuoteShort returns a real AAPL quote", async () => {
    const quote = await client.quotes.getQuoteShort("AAPL");
    expect(quote?.symbol).toBe("AAPL");
    expect(typeof quote?.price).toBe("number");
  }, 20_000);

  // batch-quote 는 상위 구독 플랜 전용. 하위 플랜 키에서는 402(Restricted)가
  // 반환되므로, 그 경우 실패 대신 런타임 skip 처리한다.
  it("quotes.getBatchQuotes returns multiple symbols", async (ctx) => {
    let quotes;
    try {
      quotes = await client.quotes.getBatchQuotes(["AAPL", "MSFT"]);
    } catch (err) {
      if (err instanceof FmpApiError && err.status === 402) {
        ctx.skip();
        return;
      }
      throw err;
    }
    expect(Array.isArray(quotes)).toBe(true);
    expect(quotes.length).toBeGreaterThan(0);
  }, 20_000);

  it("quotes.getHistoricalPrice returns EOD candles", async () => {
    const candles = await client.quotes.getHistoricalPrice("AAPL", {
      from: "2024-01-01",
      to: "2024-01-31",
    });
    expect(Array.isArray(candles)).toBe(true);
    expect(candles.length).toBeGreaterThan(0);
    expect(typeof candles[0]!.close).toBe("number");
  }, 20_000);

  it("company.getProfile returns the AAPL profile", async () => {
    const profile = await client.company.getProfile("AAPL");
    expect(profile?.symbol).toBe("AAPL");
    expect(profile?.companyName).toBeTruthy();
  }, 20_000);

  it("financials.getIncomeStatement returns annual statements", async () => {
    const statements = await client.financials.getIncomeStatement("AAPL", { limit: 2 });
    expect(Array.isArray(statements)).toBe(true);
    expect(statements.length).toBeGreaterThan(0);
    expect(statements[0]!.symbol).toBe("AAPL");
    expect(typeof statements[0]!.revenue).toBe("number");
  }, 20_000);

  it("financials.getKeyMetrics returns metrics", async () => {
    const metrics = await client.financials.getKeyMetrics("AAPL", { limit: 1 });
    expect(Array.isArray(metrics)).toBe(true);
    expect(metrics.length).toBeGreaterThan(0);
    expect(metrics[0]!.symbol).toBe("AAPL");
  }, 20_000);

  // --- Phase 3: News / Market / Economic (402는 skip) ---

  it("news.getGeneralNews returns articles", async (ctx) => {
    const news = await callOrSkip402(ctx, () => client.news.getGeneralNews({ limit: 5 }));
    if (!news) return;
    expect(Array.isArray(news)).toBe(true);
  }, 20_000);

  it("news.getStockNews returns AAPL articles", async (ctx) => {
    const news = await callOrSkip402(ctx, () =>
      client.news.getStockNews({ symbols: ["AAPL"], limit: 5 }),
    );
    if (!news) return;
    expect(Array.isArray(news)).toBe(true);
  }, 20_000);

  it("market.getGainers returns movers", async (ctx) => {
    const movers = await callOrSkip402(ctx, () => client.market.getGainers());
    if (!movers) return;
    expect(Array.isArray(movers)).toBe(true);
    expect(movers.length).toBeGreaterThan(0);
  }, 20_000);

  it("economic.getTreasuryRates returns rates", async (ctx) => {
    const rates = await callOrSkip402(ctx, () =>
      client.economic.getTreasuryRates({ from: "2024-01-01", to: "2024-01-31" }),
    );
    if (!rates) return;
    expect(Array.isArray(rates)).toBe(true);
    expect(rates.length).toBeGreaterThan(0);
  }, 20_000);

  it("economic.getEconomicIndicator(GDP) returns a series", async (ctx) => {
    const series = await callOrSkip402(ctx, () =>
      client.economic.getEconomicIndicator("GDP", { from: "2022-01-01", to: "2024-01-01" }),
    );
    if (!series) return;
    expect(Array.isArray(series)).toBe(true);
    expect(series.length).toBeGreaterThan(0);
  }, 20_000);
});
