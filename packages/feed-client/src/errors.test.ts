import { describe, expect, it } from "vitest";
import { FmpApiError, FmpConfigError, FmpError } from "./errors.js";

describe("FmpError", () => {
  it("sets name and preserves cause", () => {
    const cause = new Error("root");
    const err = new FmpError("boom", { cause });
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe("FmpError");
    expect(err.message).toBe("boom");
    expect(err.cause).toBe(cause);
  });
});

describe("FmpConfigError", () => {
  it("extends FmpError with its own name", () => {
    const err = new FmpConfigError("missing key");
    expect(err).toBeInstanceOf(FmpError);
    expect(err.name).toBe("FmpConfigError");
    expect(err.message).toBe("missing key");
  });
});

describe("FmpApiError", () => {
  it("captures status, endpoint and response body", () => {
    const err = new FmpApiError("failed", {
      status: 429,
      endpoint: "quote",
      responseBody: "rate limited",
    });
    expect(err).toBeInstanceOf(FmpError);
    expect(err.name).toBe("FmpApiError");
    expect(err.status).toBe(429);
    expect(err.endpoint).toBe("quote");
    expect(err.responseBody).toBe("rate limited");
  });

  it("works with no options and forwards cause", () => {
    const cause = new Error("parse");
    const err = new FmpApiError("bad json", { cause });
    expect(err.status).toBeUndefined();
    expect(err.endpoint).toBeUndefined();
    expect(err.responseBody).toBeUndefined();
    expect(err.cause).toBe(cause);
  });
});
