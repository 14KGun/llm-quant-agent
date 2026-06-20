import { describe, expect, it, vi } from "vitest";
import { TradingClient, createTradingClient } from "./client.js";
import { StaticTokenProvider } from "./token.js";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

describe("TradingClient", () => {
  it("exposes the resolved base url", () => {
    const client = new TradingClient({ accessToken: "tok", baseUrl: "https://api.test/" });
    expect(client.baseUrl).toBe("https://api.test");
  });

  it("uses a static token provider when an access token is given", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: [{ symbol: "005930" }] }));
    const client = new TradingClient({ accessToken: "tok", fetch: fetchImpl });
    const data = await client.request("api/v1/stocks", { query: { symbols: "005930" } });
    expect(data).toEqual([{ symbol: "005930" }]);
    const init = fetchImpl.mock.calls[0]![1] as RequestInit;
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer tok");
  });

  it("issues a token from credentials via OAuth, then injects it as Bearer", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(
        jsonResponse({ access_token: "issued", token_type: "Bearer", expires_in: 3600 }),
      )
      .mockResolvedValueOnce(jsonResponse({ result: [{ symbol: "005930" }] }));
    const client = new TradingClient({ clientId: "c", clientSecret: "s", fetch: fetchImpl });
    const data = await client.request("api/v1/stocks");
    expect(data).toEqual([{ symbol: "005930" }]);
    // 1) 토큰 발급 호출 → 2) 발급된 토큰으로 데이터 호출
    const tokenUrl = fetchImpl.mock.calls[0]![0] as string;
    expect(tokenUrl).toContain("/oauth2/token");
    const dataInit = fetchImpl.mock.calls[1]![1] as RequestInit;
    expect((dataInit.headers as Record<string, string>).Authorization).toBe("Bearer issued");
  });

  it("accepts an injected token provider", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: true }));
    const client = new TradingClient({
      tokenProvider: new StaticTokenProvider("injected"),
      fetch: fetchImpl,
    });
    await client.request("api/v1/stocks");
    const init = fetchImpl.mock.calls[0]![1] as RequestInit;
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer injected");
  });

  it("createTradingClient mirrors the constructor", () => {
    const client = createTradingClient({ accessToken: "tok" });
    expect(client).toBeInstanceOf(TradingClient);
  });
});
