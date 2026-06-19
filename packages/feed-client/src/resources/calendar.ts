import type { HttpClient } from "../http.js";
import type { DateRangeQuery } from "../types/common.js";
import type {
  DividendEvent,
  EarningsEvent,
  IpoEvent,
  StockSplitEvent,
} from "../types/calendar.js";

/** 캘린더 엔드포인트 (실적/배당/IPO/분할). */
export class CalendarResource {
  constructor(private readonly http: HttpClient) {}

  /** 실적 발표 일정. */
  getEarningsCalendar(query: DateRangeQuery = {}): Promise<EarningsEvent[]> {
    return this.http.get<EarningsEvent[]>("earnings-calendar", {
      from: query.from,
      to: query.to,
    });
  }

  /** 배당 일정. */
  getDividendsCalendar(query: DateRangeQuery = {}): Promise<DividendEvent[]> {
    return this.http.get<DividendEvent[]>("dividends-calendar", {
      from: query.from,
      to: query.to,
    });
  }

  /** IPO 일정. */
  getIPOCalendar(query: DateRangeQuery = {}): Promise<IpoEvent[]> {
    return this.http.get<IpoEvent[]>("ipos-calendar", {
      from: query.from,
      to: query.to,
    });
  }

  /** 주식 분할 일정. */
  getStockSplitsCalendar(query: DateRangeQuery = {}): Promise<StockSplitEvent[]> {
    return this.http.get<StockSplitEvent[]>("splits-calendar", {
      from: query.from,
      to: query.to,
    });
  }
}
