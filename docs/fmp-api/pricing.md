# FMP API Pricing — 플랜별 기능 비교

> **출처**: Financial Modeling Prep 공식 Pricing 페이지 (scraped HTML 기반 파싱)
> **플랜 순서**: Basic (무료) → Starter ($29/mo) → Premium ($69/mo) → Ultimate ($139/mo)

## 플랜 개요

|                 | Basic            | Starter     | Premium      | Ultimate               |
| :-------------- | :--------------- | :---------- | :----------- | :--------------------- |
| **가격**        | 무료             | $29/mo      | $69/mo       | $139/mo                |
| **API 호출**    | 250/일           | 300/분      | 750/분       | 3,000/분               |
| **데이터 시점** | 일봉(End of Day) | 실시간      | 실시간       | 실시간                 |
| **이력 범위**   | 5년              | 5년         | 30+년        | 30+년                  |
| **커버리지**    | 미국 주요 종목   | 미국 거래소 | US/UK/캐나다 | 전 세계                |
| **지원**        | 이메일           | 이메일      | 우선 이메일  | 우선 이메일 + 라이브챗 |

### 범례

| 기호            | 의미                                    |
| :-------------- | :-------------------------------------- |
| ✓               | 완전 접근                               |
| ✓ (글로벌)      | 전 세계 심볼 접근                       |
| ✓✓✓✓            | 해당 카테고리 완전 커버리지             |
| 제한적          | 부분 접근 (하위 기능별 제한 있음)       |
| US만            | 미국 거래소 심볼만                      |
| US/UK/CA        | 미국·영국·캐나다 거래소만               |
| 87종목(US 샘플) | AAPL, TSLA, AMZN 등 87개 주요 US 종목만 |
| 불가 (p=0)      | page=0 강제, 사실상 데이터 없음         |
| -               | 미지원                                  |

## Company and Reference Data

|                                   | Basic                           | Starter         | Premium    | Ultimate   |
| :-------------------------------- | :------------------------------ | :-------------- | :--------- | :--------- |
| **Company Information**           | 제한적                          | 제한적          | 제한적     | ✓✓✓✓       |
| Company Profile Data              | ✓ (글로벌)                      | ✓ (글로벌)      | ✓ (글로벌) | ✓ (글로벌) |
| Company Profile by CIK            | ✓                               | ✓               | ✓          | ✓          |
| Company Notes                     | ✓                               | ✓               | ✓          | ✓          |
| Stock Peer Comparison             | ✓ (글로벌)                      | ✓ (글로벌)      | ✓ (글로벌) | ✓ (글로벌) |
| Delisted Companies                | 불가 (p=0)                      | 불가 (p=0)      | ✓ (글로벌) | ✓ (글로벌) |
| Company Employee Count            | 최대 5건/호출 + 87종목(US 샘플) | ✓               | ✓          | ✓          |
| Company Historical Employee Count | 최대 5건/호출 + 87종목(US 샘플) | ✓               | ✓          | ✓          |
| Company Market Cap                | 87종목(US 샘플)                 | US만            | US/UK/CA   | ✓ (글로벌) |
| Batch Market Cap                  | 87종목(US 샘플)                 | US만            | US/UK/CA   | ✓ (글로벌) |
| Historical Market Cap             | ≤1개월 이력 + 87종목(US 샘플)   | US만            | US/UK/CA   | ✓ (글로벌) |
| Company Share Float & Liquidity   | 87종목(US 샘플)                 | US만            | US/UK/CA   | ✓ (글로벌) |
| All Shares Float                  | 87종목(US 샘플)                 | US만            | US/UK/CA   | ✓ (글로벌) |
| Latest Mergers & Acquisitions     | 불가 (p=0) + 최대 5건/호출      | ✓               | ✓          | ✓          |
| Search Mergers & Acquisitions     | -                               | -               | ✓          | ✓          |
| Company Executives                | 87종목(US 샘플)                 | US만            | US/UK/CA   | ✓ (글로벌) |
| Executive Compensation            | 87종목(US 샘플)                 | 87종목(US 샘플) | ✓          | ✓          |
| Executive Compensation Benchmark  | -                               | -               | ✓          | ✓          |

