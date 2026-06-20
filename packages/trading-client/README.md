# @llm-quant/trading-client

토스증권(Toss Invest) Open API를 감싸는 타입 안전 SDK. Trader 에이전트가 시세 조회·계좌/자산
조회·주문 실행에 사용한다.

## 현재 상태 (Phase 1 — 스캐폴딩 & HTTP 코어)

전송 코어만 구현된 단계다. 도메인 리소스(Market Data / Stock Info / Account / Asset / Order /
...)와 OAuth 토큰 발급 공급자는 이후 Phase 에서 추가된다.

- `TradingClient` — `clientId`·`clientSecret`·`accessToken`·`baseUrl` 주입, 설정 검증, 토큰 공급자 배선
- `HttpClient` — URL 빌더, `Authorization: Bearer` 주입, `X-Tossinvest-Account` 헤더,
  BFF `{ result }` envelope 언래핑, `{ error }` envelope → `TossApiError` 파싱,
  타임아웃, 429/5xx · 네트워크 오류 지수 백오프 재시도(`Retry-After` 존중),
  TTL 캐싱(opt-in), 동시 요청 제한(opt-in)
- `TossError` / `TossConfigError` / `TossApiError` — 에러 계층
- `TokenProvider` / `StaticTokenProvider` — 토큰 공급 추상화 (Phase 2 의 `OAuthTokenProvider` 연동 지점)

> ⚠️ Phase 1 에서는 OAuth `client_credentials` 토큰 발급이 아직 없다. 미리 발급한
> `accessToken` 을 주입하거나 직접 `tokenProvider` 를 전달해야 실제 호출이 동작한다.
> `clientId`/`clientSecret` 만 전달하면 설정은 통과하되, 첫 요청에서 Phase 2 안내 에러가 발생한다.

## 설정

| 옵션 | 환경변수 | 설명 |
| :--- | :--- | :--- |
| `clientId` | `TOSS_CLIENT_ID` | OAuth 2.0 client id (Phase 2 에서 사용) |
| `clientSecret` | `TOSS_CLIENT_SECRET` | OAuth 2.0 client secret (Phase 2 에서 사용) |
| `accessToken` | `TOSS_ACCESS_TOKEN` | 미리 발급한 액세스 토큰 (Phase 1) |
| `accountSeq` | — | 계좌·자산·주문 API 기본 계좌 (`X-Tossinvest-Account`) |
| `baseUrl` | — | 기본값 `https://openapi.tossinvest.com` |
| `timeoutMs` / `maxRetries` / `retryBaseDelayMs` | — | 타임아웃·재시도 정책 |
| `cacheTtlMs` / `maxConcurrentRequests` | — | TTL 캐싱·동시성 제한 (opt-in) |

`clientId`+`clientSecret`, `accessToken`, `tokenProvider` 중 최소 하나가 필요하다.

## 사용 예시

```ts
import { TradingClient } from "@llm-quant/trading-client";

// accessToken 미지정 시 TOSS_ACCESS_TOKEN 환경변수를 사용한다.
const client = new TradingClient({ accessToken: process.env.TOSS_ACCESS_TOKEN });

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
