# 001 — 초기 아키텍처 설계

## 개요

FMP API + 토스증권 API 기반 LLM 투자 에이전트 시스템.
pnpm 모노레포 구조로 에이전트, 백엔드, 프론트엔드를 단일 저장소에서 관리한다.

## 기술 스택

| 레이어 | 기술 |
|---|---|
| 모노레포 | pnpm + Turborepo |
| 백엔드 | NestJS + Mongoose + MongoDB |
| 프론트 | Vite + React |
| 에이전트 | TypeScript + Claude API + FMP API |
| 스케줄링 | NestJS `@nestjs/schedule` (cron) |
| 증권 | 토스증권 Open API |
| 데이터 | FMP Professional ($49/mo) |

## 디렉토리 구조

```
llm-quant-agent/
├── apps/
│   ├── api/                        # NestJS
│   │   └── src/
│   │       ├── scheduler/          # 장 시작/종료 cron 트리거
│   │       ├── reports/            # 데일리 레포트 생성 & 저장
│   │       ├── portfolio/          # 포트폴리오 조회 API
│   │       ├── trades/             # 거래 내역 CRUD API
│   │       ├── signals/            # 예측 신호 CRUD API
│   │       └── database/           # Mongoose 스키마 & 연결 설정
│   │
│   └── web/                        # Vite + React
│       └── src/
│           ├── pages/
│           │   ├── Dashboard/      # 포트폴리오 현황
│           │   ├── Signals/        # 예측 신호 히스토리
│           │   ├── Trades/         # 거래 내역
│           │   └── Reports/        # 데일리 레포트
│           └── components/
│
└── packages/
    ├── agents/                     # @llm-quant/agents
    │   └── src/
    │       ├── scraper/            # FMP API 수집
    │       ├── predictor/          # Claude API CoT 분석
    │       ├── trader/             # 토스증권 주문 + 안전장치
    │       └── index.ts
    │
    ├── trading-client/             # @llm-quant/trading-client
    │   └── src/
    │       └── index.ts            # 토스증권 Open API SDK
    │
    ├── feed-client/                # @llm-quant/feed-client
    │   └── src/
    │       └── index.ts            # FMP 경제뉴스 & 시장 데이터 SDK
    │
    └── types/                      # @llm-quant/types
        └── src/
            ├── market.ts           # ScraperOutput, MarketData, NewsItem
            ├── signal.ts           # PredictionSignal
            ├── trade.ts            # TradeOrder, TradeResult
            └── report.ts           # DailyReport
```

## 의존 관계

```
apps/api  →  packages/agents  →  packages/types
                               →  packages/trading-client
                               →  packages/feed-client
apps/web  →  (apps/api REST API)
```

## 에이전트 구성

### 1. Scraper (`packages/agents/src/scraper/`)
- FMP REST API로 실시간 주가, 재무제표, 뉴스 수집
- 노이즈 필터링 후 정제된 `ScraperOutput` 반환

### 2. Predictor (`packages/agents/src/predictor/`)
- Scraper 출력을 Claude API에 전달
- Chain-of-Thought 프롬프트로 BUY / SELL / HOLD 신호 및 신뢰도(0~1) 생성

### 3. Trader (`packages/agents/src/trader/`)
- Predictor 신호를 받아 규칙 기반 안전장치 통과 후 토스증권 API로 주문 실행
- 안전장치: 신뢰도 임계값, 단일 종목 비중 제한, 일일 손실 한도

## 데이터 파이프라인

```
[cron 08:50 KST]
    ↓
NestJS Scheduler
    ↓
Scraper → FMP API
    ↓
Predictor → Claude API
    ↓
Trader → 토스증권 API
    ↓
PostgreSQL 저장
    ↓
React Dashboard ← REST API
```

## MongoDB 컬렉션

| 컬렉션 | 내용 |
|---|---|
| `market_signals` | Scraper 수집 데이터 |
| `predictions` | Predictor 신호 (ticker, signal, confidence, reasoning) |
| `trades` | 실행된 거래 내역 |
| `portfolio_snapshots` | 일별 포트폴리오 스냅샷 |
| `daily_reports` | 데일리 레포트 본문 + 메타 |
