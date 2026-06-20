import { TossApiError, TossError } from "./errors.js";
import type { TokenProvider } from "./token.js";

/** 토스증권 OAuth 2.0 토큰 발급 경로. */
export const DEFAULT_TOKEN_PATH = "/oauth2/token";
/** 만료 며 ms 전에 선제적으로 재발급할지의 기본값. */
export const DEFAULT_REFRESH_MARGIN_MS = 60_000;

/** HTTP statuses that are safe to retry for token issuance. */
const RETRYABLE_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);
const MAX_BODY_SNIPPET = 500;

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export interface OAuthTokenProviderOptions {
  /** OAuth 2.0 client id (`TOSSINVEST_API_KEY`). */
  clientId: string;
  /** OAuth 2.0 client secret (`TOSSINVEST_SECRET_KEY`). */
  clientSecret: string;
  /** API base URL (예: `https://openapi.tossinvest.com`). */
  baseUrl: string;
  /** fetch 구현체. */
  fetch: typeof fetch;
  /** 발급 요청 타임아웃(ms). 기본 10_000. */
  timeoutMs?: number;
  /** 일시 실패(429/5xx/네트워크) 재시도 횟수. 기본 3. */
  maxRetries?: number;
  /** 재시도 지수 백오프 기준 지연(ms). 기본 500. */
  retryBaseDelayMs?: number;
  /** 만료 며 ms 전에 선제 재발급할지. 기본 60_000. */
  refreshMarginMs?: number;
  /** 토큰 발급 경로 override. 기본 `/oauth2/token`. */
  tokenPath?: string;
}

interface OAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface CachedToken {
  accessToken: string;
  /** epoch ms. 이 시점(또는 refresh margin 이내)이면 재발급한다. */
  expiresAt: number;
}

/**
 * OAuth 2.0 `client_credentials` Grant 로 액세스 토큰을 발급·캐싱하는 {@link TokenProvider}.
 *
 * - 토큰을 메모리에 캐시하고, 만료 `refreshMarginMs` 이내로 들어오면 선제적으로 재발급한다.
 * - 동시에 여러 요청이 토큰을 필요로 하면 발급 호출을 1 회로 합친다(single-flight).
 * - {@link invalidate} 호출(예: 401 `expired-token` 수신) 시 캐시를 비워 다음 호출에서 강제 재발급한다.
 * - 토큰 응답은 BFF envelope 이 아닌 OAuth 2.0 표준 형식(`{ access_token, token_type, expires_in }`)이다.
 */
export class OAuthTokenProvider implements TokenProvider {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly retryBaseDelayMs: number;
  private readonly refreshMarginMs: number;
  private readonly tokenPath: string;

  private cached?: CachedToken;
  /** 진행 중인 발급 Promise. single-flight 보장용. */
  private pending?: Promise<string>;

