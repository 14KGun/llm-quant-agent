# @llm-quant/trading-client

토스증권(Toss Invest) Open API를 감싸는 타입 안전 SDK. Trader 에이전트가 시세 조회·계좌/자산
조회·주문 실행에 사용한다.

## 현재 상태 (Phase 2 — 인증 & 토큰 관리)

전송 코어 + OAuth 토큰 발급/관리가 구현된 단계다. 도메인 리소스(Market Data / Stock Info /
Account / Asset / Order / ...)는 이후 Phase 에서 추가된다.

- `TradingClient` — `clientId`·`clientSecret`·`accessToken`·`baseUrl` 주입, 설정 검증, 토큰 공급자 배선
- `OAuthTokenProvider` — `client_credentials` 토큰 발급, 메모리 캐싱 + 만료 임박 선제 재발급,
  동시 발급 single-flight, `invalidate()` 지원
- `HttpClient` — URL 빌더, `Authorization: Bearer` 주입, `X-Tossinvest-Account` 헤더,
  BFF `{ result }` envelope 언래핑, `{ error }` envelope → `TossApiError` 파싱,
  **401 수신 시 토큰 무효화 후 1회 재시도**, 타임아웃,
  429/5xx · 네트워크 오류 지수 백오프 재시도(`Retry-After` 존중),
  TTL 캐싱(opt-in), 동시 요청 제한(opt-in)
- `TossError` / `TossConfigError` / `TossApiError` — 에러 계층
- `TokenProvider` / `StaticTokenProvider` / `OAuthTokenProvider` — 토큰 공급 추상화

> `clientId`+`clientSecret` 를 주면 토큰을 자동으로 발급·갱신한다. 미리 발급한 토큰을 직접
> 다루려면 `accessToken`(또는 `tokenProvider`)을 전달한다.

## 설정

| 옵션 | 환경변수 | 설명 |
| :--- | :--- | :--- |
| `clientId` | `TOSSINVEST_API_KEY` | OAuth 2.0 client id |
| `clientSecret` | `TOSSINVEST_SECRET_KEY` | OAuth 2.0 client secret |
| `accessToken` | `TOSSINVEST_ACCESS_TOKEN` | 미리 발급한 액세스 토큰(직접 다룰 때) |
| `accountSeq` | — | 계좌·자산·주문 API 기본 계좌 (`X-Tossinvest-Account`) |
| `baseUrl` | — | 기본값 `https://openapi.tossinvest.com` |
| `timeoutMs` / `maxRetries` / `retryBaseDelayMs` | — | 타임아웃·재시도 정책 |
| `tokenRefreshMarginMs` | — | 만료 며 ms 전에 선제 재발급할지 (기본 60_000) |
| `cacheTtlMs` / `maxConcurrentRequests` | — | TTL 캐싱·동시성 제한 (opt-in) |

`clientId`+`clientSecret`, `accessToken`, `tokenProvider` 중 최소 하나가 필요하다.

## 사용 예시

```ts
import { TradingClient } from "@llm-quant/trading-client";

// client_id/secret 미지정 시 TOSSINVEST_API_KEY / TOSSINVEST_SECRET_KEY 환경변수를 사용한다.
// 토큰은 자동으로 발급·캐싱·갱신된다.
const client = new TradingClient({
  clientId: process.env.TOSSINVEST_API_KEY,
  clientSecret: process.env.TOSSINVEST_SECRET_KEY,
});

// 시세·종목 정보 (토큰만 필요) — 응답은 BFF envelope 에서 자동 언래핑된다.
const stocks = await client.request<unknown[]>("api/v1/stocks", {
  query: { symbols: "005930,AAPL" },
});

// 계좌·자산 (계좌 헤더 필요)
const holdings = await client.request<unknown[]>("api/v1/holdings", { accountSeq: 1 });

// 주문 (POST)
const order = await client.request<{ orderId: string }>("api/v1/orders", {
  method: "POST",
  accountSeq: 1,
  body: { symbol: "005930", side: "BUY", orderType: "LIMIT", price: "72000", quantity: "10" },
});
```

## 스크립트

```bash
pnpm --filter @llm-quant/trading-client build      # tsup 빌드
pnpm --filter @llm-quant/trading-client test       # vitest
pnpm --filter @llm-quant/trading-client typecheck  # tsc --noEmit
```

## 참고

- 토스증권 Open API Docs: https://developers.tossinvest.com/docs
- 명세: [`docs/tossinvest-api/`](../../docs/tossinvest-api/)
- 설계: [`docs/plans/001_init.md`](../../docs/plans/001_init.md)
