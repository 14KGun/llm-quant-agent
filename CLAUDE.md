# llm-quant-agent

FMP API + 토스증권 API 기반 LLM 투자 에이전트 시스템.

## 설계 문서

모든 설계 결정과 아키텍처는 [`docs/plans/`](./docs/plans/) 에서 관리한다.

| 문서 | 내용 |
|---|---|
| [001_init.md](./docs/plans/001_init.md) | 초기 아키텍처 및 디렉토리 구조 |

## 기술 스택

- **모노레포**: pnpm + Turborepo
- **백엔드**: NestJS + TypeORM + PostgreSQL
- **프론트**: Vite + React
- **에이전트**: TypeScript (`packages/agents`) + Claude API + FMP API
- **증권**: 토스증권 Open API
