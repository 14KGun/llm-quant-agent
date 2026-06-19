import { afterEach, describe, expect, it, vi } from "vitest";
import { FeedClient, createFeedClient } from "./client.js";
import { FmpConfigError } from "./errors.js";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

describe("FeedClient", () => {
  const originalKey = process.env.FMP_API_KEY;

  afterEach(() => {
    if (originalKey === undefined) delete process.env.FMP_API_KEY;
    else process.env.FMP_API_KEY = originalKey;
  });

  it("throws FmpConfigError when no api key is available", () => {
    delete process.env.FMP_API_KEY;
    expect(() => new FeedClient({ fetch: globalThis.fetch })).toThrow(FmpConfigError);
  });

  it("exposes the normalized base url without the api key", () => {
    const client = new FeedClient({
      apiKey: "k",
      baseUrl: "https://api.test/stable/",
      fetch: vi.fn(),
    });
    expect(client.baseUrl).toBe("https://api.test/stable");
  });

  it("request() delegates to the http layer and returns typed data", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse([{ symbol: "AAPL" }]));
    const client = new FeedClient({ apiKey: "k", baseUrl: "https://api.test", fetch: fetchImpl });

    const data = await client.request<Array<{ symbol: string }>>("quote", { symbol: "AAPL" });

    expect(data).toEqual([{ symbol: "AAPL" }]);
    expect(fetchImpl).toHaveBeenCalledOnce();
    const calledUrl = new URL(fetchImpl.mock.calls[0]![0] as string);
    expect(calledUrl.searchParams.get("symbol")).toBe("AAPL");
    expect(calledUrl.searchParams.get("apikey")).toBe("k");
  });

  it("reads the api key from FMP_API_KEY when not passed", async () => {
    process.env.FMP_API_KEY = "env-key";
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse([]));
    const client = new FeedClient({ baseUrl: "https://api.test", fetch: fetchImpl });

    await client.request("quote");

    const calledUrl = new URL(fetchImpl.mock.calls[0]![0] as string);
    expect(calledUrl.searchParams.get("apikey")).toBe("env-key");
  });
});

describe("createFeedClient", () => {
  it("returns a working FeedClient instance", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(jsonResponse({ ok: true }));
    const client = createFeedClient({ apiKey: "k", baseUrl: "https://api.test", fetch: fetchImpl });

    expect(client).toBeInstanceOf(FeedClient);
    await expect(client.request<{ ok: boolean }>("profile")).resolves.toEqual({ ok: true });
  });
});