|                                  | Basic | Starter    | Premium    | Ultimate   |
| :------------------------------- | :---- | :--------- | :--------- | :--------- |
| **Stock Directory**              | -     | 제한적     | 제한적     | ✓✓✓✓       |
| Company Symbols List             | -     | US만       | US/UK/CA   | ✓ (글로벌) |
| Financial Statement Symbols List | -     | US만       | US/UK/CA   | ✓ (글로벌) |
| CIK List                         | -     | ✓          | ✓          | ✓          |
| Symbol Changes List              | -     | ✓          | ✓          | ✓          |
| ETF Symbol Search                | -     | US만       | US/UK/CA   | ✓ (글로벌) |
| Actively Trading List            | -     | US만       | US/UK/CA   | ✓ (글로벌) |
| Earnings Transcript List         | -     | -          | -          | ✓          |
| Available Exchanges              | -     | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) |
| Available Sectors                | -     | ✓          | ✓          | ✓          |
| Available Industries             | -     | ✓          | ✓          | ✓          |
| Available Countries              | -     | ✓          | ✓          | ✓          |

|                     | Basic      | Starter     | Premium         | Ultimate   |
| :------------------ | :--------- | :---------- | :-------------- | :--------- |
| **Company Search**  | 제한적     | 제한적      | 제한적          | ✓✓✓✓       |
| Stock Symbol Search | ✓ (글로벌) | ✓ (글로벌)  | ✓ (글로벌)      | ✓ (글로벌) |
| Company Name Search | ✓ (글로벌) | ✓ (글로벌)  | ✓ (글로벌)      | ✓ (글로벌) |
| CIK                 | ✓          | ✓           | ✓               | ✓          |
| CUSIP               | -          | ✓ (글로벌)  | ✓ (글로벌)      | ✓ (글로벌) |
| ISIN                | -          | ✓ (글로벌)  | ✓ (글로벌)      | ✓ (글로벌) |
| Stock Screener      | -          | US 거래소만 | US/UK/CA 거래소 | ✓ (글로벌) |
| Exchange Variants   | -          | ✓ (글로벌)  | ✓ (글로벌)      | ✓ (글로벌) |

## Fundamental Data

|                                  | Basic                                            | Starter              | Premium  | Ultimate   |
| :------------------------------- | :----------------------------------------------- | :------------------- | :------- | :--------- |
| **Financial Statements**         | 제한적                                           | 제한적               | 제한적   | ✓✓✓✓       |
| Income Statement                 | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Balance Sheet Statement          | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Cash Flow Statement              | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Latest Financial Statements      | -                                                | -                    | -        | ✓ (글로벌) |
| Income Statements TTM            | -                                                | -                    | -        | ✓ (글로벌) |
| Balance Sheet Statements TTM     | -                                                | -                    | -        | ✓ (글로벌) |
| Cashflow Statements TTM          | -                                                | -                    | -        | ✓ (글로벌) |
| Key Metrics                      | 최대 5건/호출 + 연간 보고서만 + 87종목(US 샘플)  | 연간 보고서만 + US만 | US/UK/CA | ✓ (글로벌) |
| Financial Ratios                 | 최대 5건/호출 + 연간 보고서만 + 87종목(US 샘플)  | 연간 보고서만 + US만 | US/UK/CA | ✓ (글로벌) |
| Key Metrics TTM                  | 87종목(US 샘플)                                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Financial Ratios TTM             | 87종목(US 샘플)                                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Financial Scores                 | 87종목(US 샘플)                                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Owner Earnings                   | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Enterprise Values                | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Income Statement Growth          | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Balance Sheet Statement Growth   | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Cashflow Statement Growth        | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Financial Statement Growth       | 최대 5건/호출 + 87종목(US 샘플)                  | US만                 | US/UK/CA | ✓ (글로벌) |
| Financial Reports Dates          | ✓                                                | ✓                    | ✓        | ✓          |
| Financial Reports Form 10-K JSON | 최대 1건/호출 + 87종목(US 샘플)                  | ✓                    | ✓        | ✓          |
| Financial Reports Form 10-K XLSX | 최대 1건/호출 + 87종목(US 샘플)                  | ✓                    | ✓        | ✓          |
| Revenue Product Segmentation     | 최대 10건/호출 + 연간 보고서만 + 87종목(US 샘플) | 연간 보고서만        | ✓        | ✓          |
| Revenue Geographic Segments      | 최대 10건/호출 + 연간 보고서만 + 87종목(US 샘플) | 연간 보고서만        | ✓        | ✓          |
| As Reported Income Statements    | 최대 5건/호출 + 연간 보고서만 + 87종목(US 샘플)  | ✓                    | ✓        | ✓          |
| As Reported Balance Statements   | 최대 5건/호출 + 연간 보고서만 + 87종목(US 샘플)  | ✓                    | ✓        | ✓          |
| As Reported Cashflow Statements  | 최대 5건/호출 + 연간 보고서만 + 87종목(US 샘플)  | ✓                    | ✓        | ✓          |
| As Reported Financial Statements | 최대 5건/호출 + 연간 보고서만 + 87종목(US 샘플)  | ✓                    | ✓        | ✓          |

