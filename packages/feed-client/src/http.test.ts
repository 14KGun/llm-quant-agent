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
