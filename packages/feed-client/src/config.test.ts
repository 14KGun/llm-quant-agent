import { afterEach, describe, expect, it } from "vitest";
import { DEFAULT_BASE_URL, resolveConfig } from "./config.js";
import { FmpConfigError } from "./errors.js";

describe("resolveConfig", () => {
  const originalKey = process.env.FMP_API_KEY;

  afterEach(() => {
    if (originalKey === undefined) delete process.env.FMP_API_KEY;
    else process.env.FMP_API_KEY = originalKey;
  });

  it("applies defaults when only an api key is given", () => {
    const config = resolveConfig({ apiKey: "test-key" });
    expect(config.apiKey).toBe("test-key");
    expect(config.baseUrl).toBe(DEFAULT_BASE_URL);
    expect(config.maxRetries).toBe(3);
    expect(typeof config.fetch).toBe("function");
  });

  it("reads the api key from FMP_API_KEY", () => {
    delete process.env.FMP_API_KEY;
    process.env.FMP_API_KEY = "env-key";
    expect(resolveConfig().apiKey).toBe("env-key");
  });

  it("throws when no api key is available", () => {
    delete process.env.FMP_API_KEY;
    expect(() => resolveConfig({ fetch: globalThis.fetch })).toThrow(FmpConfigError);
  });

  it("strips trailing slashes from the base url", () => {
    const config = resolveConfig({ apiKey: "k", baseUrl: "https://example.com/api///" });
    expect(config.baseUrl).toBe("https://example.com/api");
  });
});