|                          | Basic           | Starter | Premium  | Ultimate   |
| :----------------------- | :-------------- | :------ | :------- | :--------- |
| **Discounted Cash Flow** | 제한적          | 제한적  | 제한적   | ✓✓✓✓       |
| DCF Valuation            | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Levered DCF              | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Custom DCF Advanced      | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Custom DCF Levered       | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |

|                                      | Basic                                     | Starter | Premium | Ultimate |
| :----------------------------------- | :---------------------------------------- | :------ | :------ | :------- |
| **SEC Filings**                      | 제한적                                    | ✓✓✓✓    | ✓✓✓✓    | ✓✓✓✓     |
| Latest 8-K SEC Filings               | 불가 (p=0) + 최대 20건/호출 + ≤1개월 이력 | ✓       | ✓       | ✓        |
| Latest SEC Filings                   | 불가 (p=0) + 최대 20건/호출 + ≤1개월 이력 | ✓       | ✓       | ✓        |
| SEC Filings By Form Type             | 불가 (p=0) + 최대 20건/호출 + ≤1개월 이력 | ✓       | ✓       | ✓        |
| SEC Filings By Symbol                | p≤1 제한 + 최대 20건/호출 + ≤1년 이력     | ✓       | ✓       | ✓        |
| SEC Filings By CIK                   | 불가 (p=0) + 최대 20건/호출 + ≤1년 이력   | ✓       | ✓       | ✓        |
| SEC Filings By Name                  | ✓                                         | ✓       | ✓       | ✓        |
| SEC Filings Company Search By Symbol | ✓                                         | ✓       | ✓       | ✓        |
| SEC Filings Company Search By CIK    | ✓                                         | ✓       | ✓       | ✓        |
| SEC Company Full Profile             | ✓                                         | ✓       | ✓       | ✓        |
| Industry Classification List         | ✓                                         | ✓       | ✓       | ✓        |
| Industry Classification Search       | -                                         | ✓       | ✓       | ✓        |
| All Industry Classification          | -                                         | ✓       | ✓       | ✓        |

|                               | Basic | Starter | Premium | Ultimate |
| :---------------------------- | :---- | :------ | :------ | :------- |
| **Fundraisers**               | ✓✓✓✓  | ✓✓✓✓    | ✓✓✓✓    | ✓✓✓✓     |
| Latest Crowdfunding Campaigns | ✓     | ✓       | ✓       | ✓        |
| Crowdfunding Campaign Search  | ✓     | ✓       | ✓       | ✓        |
| Crowdfunding By CIK           | ✓     | ✓       | ✓       | ✓        |
| Equity Offering Updates       | ✓     | ✓       | ✓       | ✓        |
| Equity Offering Search        | ✓     | ✓       | ✓       | ✓        |
| Equity Offering By CIK        | ✓     | ✓       | ✓       | ✓        |

## Market Data

