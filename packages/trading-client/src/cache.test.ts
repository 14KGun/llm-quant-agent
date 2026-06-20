import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TtlCache } from "./cache.js";

describe("TtlCache", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("returns a stored value before it expires", () => {
    const cache = new TtlCache(1000);
    cache.set("k", { a: 1 });
    expect(cache.get("k")).toEqual({ a: 1 });
  });

  it("evicts an expired value lazily on get", () => {
    const cache = new TtlCache(1000);
    cache.set("k", 1);
    vi.advanceTimersByTime(1001);
    expect(cache.get("k")).toBeUndefined();
    expect(cache.size).toBe(0);
  });

  it("returns undefined for a missing key", () => {
    expect(new TtlCache(1000).get("nope")).toBeUndefined();
  });

  it("clear removes all entries", () => {
    const cache = new TtlCache(1000);
    cache.set("a", 1);
    cache.set("b", 2);
    cache.clear();
    expect(cache.size).toBe(0);
  });
});
