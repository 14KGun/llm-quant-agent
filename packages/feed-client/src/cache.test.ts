import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TtlCache } from "./cache.js";

describe("TtlCache", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("returns a stored value before expiry", () => {
    const cache = new TtlCache(1000);
    cache.set("k", 42);
    expect(cache.get("k")).toBe(42);
  });

  it("expires entries after the ttl", () => {
    const cache = new TtlCache(1000);
    cache.set("k", 42);
    vi.advanceTimersByTime(1001);
    expect(cache.get("k")).toBeUndefined();
    expect(cache.size).toBe(0); // lazy eviction on read
  });

  it("returns undefined for a missing key", () => {
    expect(new TtlCache(1000).get("nope")).toBeUndefined();
  });

  it("clear removes all entries", () => {
    const cache = new TtlCache(1000);
    cache.set("a", 1);
    cache.set("b", 2);
    cache.clear();
    expect(cache.get("a")).toBeUndefined();
    expect(cache.size).toBe(0);
  });
});