|                            | Basic            | Starter | Premium  | Ultimate   |
| :------------------------- | :--------------- | :------ | :------- | :--------- |
| **Quote**                  | 제한적           | 제한적  | 제한적   | ✓✓✓✓       |
| Stock Quote                | 87종목(US 샘플)  | US만    | US/UK/CA | ✓ (글로벌) |
| Stock Quote Short          | 207종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Aftermarket Trade          | 87종목(US 샘플)  | US만    | US/UK/CA | ✓          |
| Aftermarket Quote          | 87종목(US 샘플)  | US만    | US/UK/CA | ✓          |
| Stock Price Change         | 207종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Stock Batch Quote          | -                | -       | US/UK/CA | ✓ (글로벌) |
| Stock Batch Quote Short    | -                | -       | US/UK/CA | ✓ (글로벌) |
| Batch Aftermarket Trade    | -                | -       | US/UK/CA | ✓          |
| Batch Aftermarket Quote    | -                | -       | US/UK/CA | ✓          |
| Exchange Stock Quotes      | -                | -       | -        | ✓ (글로벌) |
| Mutual Fund Price Quotes   | -                | -       | -        | ✓          |
| ETF Price Quotes           | -                | -       | -        | ✓ (글로벌) |
| Full Commodities Quotes    | -                | -       | -        | ✓          |
| Full Cryptocurrency Quotes | -                | -       | -        | ✓          |
| Full Forex Quote           | -                | -       | -        | ✓          |
| Full Index Quotes          | -                | -       | -        | ✓          |

|                                      | Basic                     | Starter                 | Premium                     | Ultimate   |
| :----------------------------------- | :------------------------ | :---------------------- | :-------------------------- | :--------- |
| **Market Performance**               | 제한적                    | 제한적                  | 제한적                      | ✓✓✓✓       |
| Market Sector Performance Snapshot   | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Industry Performance Snapshot        | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Historical Market Sector Performance | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Historical Industry Performance      | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Sector PE Snapshot                   | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Industry PE Snapshot                 | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Historical Sector PE                 | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Historical Industry PE               | ≤1개월 범위 + US 거래소만 | ≤1년 범위 + US 거래소만 | ≤1년 범위 + US/UK/CA 거래소 | ✓ (글로벌) |
| Biggest Stock Gainers                | ✓                         | ✓                       | ✓                           | ✓          |
| Biggest Stock Losers                 | ✓                         | ✓                       | ✓                           | ✓          |
| Top Traded Stocks                    | ✓                         | ✓                       | ✓                           | ✓          |

|                              | Basic      | Starter    | Premium    | Ultimate   |
| :--------------------------- | :--------- | :--------- | :--------- | :--------- |
| **Market Hours**             | ✓✓✓✓       | ✓✓✓✓       | ✓✓✓✓       | ✓✓✓✓       |
| Global Exchange Market Hours | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) |
| Holidays By Exchange         | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) |
| All Exchange Market Hours    | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) |

|                               | Basic           | Starter | Premium  | Ultimate   |
| :---------------------------- | :-------------- | :------ | :------- | :--------- |
| **Charts**                    | 제한적          | 제한적  | 제한적   | ✓✓✓✓       |
| Stock Chart Light             | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Stock Price and Volume Data   | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Unadjusted Stock Price        | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| Dividend Adjusted Price Chart | 87종목(US 샘플) | US만    | US/UK/CA | ✓ (글로벌) |
| 1 Min Interval Stock Chart    | -               | -       | US/UK/CA | ✓ (글로벌) |
| 5 Min Interval Stock Chart    | -               | US만    | US/UK/CA | ✓ (글로벌) |
| 15 Min Interval Stock Chart   | -               | US만    | US/UK/CA | ✓ (글로벌) |
| 30 Min Interval Stock Chart   | -               | US만    | US/UK/CA | ✓ (글로벌) |
| 1 Hour Interval Stock Chart   | -               | US만    | US/UK/CA | ✓ (글로벌) |
| 4 Hour Interval Stock Chart   | -               | US만    | US/UK/CA | ✓ (글로벌) |

## Market News and Calendar

