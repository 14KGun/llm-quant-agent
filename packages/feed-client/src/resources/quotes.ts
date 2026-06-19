import type { HttpClient } from "../http.js";
import type {
  HistoricalPrice,
  HistoricalPriceQuery,
  Quote,
  QuoteShort,
} from "../types/quote.js";

/** 시세 관련 엔드포인트 (`/quote`, `/quote-short`, `/batch-quote`, `/historical-price-eod/full`). */
export class QuotesResource {
  constructor(private readonly http: HttpClient) {}

  /** 단일 종목의 전체 실시간 시세. 결과가 없으면 `undefined`. */
  async getQuote(symbol: string): Promise<Quote | undefined> {
    const data = await this.http.get<Quote[]>("quote", { symbol });
    return data[0];
  }

  /** 단일 종목의 경량 시세. 결과가 없으면 `undefined`. */
  async getQuoteShort(symbol: string): Promise<QuoteShort | undefined> {
    const data = await this.http.get<QuoteShort[]>("quote-short", { symbol });
    return data[0];
  }

  /** 다중 종목의 전체 시세를 한 번에 조회. */
  getBatchQuotes(symbols: string[]): Promise<Quote[]> {
    return this.http.get<Quote[]>("batch-quote", { symbols });
  }

  /** 일봉(EOD) 히스토리 (OHLCV). */
  getHistoricalPrice(
    symbol: string,
    query: HistoricalPriceQuery = {},
  ): Promise<HistoricalPrice[]> {
    return this.http.get<HistoricalPrice[]>("historical-price-eod/full", {
      symbol,
      from: query.from,
      to: query.to,
    });
  }
}
