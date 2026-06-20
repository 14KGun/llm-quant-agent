import { describe, expect, it } from "vitest";
import { TossApiError, TossConfigError, TossError } from "./errors.js";

describe("TossError", () => {
  it("sets name and preserves cause", () => {
    const cause = new Error("root");
    const err = new TossError("boom", { cause });
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe("TossError");
    expect(err.message).toBe("boom");
    expect(err.cause).toBe(cause);
  });
});

describe("TossConfigError", () => {
  it("extends TossError with its own name", () => {
    const err = new TossConfigError("missing credentials");
    expect(err).toBeInstanceOf(TossError);
    expect(err.name).toBe("TossConfigError");
    expect(err.message).toBe("missing credentials");
  });
});

describe("TossApiError", () => {
  it("captures status, endpoint, code, requestId and data", () => {
    const err = new TossApiError("주문 방향이 올바르지 않습니다.", {
      status: 400,
      endpoint: "api/v1/orders",
      code: "invalid-request",
      requestId: "01HXYZ",
      data: { field: "side" },
      responseBody: "{...}",
    });
    expect(err).toBeInstanceOf(TossError);
    expect(err.name).toBe("TossApiError");
    expect(err.status).toBe(400);
    expect(err.endpoint).toBe("api/v1/orders");
    expect(err.code).toBe("invalid-request");
    expect(err.requestId).toBe("01HXYZ");
    expect(err.data).toEqual({ field: "side" });
    expect(err.responseBody).toBe("{...}");
  });

  it("works with no options and forwards cause", () => {
    const cause = new Error("parse");
    const err = new TossApiError("bad json", { cause });
    expect(err.status).toBeUndefined();
    expect(err.code).toBeUndefined();
    expect(err.cause).toBe(cause);
  });
});
