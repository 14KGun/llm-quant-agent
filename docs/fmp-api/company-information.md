# Company Information

## Company Profile Data API

Access detailed company profile data with the FMP Company Profile Data API. This API provides key financial and operational information for a specific stock symbol, including the company's market capitalization, stock price, industry, and much more.

About Company Profile Data API :

The FMP Company Profile Data API offers comprehensive insights into a company's financial status and operational details. This API is ideal for analysts, traders, and investors who need an in-depth look at a company's core financial metrics and business information. Key features include:

- Stock Price and Market Cap: Get the latest stock price and market capitalization for the requested symbol.
- Company Details: Access information like company name, description, CEO, and industry classification.
- Financial Metrics: Track important financial metrics like dividend yield, stock beta, and trading range to assess performance and volatility.
- Global Identifiers: Retrieve global financial identifiers such as CIK, ISIN, and CUSIP to ensure accurate tracking across platforms.
- Contact Information: Obtain contact details like the company's address, phone number, and website for direct reference.
- IPO Data: Learn about the company's IPO date, sector, and whether it's actively trading.

Example: An investor researching potential tech investments can use the Company Profile Data API to review the current financial health of Apple Inc., assess its performance, and explore key metrics like its stock range and market cap to inform buying or selling decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/profile?symbol=AAPL&apikey=
```

Company Profile Data API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "price": 262.82,
    "marketCap": 3900351299800,
    "beta": 1.086,
    "lastDividend": 1.05,
    "range": "169.21-265.29",
    "change": 3.24,
    "changePercentage": 1.24817,
    "volume": 36725325,
    "averageVolume": 44645993,
    "companyName": "Apple Inc.",
    "currency": "USD",
    "cik": "0000320193",
    "isin": "US0378331005",
    "cusip": "037833100",
    "exchangeFullName": "NASDAQ Global Select",
    "exchange": "NASDAQ",
    "industry": "Consumer Electronics",
    "website": "https://www.apple.com",
    "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide...",
    "ceo": "Timothy D. Cook",
    "sector": "Technology",
    "country": "US",
    "fullTimeEmployees": "164000",
    "phone": "(408) 996-1010",
    "address": "One Apple Park Way",
    "city": "Cupertino",
    "state": "CA",
    "zip": "95014",
    "image": "https://images.financialmodelingprep.com/symbol/AAPL.png",
    "ipoDate": "1980-12-12",
    "defaultImage": false,
    "isEtf": false,
    "isActivelyTrading": true,
    "isAdr": false,
    "isFund": false
  }
]
```

## Company Profile by CIK API

Retrieve detailed company profile data by CIK (Central Index Key) with the FMP Company Profile by CIK API. This API allows users to search for companies using their unique CIK identifier and access a full range of company data, including stock price, market capitalization, industry, and much more.

About Company Profile by CIK API :

The FMP Company Profile by CIK API provides comprehensive company information for users who want to look up firms using the CIK code. Ideal for compliance officers, analysts, and investors, this API allows access to vital company details based on their CIK number. Key features include:

- Company Lookup by CIK: Easily find companies using their Central Index Key for fast and accurate identification.
- Stock Price & Market Cap: Get the most up-to-date stock price and market capitalization data for the requested company.
- Comprehensive Financial Data: Access essential financial metrics like beta, dividend yield, and trading range to evaluate a company's performance.
- Global Identifiers: Retrieve key identifiers such as CIK, ISIN, and CUSIP to streamline cross-platform tracking of companies.
- Company Information: Get in-depth details on the company's business operations, CEO, sector, and contact information.
- IPO & Industry Data: View company industry, sector, and IPO details to better understand its market position.

Example: A compliance officer conducting a regulatory review can use the Company Profile by CIK API to quickly retrieve comprehensive data on Apple Inc. using its unique CIK number, ensuring accuracy in cross-referencing the company across different databases.

Endpoint:

