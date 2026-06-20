import { describe, expect, it } from "vitest";
import { TradingClient } from "./client.js";
import { TossApiError } from "./errors.js";

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
 * 호출을 실행하되, 토스 Open API 의 IP allowlist 차단(403 `access_denied`,
 * "IP address not allowed")은 실패가 아니라 런타임 skip 으로 처리한다.
 *
 * 토스는 클라이언트 등록 시 허용 IP 만 토큰을 발급하는데, GitHub-hosted 러너는 IP 가
 * 고정되지 않아 allowlist 에 넣을 수 없다. 따라서 IP 가 허용된 환경(자체 호스트 러너 등)에서만
 * 실제 호출이 수행되고, 그 외에는 skip 된다. 그 밖의 에러는 그대로 전파한다.
 */
async function runOrSkipBlockedIp<T>(
  ctx: { skip: () => void },
  fn: () => Promise<T>,
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (err) {
    if (err instanceof TossApiError && err.status === 403 && err.code === "access_denied") {
      ctx.skip();
      return undefined;
    }
    throw err;
  }
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

  it("issues an OAuth token and fetches stock info (005930)", async (ctx) => {
    const stocks = await runOrSkipBlockedIp(ctx, () =>
      client.request<StockInfo[]>("api/v1/stocks", { query: { symbols: "005930" } }),
    );
    if (!stocks) return;
    expect(Array.isArray(stocks)).toBe(true);
    expect(stocks.length).toBeGreaterThan(0);
    expect(stocks[0]!.symbol).toBe("005930");
    expect(stocks[0]!.name).toBeTruthy();
  }, 20_000);

  it("fetches multiple symbols at once (005930, AAPL)", async (ctx) => {
    const stocks = await runOrSkipBlockedIp(ctx, () =>
      client.request<StockInfo[]>("api/v1/stocks", { query: { symbols: "005930,AAPL" } }),
    );
    if (!stocks) return;
    const symbols = stocks.map((s) => s.symbol);
    expect(symbols).toContain("005930");
    expect(symbols).toContain("AAPL");
  }, 20_000);

  it("fetches the KRW/USD exchange rate", async (ctx) => {
    const rate = await runOrSkipBlockedIp(ctx, () =>
      client.request<Record<string, unknown>>("api/v1/exchange-rate"),
    );
    if (!rate) return;
    expect(typeof rate).toBe("object");
  }, 20_000);

  it("caches the issued token (same token across calls)", async (ctx) => {
    const a = await runOrSkipBlockedIp(ctx, () => client.tokenProvider.getAccessToken());
    if (!a) return;
    const b = await client.tokenProvider.getAccessToken();
    expect(a).toBe(b);
    expect(a.length).toBeGreaterThan(0);
  }, 20_000);
});
