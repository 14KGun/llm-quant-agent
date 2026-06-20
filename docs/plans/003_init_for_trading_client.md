# 003 — trading-client 패키지 초기 설계

## 개요

`packages/trading-client` (`@llm-quant/trading-client`) 는 **토스증권 Open API 를 감싸는
타입 안전 SDK** 다. Trader 에이전트가 이 SDK 로 시세를 조회하고 계좌·자산을 확인하며
주문을 실행한다.

- 기준 API: **토스증권 Open API** (`https://openapi.tossinvest.com/...`)
- 구조: 단일 `TradingClient` (`clientId`·`clientSecret`·`accessToken`·`baseUrl` 주입) + 도메인별 모듈 메서드
- 이미 구현된 [`packages/feed-client`](../../packages/feed-client) 의 코어/리소스/테스트 패턴을 답습
- 응답 타입은 우선 `src/types/` 에 정의(`@llm-quant/types` 추출은 후속 작업)

관련 이슈: [#13](https://github.com/14KGun/llm-quant-agent/issues/13)

## feed-client 와의 핵심 차이점

| 항목 | feed-client (FMP) | trading-client (토스) |
|---|---|---|
| 인증 | `?apikey=` 쿼리 파라미터 | OAuth 2.0 (`client_credentials`) → `Authorization: Bearer` |
| 토큰 수명 | 없음 | `expires_in`(약 24h), refresh 없음 → 만료 시 자동 재발급 |
| 계좌 스코프 | 없음 | 계좌·자산·주문은 `X-Tossinvest-Account` 헤더 필요 |
| 응답 형식 | 배열/객체 | BFF 공통 envelope `{ result }` (Auth 만 OAuth2 표준) |
| 레이트리밋 | 단일 | API 그룹(TPS) 단위 + 피크시간 한도 |
| 에러 | 200 에러 페이로드 | `{ error: { code, message, data } }` envelope |
| 부작용 | 읽기 전용 | 주문 생성/정정/취소 — 쓰기 작업 |

## SDK 함수 설계 (도메인별)

⭐ = Trader MVP 우선 구현 대상.

### 1. Auth — OAuth 2.0 토큰 (내부 자동 관리)
- `POST /oauth2/token` `client_credentials` 토큰 발급 + 캐싱 + 만료/401 자동 재발급(single-flight)

### 2. Market Data — 시세 ⭐
- `getOrderbook` / `getPrices` / `getTrades` / `getPriceLimits` / `getCandles`

### 3. Stock Info — 종목 정보 ⭐
- `getStocks` / `getStockWarnings`

### 4. Market Info — 환율·장 운영 시간
- `getExchangeRate` / `getMarketCalendarKR` / `getMarketCalendarUS`

### 5. Account — 계좌 ⭐
- `getAccounts`

### 6. Asset — 보유 자산 ⭐
- `getHoldings`

### 7. Order — 주문 생성·정정·취소 ⭐
- `createOrder` / `modifyOrder` / `cancelOrder` (`confirmHighValueOrder`·`clientOrderId` 가드)

### 8. Order History — 주문 조회 ⭐
- `getOrders` / `getOrder`

### 9. Order Info — 거래 가능 정보
- `getBuyingPower` / `getSellableQuantity` / `getCommissions`

## 개발 계획 (Phase)

### Phase 1 — 패키지 스캐폴딩 & HTTP 코어 ✅
- [x] `packages/trading-client` 워크스페이스 추가 (`@llm-quant/trading-client`)
- [x] `package.json` / `tsconfig.json` / tsup 빌드 / vitest 설정 (feed-client 미러링)
- [x] `TradingClient` 코어: `clientId`·`clientSecret`·`accessToken`·`baseUrl` 주입, 설정 검증 (`TOSSINVEST_API_KEY`/`TOSSINVEST_SECRET_KEY`/`TOSSINVEST_ACCESS_TOKEN` 폴백)
- [x] `HttpClient`: URL 빌더, `Authorization`/`X-Tossinvest-Account` 헤더 주입, BFF `{ result }` envelope 언래핑
- [x] 에러 계층(`TossError`/`TossConfigError`/`TossApiError`) — `{ error }` envelope 파싱, 타임아웃(AbortController)
- [x] 레이트리밋(429)·5xx·네트워크 오류 지수 백오프 재시도 (`Retry-After` 존중, jitter)
- [x] `TokenProvider`/`StaticTokenProvider` 추상화 (Phase 2 연동 지점)
- [x] TTL 캐싱(`cacheTtlMs`, GET 한정) / 동시 요청 제한(`maxConcurrentRequests`, 세마포어)
- [x] 단위 테스트 (config / 헤더·envelope / 재시도 / 캐싱 / 동시성 / 에러)

### Phase 2 — 인증 & 토큰 관리 ⭐
- [ ] `AuthResource`: `client_credentials` 토큰 발급 (`application/x-www-form-urlencoded`)
- [ ] 토큰 캐시 + 만료 임박 선제 재발급, 401(`expired-token`/`invalid-token`) 시 1회 재발급 후 재시도
- [ ] 동시 재발급 single-flight
- [ ] `X-Tossinvest-Account` 기본 계좌 주입 옵션

### Phase 3 — 시세·종목 정보 (읽기) ⭐
- [ ] Market Data / Stock Info / Market Info 리소스 + 응답 타입(`src/types/`)

### Phase 4 — 계좌·자산·주문 (Trader MVP) ⭐
- [ ] Account / Asset / Order / Order History / Order Info 리소스
- [ ] 주문 에러 코드 매핑 (`insufficient-buying-power`/`order-hours-closed`/`price-out-of-range` 등)

### Phase 5 — 견고성 & 문서화
- [ ] 모듈별 unit test + 실제 엔드포인트 통합 테스트
- [ ] README(사용 예시) + JSDoc
- [ ] `packages/agents/trader` 연동 스모크 테스트

## 참고
- 토스증권 Open API Docs: https://developers.tossinvest.com/docs
- 명세: [`docs/tossinvest-api/`](../tossinvest-api/)
- Base URL: `https://openapi.tossinvest.com`
- 인증: OAuth 2.0 Client Credentials → `Authorization: Bearer` (+ 계좌·자산·주문은 `X-Tossinvest-Account`)