|                       | Basic  | Starter   | Premium    | Ultimate   |
| :-------------------- | :----- | :-------- | :--------- | :--------- |
| **News**              | 제한적 | 제한적    | 제한적     | ✓✓✓✓       |
| FMP Articles          | ✓      | ✓         | ✓          | ✓          |
| General News          | -      | ≤1년 이력 | ✓ (글로벌) | ✓ (글로벌) |
| Press Releases        | -      | -         | ≤1년 이력  | ✓          |
| Stock News            | -      | ≤1년 이력 | ✓          | ✓          |
| Crypto News           | -      | ≤1년 이력 | ✓          | ✓          |
| Forex News            | -      | ≤1년 이력 | ✓          | ✓          |
| Search Press Releases | -      | -         | ≤1년 이력  | ✓          |
| Search Stock News     | -      | ≤1년 이력 | ✓          | ✓          |
| Search Crypto News    | -      | ≤1년 이력 | ✓          | ✓          |
| Search Forex News     | -      | ≤1년 이력 | ✓          | ✓          |

|                         | Basic                                            | Starter                               | Premium    | Ultimate   |
| :---------------------- | :----------------------------------------------- | :------------------------------------ | :--------- | :--------- |
| **Analyst**             | 제한적                                           | 제한적                                | 제한적     | ✓✓✓✓       |
| Financial Estimates     | 최대 10건/호출 + 연간 보고서만 + 87종목(US 샘플) | 최대 10건/호출 + 연간 보고서만 + US만 | US/UK/CA   | ✓ (글로벌) |
| Ratings Snapshot        | 87종목(US 샘플)                                  | ✓ (글로벌)                            | ✓ (글로벌) | ✓ (글로벌) |
| Historical Ratings      | 최대 1건/호출 + 87종목(US 샘플)                  | ✓ (글로벌)                            | ✓ (글로벌) | ✓ (글로벌) |
| Price Target Summary    | 87종목(US 샘플)                                  | US만                                  | US/UK/CA   | ✓          |
| Price Target Consensus  | 87종목(US 샘플)                                  | US만                                  | US/UK/CA   | ✓          |
| Stock Grades            | 87종목(US 샘플)                                  | US만                                  | US/UK/CA   | ✓ (글로벌) |
| Historical Stock Grades | 최대 10건/호출 + 87종목(US 샘플)                 | US만                                  | US/UK/CA   | ✓ (글로벌) |
| Stock Grades Summary    | 87종목(US 샘플)                                  | US만                                  | US/UK/CA   | ✓ (글로벌) |

|                                 | Basic                           | Starter          | Premium              | Ultimate   |
| :------------------------------ | :------------------------------ | :--------------- | :------------------- | :--------- |
| **Earnings, Dividends, Splits** | 제한적                          | 제한적           | 제한적               | ✓✓✓✓       |
| Dividends Company               | 최대 5건/호출 + 87종목(US 샘플) | US만             | US/UK/CA             | ✓ (글로벌) |
| Dividends Calendar              | ≤1개월 이력 + 87종목(US 샘플)   | ≤1년 이력 + US만 | ≤5년 이력 + US/UK/CA | ✓ (글로벌) |
| Earnings Report                 | 최대 5건/호출 + 87종목(US 샘플) | US만             | US/UK/CA             | ✓ (글로벌) |
| Earnings Calendar               | ≤1개월 이력 + 87종목(US 샘플)   | ≤1년 이력 + US만 | ≤5년 이력 + US/UK/CA | ✓ (글로벌) |
| IPOs Calendar                   | -                               | ✓ (글로벌)       | ✓ (글로벌)           | ✓ (글로벌) |
| IPOs Disclosure                 | -                               | ✓                | ✓                    | ✓          |
| IPOs Prospectus                 | -                               | ✓                | ✓                    | ✓          |
| Stock Split Details             | 최대 5건/호출 + 87종목(US 샘플) | US만             | US/UK/CA             | ✓ (글로벌) |
| Stock Splits Calendar           | ≤1개월 이력 + 87종목(US 샘플)   | ≤1년 이력 + US만 | ≤5년 이력 + US/UK/CA | ✓ (글로벌) |

## Earnings Call Transcripts

|                              | Basic | Starter | Premium | Ultimate   |
| :--------------------------- | :---- | :------ | :------ | :--------- |
| **Earnings Transcript**      | -     | -       | -       | ✓✓✓✓       |
| Latest Earning Transcripts   | -     | -       | -       | ✓ (글로벌) |
| Earnings Transcript          | -     | -       | -       | ✓ (글로벌) |
| Transcripts Dates By Symbol  | -     | -       | -       | ✓ (글로벌) |
| Available Transcript Symbols | -     | -       | -       | ✓ (글로벌) |

