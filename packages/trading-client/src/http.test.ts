import { describe, expect, it, vi } from "vitest";
import { resolveConfig, type TradingClientConfig } from "./config.js";
import { TossApiError, TossError } from "./errors.js";
import { HttpClient } from "./http.js";
import { StaticTokenProvider } from "./token.js";

function jsonResponse(body: unknown, status = 200, headers?: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

function makeClient(fetchImpl: typeof fetch, overrides: Partial<TradingClientConfig> = {}) {
  const config = resolveConfig({
    accessToken: "test-token",
    baseUrl: "https://api.test",
    retryBaseDelayMs: 1,
    fetch: fetchImpl,
    ...overrides,
  });
  return new HttpClient(config, new StaticTokenProvider("test-token"));
}

describe("HttpClient.buildUrl", () => {
  it("builds a path and serializes params (no api key)", () => {
    const client = makeClient(vi.fn());
    const url = new URL(client.buildUrl("api/v1/stocks", { symbols: "005930", limit: 5 }));
    expect(url.origin + url.pathname).toBe("https://api.test/api/v1/stocks");
    expect(url.searchParams.get("symbols")).toBe("005930");
    expect(url.searchParams.get("limit")).toBe("5");
    expect(url.searchParams.has("apikey")).toBe(false);
  });

  it("joins array params with commas and skips nullish values", () => {
    const client = makeClient(vi.fn());
    const url = new URL(
      client.buildUrl("/api/v1/prices", { symbols: ["005930", "AAPL"], from: undefined }),
    );
    expect(url.searchParams.get("symbols")).toBe("005930,AAPL");
    expect(url.searchParams.has("from")).toBe(false);
  });
});

describe("HttpClient auth & headers", () => {
  it("injects the bearer token", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: [] }));
    const client = makeClient(fetchImpl);
    await client.get("api/v1/stocks");
    const init = fetchImpl.mock.calls[0]![1] as RequestInit;
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer test-token");
  });

  it("attaches the default account header from config", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: [] }));
    const client = makeClient(fetchImpl, { accountSeq: 7 });
    await client.get("api/v1/holdings");
    const init = fetchImpl.mock.calls[0]![1] as RequestInit;
    expect((init.headers as Record<string, string>)["X-Tossinvest-Account"]).toBe("7");
  });

  it("per-request accountSeq overrides the default", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: [] }));
    const client = makeClient(fetchImpl, { accountSeq: 7 });
    await client.request("api/v1/holdings", { accountSeq: 9 });
    const init = fetchImpl.mock.calls[0]![1] as RequestInit;
    expect((init.headers as Record<string, string>)["X-Tossinvest-Account"]).toBe("9");
  });

  it("omits the account header when none is configured", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: [] }));
    const client = makeClient(fetchImpl);
    await client.get("api/v1/stocks");
    const init = fetchImpl.mock.calls[0]![1] as RequestInit;
    expect((init.headers as Record<string, string>)["X-Tossinvest-Account"]).toBeUndefined();
  });

  it("serializes a JSON body for POST", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: { orderId: "1" } }));
    const client = makeClient(fetchImpl);
    await client.post("api/v1/orders", { symbol: "005930", side: "BUY" });
    const init = fetchImpl.mock.calls[0]![1] as RequestInit;
    expect(init.method).toBe("POST");
    expect((init.headers as Record<string, string>)["Content-Type"]).toBe("application/json");
    expect(init.body).toBe(JSON.stringify({ symbol: "005930", side: "BUY" }));
  });
});

describe("HttpClient envelope handling", () => {
  it("unwraps the BFF result envelope", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: [{ symbol: "005930" }] }));
    const client = makeClient(fetchImpl);
    const data = await client.get<Array<{ symbol: string }>>("api/v1/stocks");
    expect(data).toEqual([{ symbol: "005930" }]);
  });

  it("returns the body as-is when there is no result wrapper", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ access_token: "x" }));
    const client = makeClient(fetchImpl);
    const data = await client.get<{ access_token: string }>("oauth2/token");
    expect(data).toEqual({ access_token: "x" });
  });

  it("returns undefined for an empty body", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    const client = makeClient(fetchImpl);
    await expect(client.post("api/v1/orders/1/cancel")).resolves.toBeUndefined();
  });
});

