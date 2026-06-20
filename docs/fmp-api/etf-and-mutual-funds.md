# ETF & Mutual Funds

## ETF & Fund Holdings API

Get a detailed breakdown of the assets held within ETFs and mutual funds using the FMP ETF & Fund Holdings API. Access real-time data on the specific securities and their weights in the portfolio, providing insights into asset composition and fund strategies.

About ETF & Fund Holdings API :

The FMP ETF & Fund Holdings API offers comprehensive information about the underlying assets that make up ETFs and mutual funds. This API is crucial for investors and analysts who need:

- Detailed Portfolio Insights: Gain visibility into the specific assets held within an ETF or mutual fund, including information such as asset names, symbols, ISINs, market values, and weight percentages. This helps investors understand a fund's exposure to particular stocks, sectors, or markets.
- Real-Time Updates: Stay informed with up-to-date information on fund holdings. The API provides real-time updates, ensuring that you always have access to the most current data on fund compositions.
- Investment Strategy Analysis: Use the holdings data to evaluate the investment strategy of different ETFs and mutual funds. By analyzing the securities and their respective weightings, you can make informed decisions about potential risks and opportunities.

Example: An investor interested in the SPY ETF can use this API to view Apple Inc.'s (AAPL) share count, market value, and its percentage weight in the fund, helping to assess the exposure to the tech sector.

Endpoint:

```plain
https://financialmodelingprep.com/stable/etf/holdings?symbol=SPY&apikey=
```

ETF & Fund Holdings API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | SPY     |

Response :

```json
[
  {
    "symbol": "SPY",
    "asset": "NVDA",
    "name": "NVIDIA CORP",
    "isin": "US67066G1040",
    "securityCusip": "67066G104",
    "sharesNumber": 294624332,
    "weightPercentage": 8.16350993,
    "marketValue": 64429253531,
    "updatedAt": "2026-06-06 05:06:19"
  }
]
```

## ETF & Mutual Fund Information API

Access comprehensive data on ETFs and mutual funds with the FMP ETF & Mutual Fund Information API. Retrieve essential details such as ticker symbol, fund name, expense ratio, assets under management, and more.

About ETF & Mutual Fund Information API :

The FMP ETF & Mutual Fund Information API offers a detailed look into the financial and structural information of ETFs and mutual funds. This API enables investors to:

- Compare Funds: Evaluate different ETFs and mutual funds by reviewing key metrics like ticker symbol, name, expense ratio, and assets under management to choose the most cost-effective and suitable investment options.
- Identify Investment Opportunities: Use the detailed data to discover ETFs and mutual funds that align with your specific investment strategy, risk tolerance, and financial goals.
- Understand Investment Objectives: Learn more about the objectives and strategies of various ETFs and mutual funds, helping you assess their suitability for inclusion in your portfolio based on asset class, sector exposure, and expense ratios.

Example: An investor can use this API to compare the expense ratios of various ETFs and mutual funds, find funds with large assets under management, or analyze sector weightings to ensure their investments align with their market outlook.

Endpoint:

```plain
https://financialmodelingprep.com/stable/etf/info?symbol=SPY&apikey=
```

ETF & Mutual Fund Information API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | SPY     |

Response :

```json
[
  {
    "symbol": "SPY",
    "name": "State Street SPDR S&P 500 ETF Trust",
    "description": "The State Street SPDR S&P 500 ETF Trust seeks to provide investment results that, before expenses, correspond generally to the price and yield performance of the S&P 500 Index.",
    "isin": "US78462F1030",
    "assetClass": "Equity",
    "securityCusip": "78462F103",
    "domicile": "US",
    "website": "https://www.ssga.com/us/en/institutional/etfs/state-street-spdr-sp-500-etf-trust-spy",
    "etfCompany": "SPDR",
    "expenseRatio": 0.09,
    "assetsUnderManagement": 789870290000,
    "avgVolume": 73651172,
    "inceptionDate": "1993-01-22",
    "nav": 756.92,
    "navCurrency": "USD",
    "holdingsCount": 504,
    "isActivelyTrading": true,
    "updatedAt": "2026-06-06T07:46:00.054Z",
    "sectorsList": [
      { "industry": "Basic Materials", "exposure": 1.8 },
      { "industry": "Communication Services", "exposure": 11.35 },
      { "industry": "Consumer Cyclical", "exposure": 10.25 }
    ]
  }
]
```

