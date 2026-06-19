import { describe, expect, it } from "vitest";
import { FeedClient } from "./client.js";

const apiKey = process.env.FMP_API_KEY;

/**
 * 실제 FMP API를 호출하는 통합 테스트.
 * FMP_API_KEY 가 설정된 환경(CI secret 등)에서만 실행되고, 없으면 스킵된다.
 */
describe.skipIf(!apiKey)("FMP API integration", () => {
  // describe 본문은 스킵 시에도 수집되므로, 키가 있을 때만 생성한다.
  const client = apiKey ? new FeedClient({ apiKey }) : (undefined as unknown as FeedClient);

  it("fetches a real quote for AAPL", async () => {
    const quotes = await client.request<Array<Record<string, unknown>>>("quote", {
      symbol: "AAPL",
    });
    expect(Array.isArray(quotes)).toBe(true);
    expect(quotes.length).toBeGreaterThan(0);

    const quote = quotes[0]!;
    expect(quote.symbol).toBe("AAPL");
    expect(typeof quote.price).toBe("number");
    expect((quote.price as number)).toBeGreaterThan(0);
  }, 20_000);

  it("fetches a company profile for AAPL", async () => {
    const profiles = await client.request<Array<Record<string, unknown>>>("profile", {
      symbol: "AAPL",
    });
    expect(Array.isArray(profiles)).toBe(true);
    expect(profiles.length).toBeGreaterThan(0);
    expect(profiles[0]!.symbol).toBe("AAPL");
  }, 20_000);
});
