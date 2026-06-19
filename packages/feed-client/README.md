# @llm-quant/feed-client

Financial Modeling Prep (FMP) API를 감싸는 타입 안전 SDK. Scraper 에이전트가 시세 ·
재무제표 · 뉴스 · 경제지표를 수집하는 데 사용한다.

## 현재 상태 (Phase 3)

HTTP 코어 + 도메인 리소스(Quotes / Company / Financials / News / Market / Economic)가
구현된 상태다. Calendars / Analyst / Search 등은 이후 Phase에서 추가된다.

- `FeedClient` — apikey · baseUrl 주입, 설정 검증, 리소스 노출
- `HttpClient` — URL 빌더(apikey 자동 주입), 타임아웃, 429/5xx · 네트워크 오류 지수 백오프 재시도
- `FmpError` / `FmpConfigError` / `FmpApiError` — 에러 계층
- 리소스: `client.quotes` / `client.company` / `client.financials` / `client.news` /
  `client.market` / `client.economic`

## 사용 예시

```ts
import { FeedClient } from "@llm-quant/feed-client";

// apiKey 미지정 시 FMP_API_KEY 환경변수를 사용한다.
const client = new FeedClient({ apiKey: process.env.FMP_API_KEY });

// 시세
const quote = await client.quotes.getQuote("AAPL");
const candles = await client.quotes.getHistoricalPrice("AAPL", { from: "2024-01-01" });

// 기업 정보
const profile = await client.company.getProfile("AAPL");

// 재무제표
const income = await client.financials.getIncomeStatement("AAPL", { period: "quarter", limit: 4 });
const metrics = await client.financials.getKeyMetrics("AAPL");

// 아직 리소스가 없는 엔드포인트는 제네릭 request 사용
const news = await client.request<unknown[]>("news/general-latest", { limit: 5 });
```

## 리소스 메서드

| 리소스 | 메서드 |
|---|---|
| `quotes` | `getQuote` · `getQuoteShort` · `getBatchQuotes`¹ · `getHistoricalPrice` |
| `company` | `getProfile` |
| `financials` | `getIncomeStatement` · `getBalanceSheet` · `getCashFlow` · `getRatios` · `getKeyMetrics` |
| `news` | `getStockNews` · `getGeneralNews` · `getPressReleases` · `getArticles` · `getCryptoNews` · `getForexNews` |
| `market` | `getGainers` · `getLosers` · `getMostActive` · `getSectorPerformance` · `getMarketHours` |
| `economic` | `getTreasuryRates` · `getEconomicIndicator` · `getEconomicCalendar` · `getMarketRiskPremium` |

> ¹ `getBatchQuotes`(`batch-quote`)는 FMP 상위 구독 플랜 전용. 하위 플랜에서는 402(Restricted)가 반환되며, 통합 테스트는 402일 때 실패 대신 자동 skip 처리한다.

## 설정 옵션

| 옵션 | 기본값 | 설명 |
|---|---|---|
| `apiKey` | `process.env.FMP_API_KEY` | FMP API 키 |
| `baseUrl` | `https://financialmodelingprep.com/stable` | API 베이스 URL |
| `timeoutMs` | `10000` | 요청별 타임아웃 |
| `maxRetries` | `3` | 일시적 오류 재시도 횟수 |
| `retryBaseDelayMs` | `500` | 지수 백오프 기본 지연 |
| `fetch` | `globalThis.fetch` | 커스텀 fetch 구현(테스트용) |

## 스크립트

```bash
pnpm --filter @llm-quant/feed-client build      # tsup 번들 + d.ts
pnpm --filter @llm-quant/feed-client test       # vitest
pnpm --filter @llm-quant/feed-client typecheck  # tsc --noEmit
```