## ETF & Fund Country Allocation API

Gain insight into how ETFs and mutual funds distribute assets across different countries with the FMP ETF & Fund Country Allocation API. This tool provides detailed information on the percentage of assets allocated to various regions, helping you make informed investment decisions.

About ETF & Fund Country Allocation API :

The FMP ETF & Fund Country Allocation API delivers a detailed breakdown of how ETFs and mutual funds allocate their assets by country. This data is essential for investors aiming to:

- Assess Geographic Exposure: Understand how assets are distributed globally, offering insights into the geographic risk and opportunities associated with different funds.
- Identify Country-Specific Investment Opportunities: Evaluate funds with significant exposure to countries that show strong economic growth potential, like the United States, China, or emerging markets.
- Diversify Your Portfolio: Use country allocation data to balance your investments across international markets, reducing concentration risk in any single region.

Example: An investor seeking to minimize risk by diversifying internationally might use the ETF & Fund Country Allocation API to identify funds with strong exposure to emerging markets or regions like Asia or Europe.

Endpoint:

```plain
https://financialmodelingprep.com/stable/etf/country-weightings?symbol=SPY&apikey=
```

ETF & Fund Country Allocation API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | SPY     |

Response :

```json
[
  {
    "country": "United States",
    "weightPercentage": "97.82%"
  }
]
```

## ETF Asset Exposure API

Discover which ETFs hold specific stocks with the FMP ETF Asset Exposure API. Access detailed information on market value, share numbers, and weight percentages for assets within ETFs.

About ETF Asset Exposure API :

The FMP ETF Asset Exposure API provides detailed data on the exposure of individual stocks within various ETFs. This API is essential for:

- Identifying ETF Holdings: Find out which ETFs hold a particular stock, along with details such as market value, the number of shares held, and the weight percentage of the stock within the ETF.
- Analyzing Asset Exposure: Use the data to analyze the exposure of specific assets within ETFs, helping you understand how widely a stock is held and its significance within different funds.
- Informed Investment Decisions: Investors can leverage this information to assess the popularity and weight of a stock across multiple ETFs, guiding their decisions on buying or selling the stock based on its representation in the market.

Example: An investor interested in Apple Inc. (AAPL) can use the ETF Asset Exposure API to find all ETFs that hold AAPL shares. The investor can then analyze the weight of AAPL within each ETF to determine which funds are most heavily invested in the stock.

Endpoint:

```plain
https://financialmodelingprep.com/stable/etf/asset-exposure?symbol=AAPL&apikey=
```