  constructor(options: OAuthTokenProviderOptions) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.baseUrl = options.baseUrl.replace(/\/+$/, "");
    this.fetchImpl = options.fetch;
    this.timeoutMs = options.timeoutMs ?? 10_000;
    this.maxRetries = options.maxRetries ?? 3;
    this.retryBaseDelayMs = options.retryBaseDelayMs ?? 500;
    this.refreshMarginMs = options.refreshMarginMs ?? DEFAULT_REFRESH_MARGIN_MS;
    this.tokenPath = options.tokenPath ?? DEFAULT_TOKEN_PATH;
  }

  /** 유효한 액세스 토큰을 반환한다(만료 임박/부재 시 발급). */
  getAccessToken(): Promise<string> {
    const cached = this.cached;
    if (cached && Date.now() < cached.expiresAt - this.refreshMarginMs) {
      return Promise.resolve(cached.accessToken);
    }
    return this.issue();
  }

  /** 캐시된 토큰을 무효화한다. 다음 {@link getAccessToken} 에서 강제 재발급한다. */
  invalidate(): void {
    this.cached = undefined;
  }

  /** single-flight 로 토큰을 발급한다. */
  private issue(): Promise<string> {
    if (this.pending) return this.pending;
    this.pending = this.requestToken()
      .then((token) => {
        this.cached = token;
        return token.accessToken;
      })
      .finally(() => {
        this.pending = undefined;
      });
    return this.pending;
  }

  /** `client_credentials` 발급 요청(타임아웃 + 429/5xx/네트워크 재시도). */
  private async requestToken(): Promise<CachedToken> {
    const url = `${this.baseUrl}${this.tokenPath}`;
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: this.clientId,
      client_secret: this.clientSecret,
    }).toString();
    let lastError: unknown;

    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        const response = await this.fetchWithTimeout(url, body);

        if (response.ok) return await this.parseToken(response);

        const apiError = await this.parseError(response);
        if (RETRYABLE_STATUS.has(response.status) && attempt < this.maxRetries) {
          lastError = apiError;
          await sleep(this.retryDelay(attempt, response.headers.get("retry-after")));
          continue;
        }
        throw apiError;
      } catch (err) {
        if (err instanceof TossApiError) throw err;
        lastError = wrapNetworkError(err);
        if (attempt < this.maxRetries) {
          await sleep(this.retryDelay(attempt, null));
          continue;
        }
      }
    }

    throw lastError instanceof Error
      ? lastError
      : new TossError("토스증권 토큰 발급에 실패했습니다.");
  }

  private async fetchWithTimeout(url: string, body: string): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      return await this.fetchImpl(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
  }

  private async parseToken(response: Response): Promise<CachedToken> {
    const text = await response.text();
    let data: OAuthTokenResponse;
    try {
      data = JSON.parse(text) as OAuthTokenResponse;
    } catch (err) {
      throw new TossApiError("토스증권 토큰 응답을 JSON 으로 파싱하지 못했습니다.", {
        status: response.status,
        endpoint: this.tokenPath,
        responseBody: text.slice(0, MAX_BODY_SNIPPET),
        cause: err,
      });
    }

    if (!data || typeof data.access_token !== "string") {
      throw new TossApiError("토스증권 토큰 응답에 access_token 이 없습니다.", {
        status: response.status,
        endpoint: this.tokenPath,
        responseBody: text.slice(0, MAX_BODY_SNIPPET),
      });
    }

    const expiresIn = Number(data.expires_in);
    const ttlMs = Number.isFinite(expiresIn) && expiresIn > 0 ? expiresIn * 1000 : 0;
    return { accessToken: data.access_token, expiresAt: Date.now() + ttlMs };
  }

  /** OAuth 2.0 표준 에러(`{ error, error_description }`)와 BFF envelope 양쪽을 처리. */
  private async parseError(response: Response): Promise<TossApiError> {
    const text = await safeText(response);
    const base = {
      status: response.status,
      endpoint: this.tokenPath,
      requestId: response.headers.get("x-request-id") ?? undefined,
      responseBody: text.slice(0, MAX_BODY_SNIPPET),
    };

    try {
      const parsed = JSON.parse(text) as {
        error?: string | { code?: string; message?: string; requestId?: string; data?: unknown };
        error_description?: string;
      };
      if (typeof parsed.error === "string") {
        return new TossApiError(parsed.error_description ?? parsed.error, {
          ...base,
          code: parsed.error,
        });
      }
      if (parsed.error && typeof parsed.error === "object") {
        const envelope = parsed.error;
        return new TossApiError(envelope.message ?? `토큰 발급 실패 (${response.status})`, {
          ...base,
          code: envelope.code,
          requestId: envelope.requestId ?? base.requestId,
          data: envelope.data,
        });
      }
    } catch {
      // JSON 이 아니면 상태 코드 기반 메시지로 폴백.
    }

    return new TossApiError(`토스증권 토큰 발급이 ${response.status} 로 실패했습니다.`, base);
  }

  /** Exponential backoff with jitter, honoring a `Retry-After` header in seconds. */
  private retryDelay(attempt: number, retryAfter: string | null): number {
    if (retryAfter) {
      const seconds = Number(retryAfter);
      if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000;
    }
    const base = this.retryBaseDelayMs * 2 ** attempt;
    const jitter = Math.random() * this.retryBaseDelayMs;
    return base + jitter;
  }
}

async function safeText(response: Response): Promise<string> {
  try {
    return await response.text();
  } catch {
    return "";
  }
}

function wrapNetworkError(err: unknown): TossError {
  if (err instanceof Error && err.name === "AbortError") {
    return new TossError("토스증권 토큰 발급 요청이 타임아웃되었습니다.", { cause: err });
  }
  const message = err instanceof Error ? err.message : String(err);
  return new TossError(`토스증권 토큰 발급 요청이 실패했습니다: ${message}`, { cause: err });
}
