import { describe, expect, it, vi } from "vitest";
import { TossApiError, TossError } from "./errors.js";
import { OAuthTokenProvider, type OAuthTokenProviderOptions } from "./oauth.js";

function tokenResponse(body: Partial<Record<string, unknown>>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function makeProvider(
  fetchImpl: typeof fetch,
  overrides: Partial<OAuthTokenProviderOptions> = {},
): OAuthTokenProvider {
  return new OAuthTokenProvider({
    clientId: "c_id",
    clientSecret: "s_secret",
    baseUrl: "https://api.test",
    fetch: fetchImpl,
    retryBaseDelayMs: 1,
    ...overrides,
  });
}

describe("OAuthTokenProvider issuance", () => {
  it("posts client_credentials as urlencoded form to /oauth2/token", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(tokenResponse({ access_token: "tok", token_type: "Bearer", expires_in: 3600 }));
    const provider = makeProvider(fetchImpl);
    const token = await provider.getAccessToken();

    expect(token).toBe("tok");
    const [url, init] = fetchImpl.mock.calls[0]! as [string, RequestInit];
    expect(url).toBe("https://api.test/oauth2/token");
    expect(init.method).toBe("POST");
    expect((init.headers as Record<string, string>)["Content-Type"]).toBe(
      "application/x-www-form-urlencoded",
    );
    const body = new URLSearchParams(init.body as string);
    expect(body.get("grant_type")).toBe("client_credentials");
    expect(body.get("client_id")).toBe("c_id");
    expect(body.get("client_secret")).toBe("s_secret");
  });

  it("reuses the cached token within its lifetime", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(tokenResponse({ access_token: "tok", token_type: "Bearer", expires_in: 3600 }));
    const provider = makeProvider(fetchImpl);
    await provider.getAccessToken();
    await provider.getAccessToken();
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("re-issues when the token is within the refresh margin", async () => {
    // 매 호출마다 새 Response 를 반환(body 는 한 번만 읽을 수 있으므로).
    const fetchImpl = vi
      .fn()
      .mockImplementation(async () =>
        tokenResponse({ access_token: "tok", token_type: "Bearer", expires_in: 3600 }),
      );
    // margin(4_000_000ms) > ttl(3_600_000ms) → 항상 만료 임박으로 간주되어 매번 재발급.
    const provider = makeProvider(fetchImpl, { refreshMarginMs: 4_000_000 });
    await provider.getAccessToken();
    await provider.getAccessToken();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("re-issues after invalidate()", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(tokenResponse({ access_token: "t1", token_type: "Bearer", expires_in: 3600 }))
      .mockResolvedValueOnce(tokenResponse({ access_token: "t2", token_type: "Bearer", expires_in: 3600 }));
    const provider = makeProvider(fetchImpl);
    expect(await provider.getAccessToken()).toBe("t1");
    provider.invalidate();
    expect(await provider.getAccessToken()).toBe("t2");
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("collapses concurrent issuance into a single request (single-flight)", async () => {
    const fetchImpl = vi.fn().mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      return tokenResponse({ access_token: "tok", token_type: "Bearer", expires_in: 3600 });
    });
    const provider = makeProvider(fetchImpl);
    const [a, b] = await Promise.all([provider.getAccessToken(), provider.getAccessToken()]);
    expect(a).toBe("tok");
    expect(b).toBe("tok");
    expect(fetchImpl).toHaveBeenCalledOnce();
  });
});

describe("OAuthTokenProvider errors", () => {
  it("throws TossApiError with the OAuth error code (no retry on 401)", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(
        tokenResponse({ error: "invalid_client", error_description: "bad secret" }, 401),
      );
    const provider = makeProvider(fetchImpl);
    await expect(provider.getAccessToken()).rejects.toMatchObject({
      name: "TossApiError",
      status: 401,
      code: "invalid_client",
      message: "bad secret",
    });
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("parses a BFF error envelope on the token endpoint", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValue(tokenResponse({ error: { code: "edge-blocked", message: "blocked" } }, 403));
    const provider = makeProvider(fetchImpl);
    await expect(provider.getAccessToken()).rejects.toMatchObject({
      name: "TossApiError",
      code: "edge-blocked",
      message: "blocked",
    });
  });

  it("retries on 429 then succeeds", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(tokenResponse({ error: "rate_limited" }, 429))
      .mockResolvedValueOnce(tokenResponse({ access_token: "tok", token_type: "Bearer", expires_in: 3600 }));
    const provider = makeProvider(fetchImpl);
    expect(await provider.getAccessToken()).toBe("tok");
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });

  it("retries on network errors and eventually fails", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new TypeError("network down"));
    const provider = makeProvider(fetchImpl, { maxRetries: 2 });
    await expect(provider.getAccessToken()).rejects.toBeInstanceOf(TossError);
    expect(fetchImpl).toHaveBeenCalledTimes(3); // initial + 2 retries
  });

  it("throws when the response has no access_token", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(tokenResponse({ token_type: "Bearer", expires_in: 3600 }));
    const provider = makeProvider(fetchImpl);
    await expect(provider.getAccessToken()).rejects.toBeInstanceOf(TossApiError);
  });

  it("does not cache a failed issuance (next call retries)", async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce(tokenResponse({ error: "temporarily_unavailable" }, 503))
      .mockResolvedValueOnce(tokenResponse({ access_token: "tok", token_type: "Bearer", expires_in: 3600 }));
    const provider = makeProvider(fetchImpl, { maxRetries: 0 });
    await expect(provider.getAccessToken()).rejects.toBeInstanceOf(TossApiError);
    expect(await provider.getAccessToken()).toBe("tok");
  });
});