```plain
https://financialmodelingprep.com/stable/profile-cik?cik=320193&apikey=
```

Company Profile by CIK API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| cik\*           | string | 320193  |

Response :

```json
[
  {
    "symbol": "AAPL",
    "price": 262.82,
    "marketCap": 3900351299800,
    "beta": 1.086,
    "lastDividend": 1.05,
    "range": "169.21-265.29",
    "change": 3.24,
    "changePercentage": 1.24817,
    "volume": 36725325,
    "averageVolume": 44645993,
    "companyName": "Apple Inc.",
    "currency": "USD",
    "cik": "0000320193",
    "isin": "US0378331005",
    "cusip": "037833100",
    "exchangeFullName": "NASDAQ Global Select",
    "exchange": "NASDAQ",
    "industry": "Consumer Electronics",
    "website": "https://www.apple.com",
    "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide...",
    "ceo": "Timothy D. Cook",
    "sector": "Technology",
    "country": "US",
    "fullTimeEmployees": "164000",
    "phone": "(408) 996-1010",
    "address": "One Apple Park Way",
    "city": "Cupertino",
    "state": "CA",
    "zip": "95014",
    "image": "https://images.financialmodelingprep.com/symbol/AAPL.png",
    "ipoDate": "1980-12-12",
    "defaultImage": false,
    "isEtf": false,
    "isActivelyTrading": true,
    "isAdr": false,
    "isFund": false
  }
]
```

## Company Notes API

Retrieve detailed information about company-issued notes with the FMP Company Notes API. Access essential data such as CIK number, stock symbol, note title, and the exchange where the notes are listed.

About Company Notes API :

The FMP Company Notes API provides crucial information on notes issued by publicly traded companies. This API is particularly valuable for investors, analysts, and financial professionals tracking corporate debt instruments. Key features include:

- CIK and Stock Symbol Lookup: Identify notes by the company's Central Index Key (CIK) and stock symbol.
- Note Title and Terms: Get detailed titles of company-issued notes, including specific terms like interest rates and maturity dates.
- Exchange Information: Learn where these notes are traded, helping you track their market activity on exchanges such as NASDAQ and NYSE.

The Company Notes API is an essential tool for monitoring corporate debt instruments and understanding a company's financial commitments.

Endpoint:

```plain
https://financialmodelingprep.com/stable/company-notes?symbol=AAPL&apikey=
```

Company Notes API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "cik": "0000320193",
    "symbol": "AAPL",
    "title": "0.000% Notes due 2025",
    "exchange": "NASDAQ"
  }
]
```

## Stock Peer Comparison API

Identify and compare companies within the same sector and market capitalization range using the FMP Stock Peer Comparison API. Gain insights into how a company stacks up against its peers on the same exchange.

About Stock Peer Comparison API :

The FMP Stock Peer Comparison API provides a curated list of companies that trade on the same exchange, belong to the same sector, and have a similar market capitalization. This API is essential for:

- Competitive Analysis: Use the API to compare a company's performance against its peers. This comparison can help you identify companies that are outperforming or underperforming within their sector.
- Sector-Specific Insights: By focusing on companies within the same sector and market cap range, investors can obtain a more relevant and accurate comparison, making it easier to assess relative performance and market positioning.
- Investment Strategy: Investors can use this information to refine their investment strategy by identifying strong performers within a sector or by finding undervalued companies that have the potential to grow.

This API is a valuable resource for investors seeking to conduct in-depth competitive analysis and to make informed decisions based on how a company compares to its peers.

Example: An investor might use the Stock Peer Comparison API to compare the revenue growth and earnings per share (EPS) of a technology company to those of its peers within the same sector. This can help the investor determine whether the company is a leader in its field or if it lags behind its competitors.

Endpoint:

```plain
https://financialmodelingprep.com/stable/stock-peers?symbol=AAPL&apikey=
```

Stock Peer Comparison API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "GOOGL",
    "companyName": "Alphabet Inc.",
    "price": 368.53,
    "mktCap": 4457322549079
  }
]
```

