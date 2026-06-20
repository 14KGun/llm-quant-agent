import { describe, expect, it } from "vitest";
import { StaticTokenProvider } from "./token.js";

describe("StaticTokenProvider", () => {
  it("returns the configured token", async () => {
    const provider = new StaticTokenProvider("tok");
    await expect(provider.getAccessToken()).resolves.toBe("tok");
  });
});
