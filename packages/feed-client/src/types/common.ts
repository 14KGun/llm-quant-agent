/** 재무제표 보고 주기. */
export type ReportingPeriod = "annual" | "quarter";

/** 재무제표 계열 엔드포인트 공통 쿼리. */
export interface StatementQuery {
  /** 연간(annual) / 분기(quarter). 미지정 시 FMP 기본값(annual). */
  period?: ReportingPeriod;
  /** 반환할 기간 수. */
  limit?: number;
}
