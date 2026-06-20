# Form 13F

## Institutional Ownership Filings API

Stay up to date with the most recent SEC filings related to institutional ownership using the Institutional Ownership Filings API. This tool allows you to track the latest reports and disclosures from institutional investors, giving you a real-time view of major holdings and regulatory submissions.

About Institutional Ownership Filings API :

The Institutional Ownership Filings API gives access to the latest SEC filings from institutional investors, providing insights into reports like Form 13F filings. This API is ideal for:

- Tracking Institutional Ownership: Stay updated on which institutions hold shares in specific companies.
- Monitoring Investor Activity: Access filings that show when large investors are buying or selling shares.
- Research & Analysis: Use this data for investment research and trend analysis to see which institutions are bullish or bearish on a company.
- Compliance & Governance: Utilize filings to ensure corporate actions comply with regulatory requirements.

This API ensures real-time access to the most recent institutional filings, keeping you informed about significant investor movements.

Example: An investment researcher can use the Institutional Ownership Filings API to monitor changes in institutional ownership for companies like Apple, identifying when major hedge funds or pension funds increase or decrease their stakes.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/latest?page=0&limit=100&apikey=
```

Institutional Ownership Filings API Parameters :

(\*) Required | Page maxed at 100

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| page            | number | 0       |
| limit           | number | 100     |

Response :

```json
[
  {
    "cik": "0001686970",
    "name": "ODDO BHF ASSET MANAGEMENT SAS",
    "date": "2025-03-31",
    "filingDate": "2026-06-05 00:00:00",
    "acceptedDate": "2026-06-05 11:45:56",
    "formType": "13F-HR/A",
    "link": "https://www.sec.gov/Archives/edgar/data/1686970/000168697026000003/0001686970-26-000003-index.htm",
    "finalLink": "https://www.sec.gov/Archives/edgar/data/1686970/000168697026000003/xml.xml"
  }
]
```

## Filings Extract API

Extract detailed data directly from official SEC filings with the SEC Filings Extract API. This API provides access to key information such as company shares, security details, and filing links, making it easier to analyze corporate disclosures.

About Filings Extract API :

The SEC Filings Extract API offers a streamlined way to retrieve detailed information from SEC filings. This is ideal for investors, analysts, and financial professionals who need to analyze official company reports and gain insights into ownership structures, security details, and other critical data. This API is perfect for:

- SEC Filings Analysis: Extract key information from SEC filings, such as shares owned, value, and security details.
- Ownership Tracking: Monitor changes in company ownership over time by accessing filed reports.
- Filing Comparison: Compare detailed data from different filing periods to track trends and changes.

Example: An investment firm uses the SEC Filings Extract API to track changes in ownership for a specific company by extracting data from quarterly 13F filings. This helps the firm identify trends and adjust its investment strategy accordingly.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/extract?cik=0001388838&year=2023&quarter=3&apikey=
```

Filings Extract API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| cik\*           | string | 0001388838 |
| year\*          | string | 2023       |
| quarter\*       | string | 3          |

Response :

```json
[
  {
    "date": "2023-09-30",
    "filingDate": "2023-11-13",
    "acceptedDate": "2023-11-13",
    "cik": "0001388838",
    "securityCusip": "674215207",
    "symbol": "CHRD",
    "nameOfIssuer": "CHORD ENERGY CORPORATION",
    "shares": 13280,
    "titleOfClass": "COM NEW",
    "sharesType": "SH",
    "putCallShare": "",
    "value": 2152290,
    "link": "https://www.sec.gov/Archives/edgar/data/1388838/000117266123003760/0001172661-23-003760-index.htm",
    "finalLink": "https://www.sec.gov/Archives/edgar/data/1388838/000117266123003760/infotable.xml"
  }
]
```

## Form 13F Filings Dates API

Retrieve dates associated with Form 13F filings by institutional investors with the Form 13F Filings Dates API. This is crucial for tracking stock holdings of institutional investors at specific points in time, providing valuable insights into their investment strategies.

About Form 13F Filings Dates API :

The Form 13F Filings Dates API is ideal for users interested in tracking when institutional investors file Form 13F reports with the SEC. This data reveals their stock holdings and investment trends:

- Investor Monitoring: Track when institutional investors file their stock holdings with the SEC.
- Quarterly Analysis: Review changes in institutional holdings across different quarters.
- Historical Research: Analyze filing patterns over the years and spot trends in institutional ownership.

