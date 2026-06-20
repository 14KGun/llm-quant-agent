/** Base class for every error thrown by the trading-client SDK. */
export class TossError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "TossError";
  }
}

/** Thrown when the client is misconfigured (e.g. missing credentials). */
export class TossConfigError extends TossError {
  constructor(message: string) {
    super(message);
    this.name = "TossConfigError";
  }
}

export interface TossApiErrorOptions {
  /** HTTP status code, when the failure originated from a response. */
  status?: number;
  /** Endpoint path that was requested (without the base URL). */
  endpoint?: string;
  /** Toss error code parsed from the envelope (e.g. `invalid-token`, `order-not-found`). */
  code?: string;
  /** `error.requestId` (same as the `X-Request-Id` response header). Useful for CS 문의. */
  requestId?: string;
  /** `error.data` — code-specific resolution hint, shape varies per code. */
  data?: unknown;
  /** Raw response body, truncated for diagnostics. */
  responseBody?: string;
  cause?: unknown;
}

/**
 * Thrown when the 토스증권 API returns an error envelope
 * (`{ "error": { code, message, data } }`) or an unparseable body.
 */
export class TossApiError extends TossError {
  readonly status?: number;
  readonly endpoint?: string;
  readonly code?: string;
  readonly requestId?: string;
  readonly data?: unknown;
  readonly responseBody?: string;

  constructor(message: string, options: TossApiErrorOptions = {}) {
    super(message, { cause: options.cause });
    this.name = "TossApiError";
    this.status = options.status;
    this.endpoint = options.endpoint;
    this.code = options.code;
    this.requestId = options.requestId;
    this.data = options.data;
    this.responseBody = options.responseBody;
  }
}