## Ownership

|                                          | Basic | Starter | Premium | Ultimate |
| :--------------------------------------- | :---- | :------ | :------ | :------- |
| **Form 13F**                             | -     | -       | -       | ✓✓✓✓     |
| Institutional Ownership Filings          | -     | -       | -       | ✓        |
| Filings Extract                          | -     | -       | -       | ✓        |
| Form 13F Filings Dates                   | -     | -       | -       | ✓        |
| Filings Extract With Analytics By Holder | -     | -       | -       | ✓        |
| Holder Performance Summary               | -     | -       | -       | ✓        |
| Holders Industry Breakdown               | -     | -       | -       | ✓        |
| Positions Summary                        | -     | -       | -       | ✓        |
| Industry Performance Summary             | -     | -       | -       | ✓        |

|                                     | Basic                       | Starter | Premium | Ultimate |
| :---------------------------------- | :-------------------------- | :------ | :------ | :------- |
| **Senate**                          | 제한적                      | ✓✓✓✓    | ✓✓✓✓    | ✓✓✓✓     |
| Latest Senate Financial Disclosures | 불가 (p=0) + 최대 25건/호출 | ✓       | ✓       | ✓        |
| Latest House Financial Disclosures  | 불가 (p=0) + 최대 25건/호출 | ✓       | ✓       | ✓        |
| Senate Trading Activity             | -                           | ✓       | ✓       | ✓        |
| Senate Trades By Name               | -                           | ✓       | ✓       | ✓        |
| U.S. House Trades                   | -                           | ✓       | ✓       | ✓        |
| House Trades By Name                | -                           | ✓       | ✓       | ✓        |

|                                         | Basic                        | Starter | Premium | Ultimate |
| :-------------------------------------- | :--------------------------- | :------ | :------ | :------- |
| **Insider Trades**                      | 제한적                       | ✓✓✓✓    | ✓✓✓✓    | ✓✓✓✓     |
| Latest Insider Trading                  | 불가 (p=0) + 최대 100건/호출 | ✓       | ✓       | ✓        |
| Search Insider Trades                   | -                            | ✓       | ✓       | ✓        |
| Search Insider Trades by Reporting Name | -                            | ✓       | ✓       | ✓        |
| All Insider Transaction Types           | ✓                            | ✓       | ✓       | ✓        |
| Insider Trade Statistics                | -                            | ✓       | ✓       | ✓        |
| Acquisition Ownership                   | -                            | ✓       | ✓       | ✓        |

## ETF and Mutual Funds

|                                          | Basic | Starter    | Premium    | Ultimate   |
| :--------------------------------------- | :---- | :--------- | :--------- | :--------- |
| **ETF & Mutual Funds**                   | -     | 제한적     | 제한적     | ✓✓✓✓       |
| ETF & Fund Holdings                      | -     | -          | -          | ✓ (글로벌) |
| ETF & Mutual Fund Information            | -     | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) |
| ETF & Fund Country Allocation            | -     | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) |
| ETF Asset Exposure                       | -     | -          | -          | ✓ (글로벌) |
| ETF Sector Weighting                     | -     | ✓ (글로벌) | ✓ (글로벌) | ✓ (글로벌) |
| Mutual Fund & ETF Disclosure             | -     | -          | -          | ✓          |
| Mutual Fund Disclosures                  | -     | -          | -          | ✓          |
| Mutual Fund & ETF Disclosure Name Search | -     | -          | -          | ✓          |
| Fund & ETF Disclosures by Date           | -     | -          | -          | ✓          |

## Advanced Data

|                           | Basic | Starter | Premium | Ultimate |
| :------------------------ | :---- | :------ | :------ | :------- |
| **Commitment Of Traders** | -     | -       | ✓✓✓✓    | ✓✓✓✓     |
| COT Report                | -     | -       | ✓       | ✓        |
| COT Analysis By Dates     | -     | -       | ✓       | ✓        |
| COT Report List           | -     | -       | ✓       | ✓        |