Example: An analyst can use the Form 13F Filings Dates API to check the filing dates of a major institutional investor, allowing them to compare portfolio changes from quarter to quarter and make informed decisions based on institutional behavior.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/dates?cik=0001067983&apikey=
```

Form 13F Filings Dates API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| cik\*           | string | 0001067983 |

Response :

```json
[
  {
    "date": "2026-03-31",
    "year": 2026,
    "quarter": 1
  }
]
```

## Filings Extract With Analytics By Holder API

Access an analytical breakdown of institutional filings with the Filings Extract With Analytics By Holder API. This API offers insight into stock movements, strategies, and portfolio changes by major institutional holders, helping you understand their investment behavior and track significant changes in stock ownership.

About Filings Extract With Analytics By Holder API :

The Filings Extract With Analytics By Holder API allows users to extract detailed analytics from filings by institutional investors. Key features include:

- Institutional Investor Analysis: Track the behavior of large institutional holders such as Vanguard, including their changes in stock positions and market value.
- Portfolio Movement Monitoring: Analyze stock movements and holding period data to see how long institutions have held a stock and when they increased or reduced their positions.
- Investment Strategy Insights: Understand investment strategies by looking at changes in weight, market value, and ownership over time.

Example: An investment analyst can use the Filings Extract With Analytics By Holder API to monitor Vanguard Group's activity in Apple Inc. stocks, seeing how much stock Vanguard holds, any changes in weight or market value, and when the stock was first added to their portfolio.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/extract-analytics/holder?symbol=AAPL&year=2023&quarter=3&page=0&limit=10&apikey=
```

Filings Extract With Analytics By Holder API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| year\*          | string | 2023    |
| quarter\*       | string | 3       |
| page            | number | 0       |
| limit           | number | 10      |

Response :

```json
[
  {
    "date": "2023-09-30",
    "cik": "0000102909",
    "filingDate": "2023-12-18",
    "investorName": "VANGUARD GROUP INC",
    "symbol": "AAPL",
    "securityName": "APPLE INC",
    "typeOfSecurity": "COM",
    "securityCusip": "037833100",
    "sharesType": "SH",
    "putCallShare": "Share",
    "investmentDiscretion": "SOLE",
    "industryTitle": "ELECTRONIC COMPUTERS",
    "weight": 5.4673,
    "lastWeight": 5.996,
    "changeInWeight": -0.5287,
    "changeInWeightPercentage": -8.8175,
    "marketValue": 222572509140,
    "lastMarketValue": 252876459509,
    "changeInMarketValue": -30303950369,
    "changeInMarketValuePercentage": -11.9837,
    "sharesNumber": 1299997133,
    "lastSharesNumber": 1303688506,
    "changeInSharesNumber": -3691373,
    "changeInSharesNumberPercentage": -0.2831,
    "quarterEndPrice": 171.21,
    "avgPricePaid": 20.65,
    "isNew": false,
    "isSoldOut": false,
    "ownership": 8.3336,
    "lastOwnership": 8.305,
    "changeInOwnership": 0.0286,
    "changeInOwnershipPercentage": 0.3445,
    "holdingPeriod": 75,
    "firstAdded": "2005-03-31",
    "performance": -29671950396,
    "performancePercentage": -11.7338,
    "lastPerformance": 38078179274,
    "changeInPerformance": -67750129670,
    "isCountedForPerformance": true
  }
]
```

## Holder Performance Summary API

Access insights into the performance of institutional investors based on their stock holdings with the Holder Performance Summary API. This data helps track how well institutional holders are performing, their portfolio changes, and how their performance compares to benchmarks like the S&P 500.

About Holder Performance Summary API :

The Holder Performance Summary API allows users to view performance metrics for institutional holders, such as market value changes, portfolio turnover, and relative performance against benchmarks. This API is ideal for:

- Institutional Investor Analysis: Track how well institutional investors are performing based on stock picks, changes in holdings, and market value.
- Portfolio Turnover Analysis: See how frequently an institution buys or sells securities, providing insights into their trading strategy.
- Performance Benchmarking: Compare an institution's performance against the S&P 500 and other benchmarks over different timeframes (1 year, 3 years, 5 years).

Example: An investment manager can use the Holder Performance Summary API to analyze Berkshire Hathaway's performance over the last five years and compare it to the S&P 500, assessing how well their investment strategy has fared.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/holder-performance-summary?cik=0001067983&page=0&apikey=
```

Holder Performance Summary API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| cik\*           | string | 0001067983 |
| page            | number | 0          |

Response :

```json
[
  {
    "date": "2026-03-31",
    "cik": "0001067983",
    "investorName": "BERKSHIRE HATHAWAY INC",
    "portfolioSize": 29,
    "securitiesAdded": 3,
    "securitiesRemoved": 16,
    "marketValue": 263095703570,
    "previousMarketValue": 274160086701,
    "changeInMarketValue": -11064383131,
    "changeInMarketValuePercentage": -4.0357,
    "averageHoldingPeriod": 19,
    "turnover": 0.6552,
    "performance": -2243708176,
    "performancePercentage": -0.8184,
    "performance1year": 28972344227,
    "performancePercentage1year": 11.3876,
    "performance3year": 118145980011,
    "performancePercentage3year": 45.901,
    "performance5year": 146868211621,
    "performancePercentage5year": 63.1846,
    "performanceSinceInception": 267098327593,
    "performanceSinceInceptionPercentage": 203.038,
    "performanceRelativeToSP500Percentage": 3.8118
  }
]
```

## Holders Industry Breakdown API

Access an overview of the sectors and industries that institutional holders are investing in with the Holders Industry Breakdown API. This API helps analyze how institutional investors distribute their holdings across different industries and track changes in their investment strategies over time.

About Holders Industry Breakdown API :

The Holders Industry Breakdown API allows users to retrieve data on the industries institutional investors are focusing on, including the weight of their holdings in each sector and how that weight changes over time. Key features include:

- Industry Focus Analysis: Understand which industries are receiving the most investment from major institutional holders.
- Portfolio Diversification: Analyze how diversified institutional investors' portfolios are across different sectors.
- Investment Trend Insights: Track changes in the weight of industry holdings to identify shifts in institutional investment strategies.

Example: A financial analyst can use the Holders Industry Breakdown API to analyze Berkshire Hathaway's sector focus, identifying whether they are increasing or decreasing their exposure to industries like technology or healthcare over time.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/holder-industry-breakdown?cik=0001067983&year=2023&quarter=3&apikey=
```