## Delisted Companies API

Stay informed with the FMP Delisted Companies API. Access a comprehensive list of companies that have been delisted from stock exchanges to avoid trading in risky stocks and identify potential financial troubles.

About Delisted Companies API :

The FMP Delisted Companies API provides valuable information on companies that have been removed from stock exchanges. This API is essential for investors who want to:

- Avoid Trading in Delisted Stocks: Identify stocks that have been delisted to prevent potential losses from trading in these securities.
- Understand Reasons for Delisting: Learn about the various factors that can lead to a company's delisting, such as financial difficulties, failure to comply with exchange regulations, or mergers and acquisitions.
- Identify Financial Troubles: Use the delisted companies list as an indicator of potential financial instability or other underlying issues within a company.

This API helps investors make informed decisions by providing timely information on companies that are no longer publicly traded on exchanges.

Endpoint:

```plain
https://financialmodelingprep.com/stable/delisted-companies?page=0&limit=100&apikey=
```

Delisted Companies API Parameters :

(\*) Required | Maximum 100 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| page            | number | 0       |
| limit           | number | 100     |

Response :

```json
[
  {
    "symbol": "EDAP",
    "companyName": "Edap Tms S.a.",
    "exchange": "NASDAQ",
    "ipoDate": "1997-08-01",
    "delistedDate": "2026-06-01"
  }
]
```

## Company Employee Count API

Retrieve detailed workforce information for companies, including employee count, reporting period, and filing date. The FMP Company Employee Count API also provides direct links to official SEC documents for further verification and in-depth research.

About Company Employee Count API :

The FMP Company Employee Count API offers users access to essential data regarding a company's workforce size. This API is especially valuable for analysts, investors, and HR professionals who need to understand company operations, staffing trends, and workforce management. Key features include:

- Employee Count: Easily retrieve the total number of employees for a company based on the most recent filing data.
- Period of Report: Understand the timeframe of the reported employee count by accessing the period of the report.
- Filing Date and Form Type: View the filing date and type of document (e.g., 10-K) to understand when and where the workforce data was disclosed.
- Direct SEC Links: Access the official SEC source document for transparency and additional details.

This API is ideal for those analyzing company size, productivity, or workforce trends and provides a clear snapshot of company operations through its employee count.

Example: An equity analyst can use the Company Employee Count API to assess workforce growth at Apple Inc. over the years, comparing it to changes in the company's revenue and profitability.

Endpoint:

```plain
https://financialmodelingprep.com/stable/employee-count?symbol=AAPL&apikey=
```

Company Employee Count API Parameters :

(\*) Required | Maximum 10000 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 100     |

Response :

```json
[
  {
    "symbol": "AAPL",
    "cik": "0000320193",
    "acceptanceTime": "2025-10-31 06:01:26",
    "periodOfReport": "2025-09-27",
    "companyName": "Apple Inc.",
    "formType": "10-K",
    "filingDate": "2025-10-31",
    "employeeCount": 166000,
    "source": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.htm"
  }
]
```

## Company Historical Employee Count API

Access historical employee count data for a company based on specific reporting periods. The FMP Company Historical Employee Count API provides insights into how a company's workforce has evolved over time, allowing users to analyze growth trends and operational changes.

About Company Historical Employee Count API :

The FMP Company Historical Employee Count API is designed for users who need to track workforce trends for a company across various reporting periods. This data is especially useful for analyzing long-term growth, staffing changes, and the relationship between workforce size and financial performance. Key features include:

- Historical Employee Count: Retrieve workforce size over different periods to analyze growth or decline trends.
- Report Periods: Gain insights into specific timeframes of employee data, tied to annual or quarterly financial reports.
- Filing Date and Form Type: Understand when the employee data was reported, along with the corresponding SEC form type (e.g., 10-K).
- Direct SEC Links: Access the original SEC filings for in-depth research and transparency.

