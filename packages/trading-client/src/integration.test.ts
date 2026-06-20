import { describe, expect, it } from "vitest";
import { TradingClient } from "./client.js";

const clientId = process.env.TOSSINVEST_API_KEY;
const clientSecret = process.env.TOSSINVEST_SECRET_KEY;
const hasCredentials = Boolean(clientId && clientSecret);

interface StockInfo {
  symbol: string;
  name?: string;
  market?: string;
  currency?: string;
}

/**
 * 실제 토스증권 Open API 를 호출하는 통합 테스트.
 * `TOSSINVEST_API_KEY` + `TOSSINVEST_SECRET_KEY` 가 설정된 환경(CI secret 등)에서만 실행되고,
 * 없으면 스킵된다. OAuth 토큰 발급·캐싱부터 BFF envelope 언래핑까지 end-to-end 로 검증한다.
 *
 * 부작용을 피하기 위해 토큰만 필요한 읽기 전용 엔드포인트(시세·종목·환율)만 호출한다.
 * (계좌·주문 등 X-Tossinvest-Account 가 필요한 엔드포인트는 다루지 않는다.)
 */
describe.skipIf(!hasCredentials)("토스증권 API integration", () => {
  // describe 본문은 스킵 시에도 수집되므로, 자격증명이 있을 때만 생성한다.
  const client = hasCredentials
    ? new TradingClient({ clientId, clientSecret })
    : (undefined as unknown as TradingClient);

  it("issues an OAuth token and fetches stock info (005930)", async () => {
    const stocks = await client.request<StockInfo[]>("api/v1/stocks", {
      query: { symbols: "005930" },
    });
    expect(Array.isArray(stocks)).toBe(true);
    expect(stocks.length).toBeGreaterThan(0);
    expect(stocks[0]!.symbol).toBe("005930");
    expect(stocks[0]!.name).toBeTruthy();
  }, 20_000);

  it("fetches multiple symbols at once (005930, AAPL)", async () => {
    const stocks = await client.request<StockInfo[]>("api/v1/stocks", {
      query: { symbols: "005930,AAPL" },
    });
    const symbols = stocks.map((s) => s.symbol);
    expect(symbols).toContain("005930");
    expect(symbols).toContain("AAPL");
  }, 20_000);

  it("fetches the KRW/USD exchange rate", async () => {
    const rate = await client.request<Record<string, unknown>>("api/v1/exchange-rate");
    expect(rate).toBeTruthy();
    expect(typeof rate).toBe("object");
  }, 20_000);

  it("caches the issued token (same token across calls)", async () => {
    const a = await client.tokenProvider.getAccessToken();
    const b = await client.tokenProvider.getAccessToken();
    expect(a).toBe(b);
    expect(a.length).toBeGreaterThan(0);
  }, 20_000);
});