ETF Asset Exposure API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "ZPDT.DE",
    "asset": "AAPL",
    "sharesNumber": 1170753,
    "weightPercentage": 17.56283,
    "marketValue": 316188722.3272
  }
]
```

## ETF Sector Weighting API

Access a breakdown of the percentage of an ETF's assets invested in each sector with the FMP ETF Sector Weighting API. Analyze sector allocations to align your fund selection with your investment thesis.

About ETF Sector Weighting API :

The FMP ETF Sector Allocation API provides crucial information about the distribution of an ETF's assets across different sectors. This API is particularly useful for investors who want to:

- Analyze Sector Exposure: Gain insights into how an ETF's assets are allocated across sectors, such as technology, healthcare, or consumer staples, to understand its risk profile.
- Identify Sector-Focused ETFs: Find ETFs with significant exposure to sectors that align with your investment thesis.
- Diversify Portfolios: Use sector weighting data to diversify your portfolio by selecting ETFs that provide exposure to sectors where you might be under-invested, helping to balance overall risk.

Example: An investor who already has significant exposure to technology stocks might seek out an ETF with substantial holdings in healthcare or consumer staples to diversify their investments and mitigate sector-specific risks.

Endpoint:

```plain
https://financialmodelingprep.com/stable/etf/sector-weightings?symbol=SPY&apikey=
```

ETF Sector Weighting API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | SPY     |

Response :

```json
[
  {
    "symbol": "SPY",
    "sector": "Basic Materials",
    "weightPercentage": 1.8
  }
]
```

## Mutual Fund & ETF Disclosure API

Access the latest disclosures from mutual funds and ETFs with the FMP Mutual Fund & ETF Disclosure API. This API provides updates on filings, changes in holdings, and other critical disclosure data for mutual funds and ETFs.

About Mutual Fund & ETF Disclosure API :

The FMP Mutual Fund & ETF Disclosure API delivers up-to-date information on the holdings and strategy changes of mutual funds and ETFs. This API is designed for investors, analysts, and financial professionals who need to:

- Track Fund Holdings: Stay informed on the latest holdings disclosed by mutual funds and ETFs, including the number of shares held and the percentage of the portfolio they represent.
- Monitor Strategy Changes: Detect changes in fund strategy by reviewing updated disclosures, which may reveal shifts in investment focus or portfolio rebalancing.
- Gain Insight into Major Funds: Understand the investment decisions of significant institutional players, such as Vanguard or BlackRock, by accessing their most recent filings.

Example: An investor might use this API to track the latest disclosure from Vanguard's mutual fund, analyzing whether the fund increased or decreased its position in a particular stock, and use that information to support their own investment strategy.

Endpoint:

```plain
https://financialmodelingprep.com/stable/funds/disclosure-holders-latest?symbol=AAPL&apikey=
```

Mutual Fund & ETF Disclosure API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "cik": "0000071958",
    "holder": "NICHOLAS FUND, INC.",
    "securityCusip": "037833100",
    "shares": 659910,
    "dateReported": "2026-04-30",
    "change": 0,
    "weightPercent": 0.56338049
  }
]
```

## Mutual Fund Disclosures API

Access comprehensive disclosure data for mutual funds with the FMP Mutual Fund Disclosures API. Analyze recent filings, balance sheets, and financial reports to gain insights into mutual fund portfolios.

About Mutual Fund Disclosures API :

The FMP Mutual Fund Disclosures API provides detailed information on mutual fund holdings and recent filings, allowing investors and financial professionals to:

- Track Fund Holdings: Review the most recent disclosures of mutual fund holdings, including asset categories, issuer information, and country of investment. This helps users understand the portfolio composition of various mutual funds.
- Analyze Recent Filings: Obtain critical financial reports and filings from mutual funds, including balance data, market value in USD, percentage of total portfolio value, and more.
- Gain Transparency into Investments: The API provides essential details like CUSIP, ISIN, issuer category, and fair value levels, offering full transparency into mutual fund investments.