describe("HttpClient error handling", () => {
  it("parses the error envelope into a TossApiError", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(
      jsonResponse(
        {
          error: {
            requestId: "01HXYZ",
            code: "invalid-request",
            message: "주문 방향이 올바르지 않습니다.",
            data: { field: "side" },
          },
        },
        400,
      ),
    );
    const client = makeClient(fetchImpl);
    await expect(client.post("api/v1/orders")).rejects.toMatchObject({
      name: "TossApiError",
      status: 400,
      code: "invalid-request",
      requestId: "01HXYZ",
      message: "주문 방향이 올바르지 않습니다.",
      data: { field: "side" },
    });
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("does not retry on a 4xx", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(jsonResponse({ error: { code: "invalid-token" } }, 401));
    const client = makeClient(fetchImpl);
    await expect(client.get("api/v1/stocks")).rejects.toBeInstanceOf(TossApiError);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("falls back to a status message for a non-envelope body", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(new Response("gateway error", { status: 502 }));
    const client = makeClient(fetchImpl, { maxRetries: 0 });
    await expect(client.get("api/v1/stocks")).rejects.toMatchObject({
      name: "TossApiError",
      status: 502,
    });
  });
});

describe("HttpClient 401 re-auth", () => {
  it("invalidates the token and retries once on 401 when supported", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ error: { code: "expired-token" } }, 401))
      .mockResolvedValueOnce(jsonResponse({ result: true }));
    const invalidate = vi.fn();
    let n = 0;
    const tokenProvider = {
      getAccessToken: () => Promise.resolve(`t${n++}`),
      invalidate,
    };
    const config = resolveConfig({
      accessToken: "seed",
      baseUrl: "https://api.test",
      retryBaseDelayMs: 1,
      fetch: fetchImpl,
    });
    const client = new HttpClient(config, tokenProvider);

    await expect(client.get("api/v1/stocks")).resolves.toBe(true);
    expect(invalidate).toHaveBeenCalledOnce();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    // 재발급된 토큰이 두 번째 요청에 실렸는지 확인.
    const secondInit = fetchImpl.mock.calls[1]![1] as RequestInit;
    expect((secondInit.headers as Record<string, string>).Authorization).toBe("Bearer t1");
  });

  it("re-auths at most once, then surfaces a persistent 401", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ error: { code: "invalid-token" } }, 401));
    const tokenProvider = { getAccessToken: () => Promise.resolve("t"), invalidate: vi.fn() };
    const config = resolveConfig({
      accessToken: "seed",
      baseUrl: "https://api.test",
      retryBaseDelayMs: 1,
      fetch: fetchImpl,
    });
    const client = new HttpClient(config, tokenProvider);

    await expect(client.get("api/v1/stocks")).rejects.toBeInstanceOf(TossApiError);
    expect(tokenProvider.invalidate).toHaveBeenCalledOnce();
    expect(fetchImpl).toHaveBeenCalledTimes(2); // 최초 + 재인증 1회
  });

  it("does not retry a 401 when the provider has no invalidate", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(jsonResponse({ error: { code: "invalid-token" } }, 401));
    const client = makeClient(fetchImpl); // StaticTokenProvider — invalidate 없음
    await expect(client.get("api/v1/stocks")).rejects.toBeInstanceOf(TossApiError);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });
});

describe("HttpClient retries", () => {
  it("retries on 429 then succeeds", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ error: { code: "rate-limit-exceeded" } }, 429))
      .mockResolvedValueOnce(jsonResponse({ result: [{ ok: true }] }));
    const client = makeClient(fetchImpl);
    const data = await client.get<Array<{ ok: boolean }>>("api/v1/stocks");
    expect(data).toEqual([{ ok: true }]);
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("honors the Retry-After header", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ error: {} }, 429, { "retry-after": "0" }))
      .mockResolvedValueOnce(jsonResponse({ result: true }));
    const client = makeClient(fetchImpl);
    await expect(client.get("api/v1/stocks")).resolves.toBe(true);
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("retries on network errors and eventually fails", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new TypeError("network down"));
    const client = makeClient(fetchImpl, { maxRetries: 2 });
    await expect(client.get("api/v1/stocks")).rejects.toBeInstanceOf(TossError);
    expect(fetchImpl).toHaveBeenCalledTimes(3); // initial + 2 retries
  });

  it("gives up retrying a 5xx after the retry budget", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ error: {} }, 503));
    const client = makeClient(fetchImpl, { maxRetries: 1 });
    await expect(client.get("api/v1/stocks")).rejects.toBeInstanceOf(TossApiError);
    expect(fetchImpl).toHaveBeenCalledTimes(2); // initial + 1 retry
  });
});

describe("HttpClient caching", () => {
  it("does not cache by default", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => jsonResponse({ result: [] }));
    const client = makeClient(fetchImpl);
    await client.get("api/v1/stocks", { symbols: "005930" });
    await client.get("api/v1/stocks", { symbols: "005930" });
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("serves identical GETs from cache when cacheTtlMs > 0", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ result: [{ ok: true }] }));
    const client = makeClient(fetchImpl, { cacheTtlMs: 1000 });
    const a = await client.get("api/v1/stocks", { symbols: "005930" });
    const b = await client.get("api/v1/stocks", { symbols: "005930" });
    expect(a).toEqual(b);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("does not cache POST requests", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => jsonResponse({ result: { id: "1" } }));
    const client = makeClient(fetchImpl, { cacheTtlMs: 1000 });
    await client.post("api/v1/orders", { symbol: "005930" });
    await client.post("api/v1/orders", { symbol: "005930" });
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("keys the cache by account", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => jsonResponse({ result: [] }));
    const client = makeClient(fetchImpl, { cacheTtlMs: 1000 });
    await client.request("api/v1/holdings", { accountSeq: 1 });
    await client.request("api/v1/holdings", { accountSeq: 1 }); // same key
    await client.request("api/v1/holdings", { accountSeq: 2 }); // different key
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("clearCache forces a refetch", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => jsonResponse({ result: [] }));
    const client = makeClient(fetchImpl, { cacheTtlMs: 1000 });
    await client.get("api/v1/stocks");
    client.clearCache();
    await client.get("api/v1/stocks");
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });
});

describe("HttpClient concurrency", () => {
  it("never exceeds maxConcurrentRequests in-flight", async () => {
    let active = 0;
    let maxActive = 0;
    const fetchImpl = vi.fn().mockImplementation(async () => {
      active++;
      maxActive = Math.max(maxActive, active);
      await new Promise((resolve) => setTimeout(resolve, 5));
      active--;
      return jsonResponse({ result: [] });
    });
    const client = makeClient(fetchImpl, { maxConcurrentRequests: 2 });

    await Promise.all(
      Array.from({ length: 6 }, (_, i) => client.get("api/v1/stocks", { i })),
    );
    expect(maxActive).toBe(2);
    expect(fetchImpl).toHaveBeenCalledTimes(6);
  });
});
