/**
 * 액세스 토큰 공급자. {@link HttpClient} 는 매 요청마다 이 인터페이스로 Bearer 토큰을 받아
 * `Authorization` 헤더에 주입한다.
 *
 * Phase 1 에서는 미리 발급된 토큰을 그대로 돌려주는 {@link StaticTokenProvider} 만 제공한다.
 * OAuth 2.0 `client_credentials` 토큰 발급·캐싱·만료 재발급(single-flight)은 Phase 2 에서
 * 이 인터페이스를 구현하는 `OAuthTokenProvider` 로 채운다.
 */
export interface TokenProvider {
  /** 유효한 액세스 토큰을 반환한다(필요 시 내부적으로 발급/갱신). */
  getAccessToken(): Promise<string>;
  /**
   * 현재 캐시된 토큰을 무효화한다(예: 401 `expired-token` 수신 시).
   * 다음 {@link getAccessToken} 호출에서 강제로 재발급하도록 한다. 선택 구현.
   */
  invalidate?(): void;
}

/** 미리 발급된 토큰을 그대로 사용하는 공급자(테스트 및 Phase 1 용). */
export class StaticTokenProvider implements TokenProvider {
  constructor(private readonly token: string) {}

  getAccessToken(): Promise<string> {
    return Promise.resolve(this.token);
  }
}