This API is ideal for HR analysts, investors, and business strategists who want to track workforce changes and assess their impact on company operations.

Example: A financial analyst can use the Company Historical Employee Count API to compare the employee count of Apple Inc. over a five-year period to evaluate how workforce changes correlate with revenue growth and market expansion.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-employee-count?symbol=AAPL&apikey=
```

Company Historical Employee Count API Parameters :

(\*) Required | Maximum 10000 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 100     |

Response :

```json
[
  {
    "symbol": "AAPL",
    "cik": "0000320193",
    "acceptanceTime": "2025-10-31 06:01:26",
    "periodOfReport": "2025-09-27",
    "companyName": "Apple Inc.",
    "formType": "10-K",
    "filingDate": "2025-10-31",
    "employeeCount": 166000,
    "source": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.htm"
  }
]
```

## Company Market Cap API

Retrieve the market capitalization for a specific company on any given date using the FMP Company Market Capitalization API. This API provides essential data to assess the size and value of a company in the stock market, helping users gauge its overall market standing.

About Company Market Cap API :

The FMP Company Market Capitalization API delivers precise data on a company's market cap for a selected date, making it an indispensable tool for investors, analysts, and financial professionals. Key features include:

- Market Capitalization on Specific Dates: Retrieve accurate market cap data for companies, allowing you to track changes over time.
- Company Valuation Analysis: Analyze a company's size and value within the stock market based on its market capitalization.
- Historical and Real-Time Capabilities: Access both historical and real-time market cap data for better decision-making.

This API is ideal for investors, portfolio managers, and analysts who need a quick way to assess company size and evaluate its standing within the market.

Example: An investor tracking Apple Inc.'s market performance can use the Company Market Capitalization API to retrieve the company's market cap on specific dates, helping them understand Apple's valuation trends and compare it with competitors.

Endpoint:

```plain
https://financialmodelingprep.com/stable/market-capitalization?symbol=AAPL&apikey=
```

Company Market Cap API Parameters :

(\*) Required | Currency is as Trading

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2025-10-24",
    "marketCap": 3900351299800
  }
]
```

## Batch Market Cap API

Retrieve market capitalization data for multiple companies in a single request with the FMP Batch Market Capitalization API. This API allows users to compare the market size of various companies simultaneously, streamlining the analysis of company valuations.

About Batch Market Cap API :

The FMP Batch Market Capitalization API offers a fast and efficient way to gather market cap data for several companies in one batch request. Key features include:

- Multiple Companies in One Request: Retrieve the market capitalization for numerous companies in a single API call, saving time and effort.
- Compare Market Sizes: Analyze and compare the market caps of different companies to evaluate their relative size and market standing.
- Real-Time and Historical Market Caps: Access both current and past market capitalization data to track performance over time.

This API is perfect for investors, analysts, and portfolio managers who need to compare multiple companies at once, helping to identify investment opportunities and market trends quickly.

Example: An analyst researching tech giants can use the Batch Market Capitalization API to retrieve market cap data for Apple, Microsoft, and Google in one request. This allows them to quickly compare these companies' market sizes and assess their positions within the industry.

Endpoint:

```plain
https://financialmodelingprep.com/stable/market-capitalization-batch?symbols=AAPL,MSFT,GOOG&apikey=
```

Batch Market Cap API Parameters :

(\*) Required

