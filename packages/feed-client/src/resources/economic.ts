import type { HttpClient } from "../http.js";
import type { DateRangeQuery } from "../types/common.js";
import type {
  EconomicCalendarEvent,
  EconomicIndicator,
  EconomicIndicatorName,
  MarketRiskPremium,
  TreasuryRate,
} from "../types/economic.js";

/** 경제지표 엔드포인트 (국채 금리, 경제지표, 캘린더, 위험 프리미엄). */
export class EconomicResource {
  constructor(private readonly http: HttpClient) {}

  /** 전 만기 국채 금리. */
  getTreasuryRates(query: DateRangeQuery = {}): Promise<TreasuryRate[]> {
    return this.http.get<TreasuryRate[]>("treasury-rates", {
      from: query.from,
      to: query.to,
    });
  }

  /** 지정한 경제지표(GDP/CPI/실업률 등)의 시계열. */
  getEconomicIndicator(
    name: EconomicIndicatorName,
    query: DateRangeQuery = {},
  ): Promise<EconomicIndicator[]> {
    return this.http.get<EconomicIndicator[]>("economic-indicators", {
      name,
      from: query.from,
      to: query.to,
    });
  }

  /** 경제지표 발표 일정. */
  getEconomicCalendar(query: DateRangeQuery = {}): Promise<EconomicCalendarEvent[]> {
    return this.http.get<EconomicCalendarEvent[]>("economic-calendar", {
      from: query.from,
      to: query.to,
    });
  }

  /** 국가별 시장 위험 프리미엄. */
  getMarketRiskPremium(): Promise<MarketRiskPremium[]> {
    return this.http.get<MarketRiskPremium[]>("market-risk-premium");
  }
}
