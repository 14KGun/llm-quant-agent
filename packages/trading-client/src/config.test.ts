import { afterEach, describe, expect, it } from "vitest";
import { DEFAULT_BASE_URL, resolveConfig } from "./config.js";
import { TossConfigError } from "./errors.js";

describe("resolveConfig", () => {
  const original = {
    id: process.env.TOSS_CLIENT_ID,
    secret: process.env.TOSS_CLIENT_SECRET,
    token: process.env.TOSS_ACCESS_TOKEN,
  };

  afterEach(() => {
    restore("TOSS_CLIENT_ID", original.id);
    restore("TOSS_CLIENT_SECRET", original.secret);
    restore("TOSS_ACCESS_TOKEN", original.token);
  });

  it("applies defaults when an access token is given", () => {
    const config = resolveConfig({ accessToken: "tok" });
    expect(config.accessToken).toBe("tok");
    expect(config.baseUrl).toBe(DEFAULT_BASE_URL);
    expect(config.maxRetries).toBe(3);
    expect(typeof config.fetch).toBe("function");
  });

  it("accepts client id + secret as credentials", () => {
    clearAuthEnv();
    const config = resolveConfig({ clientId: "c", clientSecret: "s" });
    expect(config.clientId).toBe("c");
    expect(config.clientSecret).toBe("s");
  });

  it("reads credentials from the environment", () => {
    clearAuthEnv();
    process.env.TOSS_CLIENT_ID = "env-id";
    process.env.TOSS_CLIENT_SECRET = "env-secret";
    const config = resolveConfig();
    expect(config.clientId).toBe("env-id");
    expect(config.clientSecret).toBe("env-secret");
  });

  it("reads the access token from TOSS_ACCESS_TOKEN", () => {
    clearAuthEnv();
    process.env.TOSS_ACCESS_TOKEN = "env-tok";
    expect(resolveConfig().accessToken).toBe("env-tok");
  });

  it("throws when no credentials are available", () => {
    clearAuthEnv();
    expect(() => resolveConfig({ fetch: globalThis.fetch })).toThrow(TossConfigError);
  });

  it("does not throw when only a tokenProvider is supplied", () => {
    clearAuthEnv();
    const tokenProvider = { getAccessToken: () => Promise.resolve("x") };
    expect(() => resolveConfig({ tokenProvider, fetch: globalThis.fetch })).not.toThrow();
  });

  it("strips trailing slashes from the base url and stringifies accountSeq", () => {
    const config = resolveConfig({
      accessToken: "tok",
      baseUrl: "https://example.com/api///",
      accountSeq: 1,
    });
    expect(config.baseUrl).toBe("https://example.com/api");
    expect(config.accountSeq).toBe("1");
  });
});

function clearAuthEnv(): void {
  delete process.env.TOSS_CLIENT_ID;
  delete process.env.TOSS_CLIENT_SECRET;
  delete process.env.TOSS_ACCESS_TOKEN;
}

function restore(key: string, value: string | undefined): void {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}