| Query Parameter | Type   | Example        |
| :-------------- | :----- | :------------- |
| symbols\*       | string | AAPL,MSFT,GOOG |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2025-10-24",
    "marketCap": 3900351299800
  }
]
```

## Historical Market Cap API

Access historical market capitalization data for a company using the FMP Historical Market Capitalization API. This API helps track the changes in market value over time, enabling long-term assessments of a company's growth or decline.

About Historical Market Cap API :

The FMP Historical Market Capitalization API allows users to retrieve past market cap data for any company listed in the database. Key features include:

- Track Long-Term Performance: Retrieve historical market cap data to analyze how a company's value has evolved over time.
- Identify Trends: Use historical data to spot trends, whether it's consistent growth, decline, or periods of volatility.
- Informed Investment Decisions: Investors can use this data to evaluate a company's long-term performance and make more informed investment choices.

This API is ideal for analysts, portfolio managers, and investors looking to assess a company's growth trajectory or historical performance in the market.

Example: An investor looking to evaluate Apple's historical performance can use the Historical Market Capitalization API to retrieve past market cap data. This helps them understand how Apple's valuation has changed over time, identifying periods of growth or decline and comparing it with overall market conditions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-market-capitalization?symbol=AAPL&apikey=
```

Historical Market Cap API Parameters :

(\*) Required | Maximum 5000 records per request | Currency is as Trading

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbol\*        | string | AAPL       |
| limit           | number | 100        |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-27 |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-05",
    "marketCap": 4521192070120
  }
]
```

## Company Share Float & Liquidity API

Understand the liquidity and volatility of a stock with the FMP Company Share Float and Liquidity API. Access the total number of publicly traded shares for any company to make informed investment decisions.

About Company Share Float & Liquidity API :

The FMP Company Share Float and Liquidity API provides essential data on the number of publicly traded shares for a given company, also known as the company's float. This endpoint helps investors:

- Evaluate Stock Liquidity: Identify the number of shares available for trading, which directly impacts the liquidity of the stock.
- Assess Volatility: Understand how the size of a company's float can influence stock price volatility, with smaller floats generally leading to higher volatility.
- Make Informed Decisions: Use float data to identify companies with large or small floats, helping to assess the potential risk and reward of investing in those companies.

For example, companies with a large float tend to have more liquid stocks and less price volatility, while companies with a small float may experience higher price fluctuations due to lower liquidity.

Endpoint:

```plain
https://financialmodelingprep.com/stable/shares-float?symbol=AAPL&apikey=
```

Company Share Float & Liquidity API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-05 08:13:10",
    "freeFloat": 99.83099999754891,
    "floatShares": 14662534368,
    "outstandingShares": 14687356000,
    "source": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000013/aapl-20260328.htm"
  }
]
```

## All Shares Float API

Access comprehensive shares float data for all available companies with the FMP All Shares Float API. Retrieve critical information such as free float, float shares, and outstanding shares to analyze liquidity across a wide range of companies.

About All Shares Float API :

The FMP All Shares Float API provides valuable data on the liquidity of publicly traded companies by offering insights into shares available for trading. This API is essential for investors, analysts, and financial professionals seeking to understand a company's market activity. Key features include:

- Free Float Data: Understand the number of shares available for public trading, excluding closely held shares owned by insiders, employees, or major shareholders.
- Float Shares & Outstanding Shares: Retrieve the total number of shares that are both floating on the market and outstanding, helping you analyze a company's total market exposure.
- Comparative Liquidity Analysis: With access to free float and outstanding shares across multiple companies, you can compare liquidity, determine market stability, and evaluate investment potential.

This API serves as a critical resource for evaluating the ease with which shares can be bought or sold on the open market, offering a detailed picture of company share availability and market behavior.

Endpoint:

```plain
https://financialmodelingprep.com/stable/shares-float-all?page=0&limit=1000&apikey=
```

All Shares Float API Parameters :

(\*) Required | Maximum 5000 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| limit           | number | 1000    |
| page            | number | 0       |

Response :

```json
[
  {
    "symbol": "000001.SZ",
    "date": "2026-06-06 09:23:35",
    "freeFloat": 41.40900000201062,
    "floatShares": 8035796667,
    "outstandingShares": 19405918198
  }
]
```

## Latest Mergers & Acquisitions API

Access real-time data on the latest mergers and acquisitions with the FMP Latest Mergers and Acquisitions API. This API provides key information such as the transaction date, company names, and links to detailed filing information for further analysis.

About Latest Mergers & Acquisitions API :

