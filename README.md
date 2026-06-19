# llm-quant-agent

FMP API와 토스증권 API를 활용한 LLM 기반 자동 투자 에이전트 시스템.

## 설계 문서

아키텍처 및 개발 계획은 [`docs/plans/`](./docs/plans/) 에서 확인할 수 있다.

| 문서 | 내용 |
|---|---|
| [001_init.md](./docs/plans/001_init.md) | 초기 아키텍처 및 디렉토리 구조 |

## 구성

```
apps/api      — NestJS 백엔드 (스케줄링, 데일리 레포트, REST API)
apps/web      — Vite + React 대시보드
packages/agents — AI 에이전트 3종 (Scraper, Predictor, Trader)
packages/types  — 공유 TypeScript 타입
```

## 에이전트 파이프라인

```
Scraper (FMP API) → Predictor (Claude API) → Trader (토스증권 API)
```