Example: An investor can use this API to review the holdings of a mutual fund, analyzing the balance, value in USD, and percentage of portfolio allocation to help make informed investment decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/funds/disclosure?symbol=VWO&year=2023&quarter=4&apikey=
```

Mutual Fund Disclosures API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbol\*        | string | VWO        |
| year\*          | string | 2023       |
| quarter\*       | string | 4          |
| cik             | string | 0000857489 |

Response :

```json
[
  {
    "cik": "0000857489",
    "date": "2023-10-31",
    "acceptedDate": "2023-12-28 09:26:13",
    "symbol": "000089.SZ",
    "name": "Shenzhen Airport Co Ltd",
    "lei": "3003009W045RIKRBZI44",
    "title": "SHENZ AIRPORT-A",
    "cusip": "N/A",
    "isin": "CNE000000VK1",
    "balance": 2438784,
    "units": "NS",
    "cur_cd": "CNY",
    "valUsd": 2255873.6,
    "pctVal": 0.0023838966190458206,
    "payoffProfile": "Long",
    "assetCat": "EC",
    "issuerCat": "CORP",
    "invCountry": "CN",
    "isRestrictedSec": "N",
    "fairValLevel": "2",
    "isCashCollateral": "N",
    "isNonCashCollateral": "N",
    "isLoanByFund": "N"
  }
]
```

## Mutual Fund & ETF Disclosure Name Search API

Easily search for mutual fund and ETF disclosures by name using the Mutual Fund & ETF Disclosure Name Search API. This API allows you to find specific reports and filings based on the fund or ETF name, providing essential details like CIK number, entity information, and reporting file number.

About Mutual Fund & ETF Disclosure Name Search API :

The Mutual Fund & ETF Disclosure Name Search API helps users quickly locate disclosure documents for mutual funds and ETFs by searching with a specific fund name. Key features include:

- Fund Name Search: Look up disclosures for mutual funds and ETFs using the fund or entity name.
- Key Filing Details: Get important information like CIK number, series and class IDs, entity name, and reporting file number.
- Comprehensive Results: The API returns address details and filing information for the searched fund or ETF entity, making it easy to locate relevant documents.

This API is perfect for anyone conducting due diligence or research on mutual funds and ETFs, allowing for precise and efficient disclosure searches.

Example: A financial analyst can use the Mutual Fund & ETF Disclosure Name Search API to retrieve specific disclosures for a mutual fund by entering its name, helping the analyst review relevant regulatory filings and reports for the fund.

Endpoint:

```plain
https://financialmodelingprep.com/stable/funds/disclosure-holders-search?name=Federated+Hermes+Government+Income+Securities%2C+Inc.&apikey=
```

Mutual Fund & ETF Disclosure Name Search API Parameters :

(\*) Required

| Query Parameter | Type   | Example                                              |
| :-------------- | :----- | :--------------------------------------------------- |
| name\*          | string | Federated Hermes Government Income Securities, Inc.  |

Response :

```json
[
  {
    "symbol": "FGOAX",
    "cik": "0000355691",
    "classId": "C000024574",
    "seriesId": "S000009042",
    "entityName": "Federated Hermes Government Income Securities, Inc.",
    "entityOrgType": "30",
    "seriesName": "Federated Hermes Government Income Securities, Inc.",
    "className": "Class A Shares",
    "reportingFileNumber": "811-03266",
    "address": "4000 ERICSSON DRIVE",
    "city": "WARRENDALE",
    "zipCode": "15086-7561",
    "state": "PA"
  }
]
```

## Fund & ETF Disclosures by Date API

Retrieve detailed disclosures for mutual funds and ETFs based on filing dates with the FMP Fund & ETF Disclosures by Date API. Stay current with the latest filings and track regulatory updates effectively.

About Fund & ETF Disclosures by Date API :

The FMP Fund & ETF Disclosures by Date API allows users to quickly access mutual fund and ETF disclosures by specifying filing dates. This API is essential for:

- Tracking Recent Filings: Stay informed about the latest mutual fund and ETF filings by retrieving disclosures based on specific filing dates.
- Historical Research: The API allows users to retrieve disclosures from past quarters or years, making it a valuable tool for historical financial research, performance tracking, and compliance verification.
- Monitoring Filing Trends: Regularly reviewing filings by date helps users keep an eye on market trends and understand how recent filings may impact the financial markets.

Example: An investor may want to track all disclosures filed in the second quarter of 2024. By using the Fund & ETF Disclosures by Date API, they can quickly retrieve and review these filings to understand any significant changes in fund strategies or holdings.

Endpoint:

```plain
https://financialmodelingprep.com/stable/funds/disclosure-dates?symbol=VWO&apikey=
```

Fund & ETF Disclosures by Date API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbol\*        | string | VWO        |
| cik             | string | 0000036405 |

Response :

```json
[
  {
    "date": "2026-01-31",
    "year": 2026,
    "quarter": 1
  }
]
```