The FMP Latest Mergers and Acquisitions API delivers the most recent information on corporate mergers and acquisitions, giving users access to essential data about company takeovers and transactions. Key features include:

- Transaction Details: Get information on the companies involved, including acquiring and targeted firms.
- Filing Information: Access official filings and documents from the SEC for a deeper analysis of the deal.
- Timely Updates: Stay informed with the most recent mergers and acquisitions data, providing insights into market consolidation.

This API is ideal for analysts, investors, and corporate strategists looking to track corporate activity and make informed decisions based on the latest M&A trends.

Example: An investment analyst can use the Latest Mergers and Acquisitions API to track recent acquisitions and evaluate the impact of these deals on the companies involved. The data can be used to assess market consolidation, competitive dynamics, and potential investment opportunities.

Endpoint:

```plain
https://financialmodelingprep.com/stable/mergers-acquisitions-latest?page=0&limit=100&apikey=
```

Latest Mergers & Acquisitions API Parameters :

(\*) Required | Maximum 1000 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| page            | number | 0       |
| limit           | number | 100     |

Response :

```json
[
  {
    "symbol": "GNL-PE",
    "companyName": "Global Net Lease, Inc.",
    "cik": "0001526113",
    "targetedCompanyName": "Modiv Industrial, Inc.",
    "targetedCik": "0001645873",
    "targetedSymbol": "MDV",
    "transactionDate": "2026-06-01",
    "acceptedDate": "2026-06-01 07:09:29",
    "link": "https://www.sec.gov/Archives/edgar/data/1526113/000110465926068543/tm2615734-1_s4.htm"
  }
]
```

## Search Mergers & Acquisitions API

Search for specific mergers and acquisitions data with the FMP Search Mergers and Acquisitions API. Retrieve detailed information on M&A activity, including acquiring and targeted companies, transaction dates, and links to official SEC filings.

About Search Mergers & Acquisitions API :

The FMP Search Mergers and Acquisitions API allows users to find mergers and acquisitions by company name, enabling a deeper understanding of corporate activity. This API is useful for those needing detailed data on past and ongoing deals, including:

- Company-Specific M&A Data: Search for M&A transactions involving specific companies, either as the acquirer or target.
- Transaction Dates: Access the exact dates of the transactions for precise tracking.
- Filing Links: Obtain links to official SEC documents for detailed information on the terms and conditions of the deal.

This API is perfect for financial analysts, researchers, and corporate strategists who need comprehensive M&A data to inform business or investment decisions.

Example: A corporate strategist can use the Search Mergers and Acquisitions API to identify past acquisition targets of a competitor. This information can help shape competitive strategies or identify industry trends that may affect future business opportunities.

Endpoint:

```plain
https://financialmodelingprep.com/stable/mergers-acquisitions-search?name=Apple&apikey=
```

Search Mergers & Acquisitions API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| name\*          | string | Apple   |

Response :

```json
[
  {
    "symbol": "PEGY",
    "companyName": "Pineapple Energy Inc.",
    "cik": "0000022701",
    "targetedCompanyName": "Communications Systems, Inc.",
    "targetedCik": "0000022701",
    "targetedSymbol": "JCS",
    "transactionDate": "2021-11-12",
    "acceptedDate": "2021-11-12 09:54:22",
    "link": "https://www.sec.gov/Archives/edgar/data/22701/000089710121000932/a211292_s-4.htm"
  }
]
```

## Company Executives API

Retrieve detailed information on company executives with the FMP Company Executives API. This API provides essential data about key executives, including their name, title, compensation, and other demographic details such as gender and year of birth.

About Company Executives API :

The FMP Company Executives API offers a comprehensive view of a company's leadership team, ideal for investors, researchers, and analysts who need to assess the structure and leadership of a company. This API is useful for:

- Executive Profiles: Access details like executive names, their roles within the company, and compensation data.
- Demographic Data: Get additional demographic insights, including gender and year of birth.
- Compensation Analysis: Analyze executive pay, which can be a key indicator of company priorities and leadership value.