Holders Industry Breakdown API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| cik\*           | string | 0001067983 |
| year\*          | string | 2023       |
| quarter\*       | string | 3          |

Response :

```json
[
  {
    "date": "2023-09-30",
    "cik": "0001067983",
    "investorName": "BERKSHIRE HATHAWAY INC",
    "industryTitle": "ELECTRONIC COMPUTERS",
    "weight": 49.7704,
    "lastWeight": 51.0035,
    "changeInWeight": -1.2332,
    "changeInWeightPercentage": -2.4178,
    "performance": -20838154294,
    "performancePercentage": -178.2938,
    "lastPerformance": 26615340304,
    "changeInPerformance": -47453494598
  }
]
```

## Positions Summary API

Access a comprehensive snapshot of institutional holdings for a specific stock symbol with the Positions Summary API. It tracks key metrics like the number of investors holding the stock, changes in the number of shares, total investment value, and ownership percentages over time.

About Positions Summary API :

The Positions Summary API enables users to analyze institutional positions in a particular stock by providing data such as the number of investors holding the stock, the number of shares held, the total amount invested, and changes in these metrics over a given time period. It is ideal for:

- Tracking Institutional Investment Trends: Monitor how institutional investors are changing their positions in a stock over time.
- Ownership Insights: Understand what percentage of a company is owned by institutional investors and how this changes.
- Call & Put Analysis: Get insights into the put/call ratio and track options activity for institutional positions.

Example: A hedge fund manager can use the Positions Summary API to track institutional ownership trends in Apple (AAPL), monitoring how many institutions are increasing or reducing their positions, and assessing overall market sentiment.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/symbol-positions-summary?symbol=AAPL&year=2023&quarter=3&apikey=
```

Positions Summary API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| year\*          | string | 2023    |
| quarter\*       | string | 3       |

Response :

```json
[
  {
    "symbol": "AAPL",
    "cik": "0000320193",
    "date": "2023-09-30",
    "investorsHolding": 4856,
    "lastInvestorsHolding": 4798,
    "investorsHoldingChange": 58,
    "numberOf13Fshares": 9255867768,
    "lastNumberOf13Fshares": 9352605928,
    "numberOf13FsharesChange": -96738160,
    "totalInvested": 1595625709828,
    "lastTotalInvested": 1819210506516,
    "totalInvestedChange": -223584796688,
    "ownershipPercent": 59.3346,
    "lastOwnershipPercent": 59.5798,
    "ownershipPercentChange": -0.2452,
    "newPositions": 162,
    "increasedPositions": 1938,
    "closedPositions": 158,
    "reducedPositions": 2404,
    "totalCalls": 173627138,
    "totalPuts": 192913290,
    "putCallRatio": 1.1111,
    "lastPutCallRatio": 0.8901,
    "putCallRatioChange": 22.0952
  }
]
```

## Industry Performance Summary API

Access an overview of how various industries are performing financially with the Industry Performance Summary API. By analyzing the value of industries over a specific period, this API helps investors and analysts understand the health of entire sectors and make informed decisions about sector-based investments.

About Industry Performance Summary API :

The Industry Performance Summary API enables users to retrieve financial performance summaries for specific industries. This API is ideal for:

- Sector Analysis: Gain insights into how industries are performing, helping you identify strong or underperforming sectors.
- Comparative Industry Health: Compare the financial health of different industries to assess which sectors might present better investment opportunities.
- Macro-Level Market Insights: Use industry-level performance data to make informed decisions about broad market trends and economic shifts.

Endpoint:

```plain
https://financialmodelingprep.com/stable/institutional-ownership/industry-summary?year=2023&quarter=3&apikey=
```

Industry Performance Summary API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| year\*          | string | 2023    |
| quarter\*       | string | 3       |

Response :

```json
[
  {
    "industryTitle": "ABRASIVE, ASBESTOS & MISC NONMETALLIC MINERAL PRODS",
    "industryValue": 11031469701,
    "date": "2023-09-30"
  }
]
```
