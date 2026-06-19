import type { HttpClient } from "../http.js";
import type { CompanyProfile } from "../types/company.js";

/** 기업 정보 엔드포인트 (`/profile`). */
export class CompanyResource {
  constructor(private readonly http: HttpClient) {}

  /** 단일 종목의 기업 프로필. 결과가 없으면 `undefined`. */
  async getProfile(symbol: string): Promise<CompanyProfile | undefined> {
    const data = await this.http.get<CompanyProfile[]>("profile", { symbol });
    return data[0];
  }
}
