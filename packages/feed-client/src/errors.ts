/** Base class for every error thrown by the feed-client SDK. */
export class FmpError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "FmpError";
  }
}

/** Thrown when the client is misconfigured (e.g. missing API key). */
export class FmpConfigError extends FmpError {
  constructor(message: string) {
    super(message);
    this.name = "FmpConfigError";
  }
}

export interface FmpApiErrorOptions {
  /** HTTP status code, when the failure originated from a response. */
  status?: number;
  /** Endpoint path that was requested (without the base URL / api key). */
  endpoint?: string;
  /** Raw response body, truncated for diagnostics. */
  responseBody?: string;
  cause?: unknown;
}

/** Thrown when the FMP API returns an error response or an unparseable body. */
export class FmpApiError extends FmpError {
  readonly status?: number;
  readonly endpoint?: string;
  readonly responseBody?: string;

  constructor(message: string, options: FmpApiErrorOptions = {}) {
    super(message, { cause: options.cause });
    this.name = "FmpApiError";
    this.status = options.status;
    this.endpoint = options.endpoint;
    this.responseBody = options.responseBody;
  }
}