|                                 | Basic  | Starter               | Premium | Ultimate |
| :------------------------------ | :----- | :-------------------- | :------ | :------- |
| **Economics**                   | 제한적 | 제한적                | ✓✓✓✓    | ✓✓✓✓     |
| Treasury Rates                  | ✓      | ✓                     | ✓       | ✓        |
| Economics Indicators            | ✓      | ✓                     | ✓       | ✓        |
| Economic Data Releases Calendar | -      | ≤1년 범위 + ≤1년 이력 | ✓       | ✓        |
| Market Risk Premium             | ✓      | ✓                     | ✓       | ✓        |

|                          | Basic | Starter | Premium | Ultimate |
| :----------------------- | :---- | :------ | :------ | :------- |
| **ESG**                  | -     | -       | -       | ✓✓✓✓     |
| ESG Investment Search    | -     | -       | -       | ✓        |
| ESG Ratings              | -     | -       | -       | ✓        |
| ESG Benchmark Comparison | -     | -       | -       | ✓        |

|                                   | Basic | Starter                   | Premium  | Ultimate   |
| :-------------------------------- | :---- | :------------------------ | :------- | :--------- |
| **Technical Indicators**          | -     | 제한적                    | 제한적   | ✓✓✓✓       |
| Simple Moving Average             | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Exponential Moving Average        | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Weighted Moving Average           | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Double Exponential Moving Average | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Triple Exponential Moving Average | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Relative Strength Index           | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Standard Deviation                | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Williams                          | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |
| Average Directional Index         | -     | 5m/15m/30m/1h/4h만 + US만 | US/UK/CA | ✓ (글로벌) |

## Other Markets and Assets

|                               | Basic           | Starter         | Premium         | Ultimate |
| :---------------------------- | :-------------- | :-------------- | :-------------- | :------- |
| **Indexes**                   | 제한적          | 제한적          | 제한적          | ✓✓✓✓     |
| Stock Market Indexes List     | ✓               | ✓               | ✓               | ✓        |
| Index Quote                   | 9개 주요 지수만 | 9개 주요 지수만 | 9개 주요 지수만 | ✓        |
| Index Short Quote             | 9개 주요 지수만 | 9개 주요 지수만 | 9개 주요 지수만 | ✓        |
| All Index Quotes              | -               | -               | -               | ✓        |
| Historical Index Light Chart  | 9개 주요 지수만 | 9개 주요 지수만 | 9개 주요 지수만 | ✓        |
| Historical Index Full Chart   | 9개 주요 지수만 | 9개 주요 지수만 | 9개 주요 지수만 | ✓        |
| 1-Minute Interval Index Price | -               | -               | 9개 주요 지수만 | ✓        |
| 5-Minute Interval Index Price | -               | 9개 주요 지수만 | 9개 주요 지수만 | ✓        |
| 1-Hour Interval Index Price   | -               | 9개 주요 지수만 | 9개 주요 지수만 | ✓        |
| S&P 500 Index                 | -               | -               | ✓               | ✓        |
| Nasdaq Index                  | -               | -               | ✓               | ✓        |
| Dow Jones                     | -               | -               | ✓               | ✓        |
| Historical S&P 500            | -               | -               | ✓               | ✓        |
| Historical Nasdaq             | -               | -               | ✓               | ✓        |
| Historical Dow Jones          | -               | -               | ✓               | ✓        |

|                                     | Basic        | Starter      | Premium      | Ultimate |
| :---------------------------------- | :----------- | :----------- | :----------- | :------- |
| **Commodity**                       | 제한적       | 제한적       | 제한적       | ✓✓✓✓     |
| Commodities List                    | ✓            | ✓            | ✓            | ✓        |
| Commodities Quote                   | 4개 원자재만 | 4개 원자재만 | 4개 원자재만 | ✓        |
| Commodities Quote Short             | 4개 원자재만 | 4개 원자재만 | 4개 원자재만 | ✓        |
| All Commodities Quotes              | -            | -            | -            | ✓        |
| Light Chart                         | 4개 원자재만 | 4개 원자재만 | 4개 원자재만 | ✓        |
| Full Chart                          | 4개 원자재만 | 4개 원자재만 | 4개 원자재만 | ✓        |
| 1-Minute Interval Commodities Chart | -            | -            | 4개 원자재만 | ✓        |
| 5-Minute Interval Commodities Chart | -            | 4개 원자재만 | 4개 원자재만 | ✓        |
| 1-Hour Interval Commodities Chart   | -            | 4개 원자재만 | 4개 원자재만 | ✓        |

