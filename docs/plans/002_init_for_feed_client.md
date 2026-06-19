# 002 — feed-client 패키지 초기 설계

## 개요

`packages/feed-client` (`@llm-quant/feed-client`) 는 **Financial Modeling Prep(FMP)
API를 감싸는 타입 안전 SDK** 다. Scraper 에이전트가 이 SDK를 통해 실시간 시세 ·
재무제표 · 뉴스 · 경제지표를 수집한다.

- 기준 API: **FMP Stable API** (`https://financialmodelingprep.com/stable/...?apikey=...`)
- 구조: 단일 `FeedClient` (apikey · baseUrl 주입) + 도메인별 모듈 메서드
- 응답 타입은 `@llm-quant/types` 와 공유

관련 이슈: [#4](https://github.com/14KGun/llm-quant-agent/issues/4) ·
PR: [#5](https://github.com/14KGun/llm-quant-agent/pull/5)

## SDK 함수 설계 (도메인별)

FMP API 카테고리를 에이전트 활용도 기준으로 9개 도메인으로 그룹핑했다.
⭐ = Scraper MVP 우선 구현 대상.

### 1. Quotes — 실시간 시세 ⭐
- `getQuote(symbol)` — 전체 시세 (가격/변동/거래량/시총/PER)
- `getQuoteShort(symbol)` — 경량 시세
- `getBatchQuotes(symbols[])` — 다중 종목 일괄 조회
- `getAftermarketQuote(symbol)` — 시간외 호가
- `getStockPriceChange(symbol)` — 기간별 등락률
- `getHistoricalPrice(symbol, { from, to })` — 일봉 EOD
- `getIntradayPrice(symbol, interval)` — 분봉 (1min/5min/1hour)

### 2. Company — 기업 정보
- `getProfile(symbol)` — 프로필 (섹터/산업/시총/설명)
- `getMarketCap(symbol)` / `getHistoricalMarketCap(symbol)`
- `getSharesFloat(symbol)` — 유통 주식 수
- `getKeyExecutives(symbol)` / `getEmployeeCount(symbol)`

### 3. Financial Statements — 재무제표 ⭐
- `getIncomeStatement(symbol, { period, limit })`
- `getBalanceSheet(symbol, { period, limit })`
- `getCashFlow(symbol, { period, limit })`
- `getRatios(symbol)` / `getRatiosTTM(symbol)`
- `getKeyMetrics(symbol)` / `getKeyMetricsTTM(symbol)`
- `getFinancialGrowth(symbol)`
- `getEnterpriseValues(symbol)`
- `getFinancialScores(symbol)` — Altman Z / Piotroski

### 4. News — 뉴스 ⭐ (feed-client 핵심)
- `getStockNews({ symbols, from, to, limit })`
- `getGeneralNews({ limit })`
- `getPressReleases(symbol)`
- `getArticles({ limit })` — FMP 큐레이션 기사
- `getCryptoNews()` / `getForexNews()`

### 5. Market Data — 시장 데이터
- `getMarketGainers()` / `getMarketLosers()` / `getMostActive()`
- `getSectorPerformance()` / `getHistoricalSectorPerformance()`
- `getSectorPE()` / `getIndustryPE()`
- `getMarketHours(exchange)`
- `getIndexQuote(symbol)` — 지수 (^GSPC, ^IXIC)

### 6. Economic Data — 경제지표 ⭐
- `getTreasuryRates({ from, to })`
- `getEconomicIndicator(name, { from, to })` — GDP/CPI/실업률/금리
- `getEconomicCalendar({ from, to })`
- `getMarketRiskPremium()`

### 7. Calendars — 캘린더
- `getEarningsCalendar({ from, to })`
- `getDividendsCalendar({ from, to })`
- `getIPOCalendar({ from, to })`
- `getStockSplitsCalendar({ from, to })`

### 8. Analyst — 애널리스트
- `getPriceTarget(symbol)` / `getPriceTargetSummary(symbol)`
- `getAnalystEstimates(symbol)`
- `getRatings(symbol)`
- `getUpgradesDowngrades(symbol)`
- `getGradesConsensus(symbol)`

### 9. Directory / Search — 검색 & 메타
- `searchSymbol(query)` / `searchByName(query)`
- `getStockList()` / `getETFList()`
- `getAvailableExchanges()` / `getAvailableSectors()` / `getAvailableIndustries()`

## 개발 계획 (Phase)

### Phase 1 — 패키지 스캐폴딩 & HTTP 코어 ✅
- [x] 모노레포 루트 부트스트랩 (pnpm workspace + Turborepo + base tsconfig + .gitignore)
- [x] `packages/feed-client` 워크스페이스 추가 (`@llm-quant/feed-client`)
- [x] `package.json` / `tsconfig.json` / tsup 빌드 / vitest 설정
- [x] `FeedClient` 코어: `apikey`·`baseUrl` 주입, 설정 검증 (`FMP_API_KEY` 폴백)
- [x] `HttpClient`: URL 빌더(apikey 자동 주입, 배열 파라미터 직렬화)
- [x] 에러 계층(`FmpError`/`FmpConfigError`/`FmpApiError`), 타임아웃(AbortController)
- [x] 레이트리밋(429)·5xx·네트워크 오류 지수 백오프 재시도 (Retry-After 존중)
- [x] FMP 200 에러 페이로드 감지
- [x] 단위 테스트 (config / URL 빌더 / 재시도 / 에러 처리)

### Phase 2 — 핵심 도메인 (Scraper MVP) ⭐
- [x] Quotes (`getQuote` / `getQuoteShort` / `getBatchQuotes` / `getHistoricalPrice`)
- [x] Company (`getProfile`)
- [x] Financial Statements (income / balance / cashflow / ratios / keyMetrics)
- [x] 응답 타입 정의 (우선 feed-client 내부 `src/types/`; `@llm-quant/types`
  추출은 패키지 신설 시 후속 작업으로 이관)
- [x] 리소스별 단위 테스트 + 실제 엔드포인트 통합 테스트(CI)

### Phase 3 — News & Market & Economic
- [ ] News 모듈 (stock/general/press-release/articles)
- [ ] Market Data 모듈 (gainers/losers/active, sector performance, market hours, index)
- [ ] Economic Data 모듈 (treasury, indicators, economic calendar)

### Phase 4 — Calendars / Analyst / Search
- [ ] Calendars (earnings/dividends/ipo/splits)
- [ ] Analyst (price-target/estimates/ratings/upgrades-downgrades)
- [ ] Directory & Search

### Phase 5 — 견고성 & 문서화
- [ ] 모듈별 unit test (fetch mocking)
- [ ] 인메모리 캐싱 옵션(시세 단기 TTL) / 동시 요청 제한
- [ ] README(사용 예시) + JSDoc
- [ ] `packages/agents/scraper` 연동 스모크 테스트

## 참고
- FMP Docs: https://site.financialmodelingprep.com/developer/docs
- Stable Base URL: `https://financialmodelingprep.com/stable/`
- 인증: 모든 요청 `?apikey=` 쿼리 파라미터