This API delivers a clear overview of company leadership, helping users understand who is in charge and how well they are compensated for their role.

Example: An investor looking to assess the leadership of a company before making a large investment can use the Company Executives API to review the backgrounds and compensation of top executives, providing insight into how leadership may impact company performance.

Endpoint:

```plain
https://financialmodelingprep.com/stable/key-executives?symbol=AAPL&apikey=
```

Company Executives API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "title": "Senior Vice President of Worldwide Marketing",
    "name": "Greg Joswiak",
    "pay": null,
    "currencyPay": "USD",
    "gender": "male",
    "yearBorn": null,
    "titleSince": null,
    "active": true
  }
]
```

## Executive Compensation API

Retrieve comprehensive compensation data for company executives with the FMP Executive Compensation API. This API provides detailed information on salaries, stock awards, total compensation, and other relevant financial data, including filing details and links to official documents.

About Executive Compensation API :

The FMP Executive Compensation API is designed to give investors, analysts, and researchers a complete overview of executive compensation for publicly traded companies. This API is beneficial for:

- Executive Salary & Benefits: Retrieve data on annual salaries, stock awards, bonuses, and incentive plans.
- Comprehensive Compensation Breakdown: Access detailed reports on total compensation, including base pay and additional awards or incentives.
- Filing Information: Includes key filing dates and direct links to SEC filings for deeper analysis of compensation packages.

This API provides valuable insights into how company executives are compensated, helping users understand leadership incentives and assess company governance.

Example: A compensation analyst can use the Executive Compensation API to compare CEO pay across different companies, analyzing how various forms of compensation—such as salary, stock awards, and performance incentives—impact executive behavior and company performance.

Endpoint:

```plain
https://financialmodelingprep.com/stable/governance-executive-compensation?symbol=AAPL&apikey=
```

Executive Compensation API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "cik": "0000320193",
    "symbol": "AAPL",
    "companyName": "Apple Inc.",
    "filingDate": "2026-01-08",
    "acceptedDate": "2026-01-08 16:31:36",
    "nameAndPosition": "Deirdre O'Brien Senior Vice President, Retail + People",
    "year": 2023,
    "salary": 1000000,
    "bonus": 0,
    "stockAward": 22323641,
    "optionAward": 0,
    "incentivePlanCompensation": 3571150,
    "allOtherCompensation": 42219,
    "total": 26937010,
    "link": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.htm"
  }
]
```

## Executive Compensation Benchmark API

Gain access to average executive compensation data across various industries with the FMP Executive Compensation Benchmark API. This API provides essential insights for comparing executive pay by industry, helping you understand compensation trends and benchmarks.

About Executive Compensation Benchmark API :

The FMP Executive Compensation Benchmark API is designed to help businesses, analysts, and compensation consultants assess how executive pay compares across industries. It's ideal for:

- Industry Benchmarking: Evaluate average executive compensation within specific industries to determine market rates.
- Compensation Trends: Understand how executive pay varies across different sectors, providing valuable insights for salary negotiations or organizational planning.
- Competitive Analysis: Compare compensation data by industry to ensure your company remains competitive in attracting top talent.

This API provides a valuable resource for HR professionals, compensation analysts, and business leaders seeking to align executive pay with industry standards.

Example: An HR professional can use the Executive Compensation Benchmark API to compare the average pay for executives in the technology sector against those in the consumer goods sector, helping to determine competitive salary packages for their company's leadership team.

Endpoint:

```plain
https://financialmodelingprep.com/stable/executive-compensation-benchmark?apikey=
```

Executive Compensation Benchmark API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| year            | string | 2024    |

Response :

```json
[
  {
    "industryTitle": "ABRASIVE, ASBESTOS & MISC NONMETALLIC MINERAL PRODS",
    "year": 2024,
    "averageCompensation": 784407.5555555555
  }
]
```
