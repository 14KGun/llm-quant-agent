import { describe, expect, it, vi } from "vitest";
import { resolveConfig } from "./config.js";
import { FmpApiError, FmpError } from "./errors.js";
import { HttpClient } from "./http.js";

function jsonResponse(body: unknown, status = 200, headers?: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

function makeClient(fetchImpl: typeof fetch, overrides = {}) {
  const config = resolveConfig({
    apiKey: "test-key",
    baseUrl: "https://api.test/stable",
    retryBaseDelayMs: 1,
    fetch: fetchImpl,
    ...overrides,
  });
  return new HttpClient(config);
}

describe("HttpClient.buildUrl", () => {
  it("injects the api key and serializes params", () => {
    const client = makeClient(vi.fn());
    const url = new URL(client.buildUrl("quote", { symbol: "AAPL", limit: 5 }));
    expect(url.origin + url.pathname).toBe("https://api.test/stable/quote");
    expect(url.searchParams.get("symbol")).toBe("AAPL");
    expect(url.searchParams.get("limit")).toBe("5");
    expect(url.searchParams.get("apikey")).toBe("test-key");
  });

  it("joins array params with commas and skips nullish values", () => {
    const client = makeClient(vi.fn());
    const url = new URL(
      client.buildUrl("/news/stock", { symbols: ["AAPL", "MSFT"], from: undefined }),
    );
    expect(url.searchParams.get("symbols")).toBe("AAPL,MSFT");
    expect(url.searchParams.has("from")).toBe(false);
  });
});

describe("HttpClient.get", () => {
  it("returns parsed JSON on success", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse([{ symbol: "AAPL" }]));
    const client = makeClient(fetchImpl);
    const data = await client.get<Array<{ symbol: string }>>("quote", { symbol: "AAPL" });
    expect(data).toEqual([{ symbol: "AAPL" }]);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("does not retry on a 4xx and throws FmpApiError", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ message: "bad" }, 401));
    const client = makeClient(fetchImpl);
    await expect(client.get("quote")).rejects.toBeInstanceOf(FmpApiError);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("retries on 429 then succeeds", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ msg: "rate limited" }, 429))
      .mockResolvedValueOnce(jsonResponse([{ ok: true }]));
    const client = makeClient(fetchImpl);
    const data = await client.get<Array<{ ok: boolean }>>("quote");
    expect(data).toEqual([{ ok: true }]);
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("retries on network errors and eventually fails", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new TypeError("network down"));
    const client = makeClient(fetchImpl, { maxRetries: 2 });
    await expect(client.get("quote")).rejects.toBeInstanceOf(FmpError);
    expect(fetchImpl).toHaveBeenCalledTimes(3); // initial + 2 retries
  });

  it("surfaces FMP 200 error payloads as FmpApiError", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(jsonResponse({ "Error Message": "Invalid API KEY" }));
    const client = makeClient(fetchImpl);
    await expect(client.get("quote")).rejects.toMatchObject({
      name: "FmpApiError",
      message: "Invalid API KEY",
    });
  });

  it("gives up retrying a 5xx after the retry budget", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ msg: "boom" }, 503));
    const client = makeClient(fetchImpl, { maxRetries: 1 });
    await expect(client.get("quote")).rejects.toBeInstanceOf(FmpApiError);
    expect(fetchImpl).toHaveBeenCalledTimes(2); // initial + 1 retry
  });
});

describe("HttpClient caching", () => {
  it("does not cache by default", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => jsonResponse([]));
    const client = makeClient(fetchImpl);
    await client.get("quote", { symbol: "AAPL" });
    await client.get("quote", { symbol: "AAPL" });
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("serves identical requests from cache when cacheTtlMs > 0", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse([{ ok: true }]));
    const client = makeClient(fetchImpl, { cacheTtlMs: 1000 });
    const a = await client.get("quote", { symbol: "AAPL" });
    const b = await client.get("quote", { symbol: "AAPL" });
    expect(a).toEqual(b);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("keys the cache by params (order-independent)", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => jsonResponse([]));
    const client = makeClient(fetchImpl, { cacheTtlMs: 1000 });
    await client.get("quote", { symbol: "AAPL", limit: 5 });
    await client.get("quote", { limit: 5, symbol: "AAPL" }); // same key
    await client.get("quote", { symbol: "MSFT" }); // different key
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("clearCache forces a refetch", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => jsonResponse([]));
    const client = makeClient(fetchImpl, { cacheTtlMs: 1000 });
    await client.get("quote");
    client.clearCache();
    await client.get("quote");
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
      return jsonResponse([]);
    });
    const client = makeClient(fetchImpl, { maxConcurrentRequests: 2 });

    await Promise.all(
      Array.from({ length: 6 }, (_, i) => client.get("quote", { i })),
    );
    expect(maxActive).toBe(2);
    expect(fetchImpl).toHaveBeenCalledTimes(6);
  });
});
