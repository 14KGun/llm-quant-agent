import { TossConfigError } from "./errors.js";
import type { TokenProvider } from "./token.js";

/** User-supplied configuration for {@link TradingClient}. */
export interface TradingClientConfig {
  /** OAuth 2.0 client id. Falls back to the `TOSSINVEST_API_KEY` environment variable. */
  clientId?: string;
  /** OAuth 2.0 client secret. Falls back to the `TOSSINVEST_SECRET_KEY` environment variable. */
  clientSecret?: string;
  /**
   * 미리 발급된 액세스 토큰. 전달 시 OAuth 발급 과정을 건너뛴다(테스트/Phase 1).
   * `TOSSINVEST_ACCESS_TOKEN` 환경변수로도 주입할 수 있다.
   */
  accessToken?: string;
  /**
   * 계좌·자산·주문 API 에 사용할 기본 계좌 식별자(`X-Tossinvest-Account`).
   * 요청별로 덮어쓸 수 있다.
   */
  accountSeq?: string | number;
  /** Override the API base URL. Defaults to the 토스증권 Open API base URL. */
  baseUrl?: string;
  /** Per-request timeout in milliseconds. Defaults to 10_000. */
  timeoutMs?: number;
  /** Maximum number of retries for transient failures. Defaults to 3. */
  maxRetries?: number;
  /** Base delay (ms) for exponential backoff between retries. Defaults to 500. */
  retryBaseDelayMs?: number;
  /**
   * 액세스 토큰을 만료 며 ms 전에 선제 재발급할지. 기본 60_000.
   * OAuth 토큰 공급자에만 적용된다.
   */
  tokenRefreshMarginMs?: number;
  /**
   * 성공 응답을 캐시할 TTL(ms). 0/미지정이면 캐시 비활성화.
   * 종목 마스터·장 운영 시간처럼 갱신 주기가 긴 GET 응답의 중복 호출을 줄인다.
   */
  cacheTtlMs?: number;
  /**
   * 동시 in-flight 요청 수 상한. 0/미지정이면 무제한.
   * 토스증권 API 그룹별 TPS 레이트리밋 회피용.
   */
  maxConcurrentRequests?: number;
  /** Inject a custom fetch implementation (useful for tests). */
  fetch?: typeof fetch;
  /**
   * 토큰 공급자를 직접 주입한다. 전달 시 `accessToken`/`clientId` 기반 기본 공급자 대신 사용된다.
   * Phase 2 의 `OAuthTokenProvider` 연동 지점.
   */
  tokenProvider?: TokenProvider;
}

/** Fully resolved configuration with all defaults applied. */
export interface ResolvedConfig {
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  accountSeq?: string;
  baseUrl: string;
  timeoutMs: number;
  maxRetries: number;
  retryBaseDelayMs: number;
  tokenRefreshMarginMs: number;
  cacheTtlMs: number;
  maxConcurrentRequests: number;
  fetch: typeof fetch;
}

export const DEFAULT_BASE_URL = "https://openapi.tossinvest.com";
export const DEFAULT_TIMEOUT_MS = 10_000;
export const DEFAULT_MAX_RETRIES = 3;
export const DEFAULT_RETRY_BASE_DELAY_MS = 500;
export const DEFAULT_TOKEN_REFRESH_MARGIN_MS = 60_000;

/** Validate and merge user config with defaults and environment variables. */
export function resolveConfig(config: TradingClientConfig = {}): ResolvedConfig {
  const clientId = config.clientId ?? process.env.TOSSINVEST_API_KEY;
  const clientSecret = config.clientSecret ?? process.env.TOSSINVEST_SECRET_KEY;
  const accessToken = config.accessToken ?? process.env.TOSSINVEST_ACCESS_TOKEN;

  // 토큰 공급자를 직접 주입했거나, 미리 발급된 토큰이 있거나,
  // client_id + client_secret 한 쌍이 있어야 한다.
  const hasCredentials = Boolean(clientId && clientSecret);
  if (!config.tokenProvider && !accessToken && !hasCredentials) {
    throw new TossConfigError(
      "토스증권 인증 정보가 필요합니다. `clientId`+`clientSecret` (또는 TOSSINVEST_API_KEY/TOSSINVEST_SECRET_KEY), " +
        "`accessToken`, 또는 `tokenProvider` 중 하나를 제공하세요.",
    );
  }

  const fetchImpl = config.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new TossConfigError(
      "No fetch implementation found. Use Node 18+ or pass a `fetch` in the config.",
    );
  }

  return {
    clientId,
    clientSecret,
    accessToken,
    accountSeq: config.accountSeq === undefined ? undefined : String(config.accountSeq),
    baseUrl: (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, ""),
    timeoutMs: config.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    maxRetries: config.maxRetries ?? DEFAULT_MAX_RETRIES,
    retryBaseDelayMs: config.retryBaseDelayMs ?? DEFAULT_RETRY_BASE_DELAY_MS,
    tokenRefreshMarginMs: config.tokenRefreshMarginMs ?? DEFAULT_TOKEN_REFRESH_MARGIN_MS,
    cacheTtlMs: config.cacheTtlMs ?? 0,
    maxConcurrentRequests: config.maxConcurrentRequests ?? 0,
    fetch: fetchImpl,
  };
}
