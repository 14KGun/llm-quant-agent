import { describe, expect, it, vi } from "vitest";
import { TradingClient, createTradingClient } from "./client.js";
import { TossConfigError } from "./errors.js";
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

  it("defers token issuance to Phase 2 when only credentials are given", async () => {
    const fetchImpl = vi.fn();
    const client = new TradingClient({ clientId: "c", clientSecret: "s", fetch: fetchImpl });
    await expect(client.request("api/v1/stocks")).rejects.toBeInstanceOf(TossConfigError);
    expect(fetchImpl).not.toHaveBeenCalled();
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
