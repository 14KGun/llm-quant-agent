/** 거래 상위 종목 (`/biggest-gainers`, `/biggest-losers`, `/most-actives`). */
export interface MarketMover {
  symbol: string;
  price: number;
  name: string;
  change: number;
  changesPercentage: number;
}

/** 섹터 퍼포먼스 스냅샷 (`/sector-performance-snapshot`). */
export interface SectorPerformance {
  date: string;
  sector: string;
  exchange: string;
  averageChange: number;
}

/** 거래소 운영 시간 (`/exchange-market-hours`). */
export interface MarketHours {
  exchange: string;
  name: string;
  openingHour: string;
  closingHour: string;
  timezone: string;
  isMarketOpen: boolean;
}
