# llm-quant-agent

FMP API + 토스증권 API 기반 LLM 투자 에이전트 시스템.

## 설계 문서

모든 설계 결정과 아키텍처는 [`docs/plans/`](./docs/plans/) 에서 관리한다.

| 문서 | 내용 |
|---|---|
| [001_init.md](./docs/plans/001_init.md) | 초기 아키텍처 및 디렉토리 구조 |

## 개발 워크플로우

### 네이밍 컨벤션

커밋, 이슈 제목, PR 제목 모두 동일한 형식을 따른다.

```
[scope] type: subject
```

- **제목(title)**: 영어로 작성
- **본문(body)**: 한글로 작성

**허용 타입**: `feat` / `fix` / `docs` / `chore` / `refactor` / `test` / `perf`

**허용 스코프**: `api` / `web` / `agents` / `trading-client` / `feed-client` / `types` / `harness`

**예시**
```
[api] feat: add portfolio snapshot endpoint
[agents] fix: handle FMP API rate limit error
[chore] docs: update architecture plan
```

### 브랜치 네이밍

```
feat/<description>
fix/<description>
docs/<description>
chore/<description>
```

---

## 기술 스택

- **모노레포**: pnpm + Turborepo
- **백엔드**: NestJS + TypeORM + PostgreSQL
- **프론트**: Vite + React
- **에이전트**: TypeScript (`packages/agents`) + Claude API + FMP API
- **증권**: 토스증권 Open API
