import { describe, expect, it } from "vitest";
import { FeedClient } from "./client.js";

const apiKey = process.env.FMP_API_KEY;

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

  // 참고: quotes.getBatchQuotes(`batch-quote`)는 상위 구독 플랜 전용으로,
  // 현재 CI에 설정된 API 키 플랜에서는 402(Restricted)를 반환한다.
  // 메서드/경로 검증은 resources.test.ts 단위 테스트로 커버한다.

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
});