|                                       | Basic           | Starter | Premium | Ultimate |
| :------------------------------------ | :-------------- | :------ | :------ | :------- |
| **Crypto**                            | 제한적          | 제한적  | 제한적  | ✓✓✓✓     |
| Cryptocurrency List                   | ✓               | ✓       | ✓       | ✓        |
| Full Cryptocurrency Quote             | 97개 암호화폐만 | ✓       | ✓       | ✓        |
| Cryptocurrency Quote Short            | 97개 암호화폐만 | ✓       | ✓       | ✓        |
| All Cryptocurrencies Quotes           | -               | -       | -       | ✓        |
| Historical Cryptocurrency Light Chart | 97개 암호화폐만 | ✓       | ✓       | ✓        |
| Historical Cryptocurrency Full Chart  | 97개 암호화폐만 | ✓       | ✓       | ✓        |
| 1-Minute Interval Cryptocurrency Data | -               | -       | ✓       | ✓        |
| 5-Minute Interval Cryptocurrency Data | -               | ✓       | ✓       | ✓        |
| 1-Hour Interval Cryptocurrency Data   | -               | ✓       | ✓       | ✓        |

|                               | Basic         | Starter | Premium | Ultimate |
| :---------------------------- | :------------ | :------ | :------ | :------- |
| **Forex**                     | 제한적        | 제한적  | 제한적  | ✓✓✓✓     |
| Forex Currency Pairs          | ✓             | ✓       | ✓       | ✓        |
| Forex Quote                   | 10개 외환쌍만 | ✓       | ✓       | ✓        |
| Forex Short Quote             | 10개 외환쌍만 | ✓       | ✓       | ✓        |
| Batch Forex Quotes            | -             | -       | -       | ✓        |
| Historical Forex Light Chart  | 10개 외환쌍만 | ✓       | ✓       | ✓        |
| Historical Forex Full Chart   | 10개 외환쌍만 | ✓       | ✓       | ✓        |
| 1-Minute Interval Forex Chart | -             | -       | ✓       | ✓        |
| 5-Minute Interval Forex Chart | -             | ✓       | ✓       | ✓        |
| 1-Hour Interval Forex Chart   | -             | ✓       | ✓       | ✓        |

## Bulk & Batch Delivery

|                                     | Basic | Starter | Premium | Ultimate   |
| :---------------------------------- | :---- | :------ | :------ | :--------- |
| **Bulk**                            | -     | -       | -       | ✓✓✓✓       |
| Company Profile Bulk                | -     | -       | -       | ✓ (글로벌) |
| Stock Rating Bulk                   | -     | -       | -       | ✓ (글로벌) |
| DCF Valuations Bulk                 | -     | -       | -       | ✓ (글로벌) |
| Financial Scores Bulk               | -     | -       | -       | ✓ (글로벌) |
| Price Target Summary Bulk           | -     | -       | -       | ✓          |
| ETF Holder Bulk                     | -     | -       | -       | ✓ (글로벌) |
| Upgrades Downgrades Consensus Bulk  | -     | -       | -       | ✓ (글로벌) |
| Key Metrics TTM Bulk                | -     | -       | -       | ✓ (글로벌) |
| Ratios TTM Bulk                     | -     | -       | -       | ✓ (글로벌) |
| Stock Peers Bulk                    | -     | -       | -       | ✓ (글로벌) |
| Earnings Surprises Bulk             | -     | -       | -       | ✓ (글로벌) |
| Income Statement Bulk               | -     | -       | -       | ✓ (글로벌) |
| Income Statement Growth Bulk        | -     | -       | -       | ✓ (글로벌) |
| Balance Sheet Statement Bulk        | -     | -       | -       | ✓ (글로벌) |
| Balance Sheet Statement Growth Bulk | -     | -       | -       | ✓ (글로벌) |
| Cash Flow Statement Bulk            | -     | -       | -       | ✓ (글로벌) |
| Cash Flow Statement Growth Bulk     | -     | -       | -       | ✓ (글로벌) |
| Eod Bulk                            | -     | -       | -       | ✓ (글로벌) |
