import type { HttpClient } from "../http.js";
import type { MarketHours, MarketMover, SectorPerformance } from "../types/market.js";

/** 시장 데이터 엔드포인트 (거래 상위, 섹터 퍼포먼스, 거래소 운영시간). */
export class MarketResource {
  constructor(private readonly http: HttpClient) {}

  /** 상승률 상위 종목. */
  getGainers(): Promise<MarketMover[]> {
    return this.http.get<MarketMover[]>("biggest-gainers");
  }

  /** 하락률 상위 종목. */
  getLosers(): Promise<MarketMover[]> {
    return this.http.get<MarketMover[]>("biggest-losers");
  }

  /** 거래대금/거래량 상위 종목. */
  getMostActive(): Promise<MarketMover[]> {
    return this.http.get<MarketMover[]>("most-actives");
  }

  /** 특정 일자의 섹터 퍼포먼스 스냅샷. (date: YYYY-MM-DD) */
  getSectorPerformance(date: string): Promise<SectorPerformance[]> {
    return this.http.get<SectorPerformance[]>("sector-performance-snapshot", { date });
  }

  /** 거래소 운영 시간 / 개장 여부. */
  getMarketHours(exchange: string): Promise<MarketHours[]> {
    return this.http.get<MarketHours[]>("exchange-market-hours", { exchange });
  }
}
