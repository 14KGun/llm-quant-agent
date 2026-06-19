import type { HttpClient } from "../http.js";
import type {
  AnalystEstimate,
  AnalystEstimateQuery,
  GradesConsensus,
  HistoricalRating,
  PriceTargetConsensus,
  PriceTargetSummary,
  RatingSnapshot,
  StockGrade,
} from "../types/analyst.js";

/** 애널리스트 엔드포인트 (목표주가/추정치/등급/투자의견). */
export class AnalystResource {
  constructor(private readonly http: HttpClient) {}

  /** 목표주가 요약(기간별 평균/건수). */
  getPriceTargetSummary(symbol: string): Promise<PriceTargetSummary[]> {
    return this.http.get<PriceTargetSummary[]>("price-target-summary", { symbol });
  }

  /** 목표주가 컨센서스(고/저/평균/중앙값). */
  getPriceTargetConsensus(symbol: string): Promise<PriceTargetConsensus[]> {
    return this.http.get<PriceTargetConsensus[]>("price-target-consensus", { symbol });
  }

  /** 애널리스트 실적 추정치. */
  getEstimates(symbol: string, query: AnalystEstimateQuery = {}): Promise<AnalystEstimate[]> {
    return this.http.get<AnalystEstimate[]>("analyst-estimates", {
      symbol,
      period: query.period,
      page: query.page,
      limit: query.limit,
    });
  }

  /** 종합 등급 스냅샷. */
  getRatingsSnapshot(symbol: string): Promise<RatingSnapshot[]> {
    return this.http.get<RatingSnapshot[]>("ratings-snapshot", { symbol });
  }

  /** 등급 히스토리. */
  getHistoricalRatings(symbol: string, limit?: number): Promise<HistoricalRating[]> {
    return this.http.get<HistoricalRating[]>("ratings-historical", { symbol, limit });
  }

  /** 투자의견 변경(업/다운그레이드) 액션. */
  getGrades(symbol: string): Promise<StockGrade[]> {
    return this.http.get<StockGrade[]>("grades", { symbol });
  }

  /** 등급 컨센서스 분포(strongBuy~strongSell). */
  getGradesConsensus(symbol: string): Promise<GradesConsensus[]> {
    return this.http.get<GradesConsensus[]>("grades-consensus", { symbol });
  }
}
