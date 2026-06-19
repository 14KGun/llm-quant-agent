# @llm-quant/feed-client

Financial Modeling Prep (FMP) API를 감싸는 타입 안전 SDK. Scraper 에이전트가 시세 ·
재무제표 · 뉴스 · 경제지표를 수집하는 데 사용한다.

## 현재 상태 (Phase 1)

HTTP 코어만 구현된 상태다. 도메인별 메서드(quotes / financials / news / ...)는
이후 Phase에서 추가된다.

- `FeedClient` — apikey · baseUrl 주입, 설정 검증
- `HttpClient` — URL 빌더(apikey 자동 주입), 타임아웃, 429/5xx · 네트워크 오류 지수 백오프 재시도
- `FmpError` / `FmpConfigError` / `FmpApiError` — 에러 계층

## 사용 예시

```ts
import { FeedClient } from "@llm-quant/feed-client";

// apiKey 미지정 시 FMP_API_KEY 환경변수를 사용한다.
const client = new FeedClient({ apiKey: process.env.FMP_API_KEY });

// Phase 1: 제네릭 요청. 이후 Phase에서 client.quotes.getQuote(...) 형태로 확장.
const quote = await client.request<Array<{ symbol: string; price: number }>>("quote", {
  symbol: "AAPL",
});
```

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
