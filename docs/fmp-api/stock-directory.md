# Stock Directory

## Company Symbols List API

Easily retrieve a comprehensive list of financial symbols with the FMP Company Symbols List API. Access a broad range of stock symbols and other tradable financial instruments from various global exchanges, helping you explore the full range of available securities.

About Company Symbols List API :

The FMP Company Symbols List API is a valuable resource for investors, traders, and financial analysts who need to quickly obtain a complete list of symbols for publicly traded companies and financial instruments. This API is essential for:

- Comprehensive Symbol Retrieval: Gain access to a vast database of stock symbols, including equities, ETFs, and other financial instruments across global exchanges.
- Multi-Market Coverage: Explore a wide variety of symbols from major stock exchanges around the world, ensuring that you have the necessary data to make informed trading decisions.
- Accurate Company Information: Each symbol comes with relevant details such as the company name, providing context for each financial instrument in the list.

This API is ideal for those who need a quick and easy way to retrieve a complete list of stock symbols or financial instruments across multiple markets.

Endpoint:

```plain
https://financialmodelingprep.com/stable/stock-list?apikey=
```

Response :

```json
[
  {
    "symbol": "6898.HK",
    "companyName": "China Aluminum Cans Holdings Limited"
  }
]
```

## Financial Statement Symbols List API

Access a comprehensive list of companies with available financial statements through the FMP Financial Statement Symbols List API. Find companies listed on major global exchanges and obtain up-to-date financial data including income statements, balance sheets, and cash flow statements.

About Financial Statement Symbols List API :

The FMP Financial Statement Symbols List API provides a complete list of companies for which financial statements are available through our API. This endpoint is essential for:

- Comprehensive Company Coverage: Discover all companies with available financial statements, including those listed on major exchanges like the NYSE and NASDAQ, as well as international exchanges.
- Access to Global Financial Data: Gain insights into companies from around the world by accessing their financial statements through this extensive symbol list.
- Up-to-Date Information: Stay informed with regularly updated lists, ensuring you have access to the latest financial statements for public companies.

Example: An investor can use the Financial Statement Symbols List API to find the ticker symbol for a company they are interested in, access its financial statements, and make informed investment decisions based on the latest available data.

Endpoint:

```plain
https://financialmodelingprep.com/stable/financial-statement-symbol-list?apikey=
```

Response :

```json
[
  {
    "symbol": "6898.HK",
    "companyName": "China Aluminum Cans Holdings Limited",
    "tradingCurrency": "HKD",
    "reportingCurrency": "HKD"
  }
]
```

## CIK List API

Access a comprehensive database of CIK (Central Index Key) numbers for SEC-registered entities with the FMP CIK List API. This endpoint is essential for businesses, financial professionals, and individuals who need quick access to CIK numbers for regulatory compliance, financial transactions, and investment research.

About CIK List API :

The FMP CIK List API provides an extensive and searchable database of CIK numbers assigned to SEC-registered entities. A CIK number serves as a unique identifier required for many regulatory filings and financial transactions, making it a crucial tool for:

- Investment Research: Gain insights into institutional investment patterns through CIK-linked 13F filings, helping you understand equity holdings and market sentiment.
- Regulatory Compliance: Easily retrieve CIK numbers to ensure compliance with SEC regulations and reporting requirements.
- Portfolio Management: Track the CIK numbers of key institutional investors, allowing for enhanced portfolio management and market analysis.

This API is an invaluable resource for anyone involved in the financial industry, including investment analysts, portfolio managers, and compliance officers, providing access to the CIK numbers that underpin many SEC filings.

Example: A portfolio manager can use the CIK List API to retrieve the CIK number of an institutional investor from recent 13F filings, allowing them to analyze the investor's equity holdings and make informed portfolio decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/cik-list?page=0&limit=1000&apikey=
```

CIK List API Parameters :

(\*) Required | Maximum 10000 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| page            | number | 0       |
| limit           | number | 1000    |

Response :

```json
[
  {
    "cik": "0002036063",
    "companyName": "LUZ Capital Partners, LLC"
  }
]
```

## Symbol Changes List API

Stay informed about the latest stock symbol changes with the FMP Stock Symbol Changes API. Track changes due to mergers, acquisitions, stock splits, and name changes to ensure accurate trading and analysis.

About Symbol Changes List API :

The FMP Stock Symbol Changes API provides comprehensive data on recent stock symbol changes. This API is essential for:

- Accurate Trading: Symbol changes can occur for various reasons, including mergers, acquisitions, stock splits, and company name changes. Staying up-to-date with these changes ensures that your trading activities are accurate and error-free.
- Portfolio Management: By tracking symbol changes, you can ensure that your investment portfolio reflects the correct and current stock symbols, helping you avoid any discrepancies in your holdings.
- Efficient Stock Tracking: The API makes it easy to find the latest stock symbols, allowing you to quickly locate the stocks you need for trading, research, or analysis.

This API is a valuable tool for traders, investors, and analysts who need to keep track of symbol changes to maintain the accuracy of their financial activities.

Example: A trader might use the Stock Symbol Changes API to update their trading platform with the latest stock symbols after a company undergoes a merger and changes its symbol. This ensures that their trades are executed correctly without any errors due to outdated information.

Endpoint:

```plain
https://financialmodelingprep.com/stable/symbol-change?apikey=
```

Symbol Changes List API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| invalid         | string | false   |
| limit           | number | 100     |

Response :

```json
[
  {
    "date": "2025-02-03",
    "companyName": "XPLR Infrastructure, LP Common Units representing limited partner interests",
    "oldSymbol": "NEP",
    "newSymbol": "XIFR"
  }
]
```

## ETF Symbol Search API

Quickly find ticker symbols and company names for Exchange Traded Funds (ETFs) using the FMP ETF Symbol Search API. This tool simplifies identifying specific ETFs by their name or ticker.

About ETF Symbol Search API :

The FMP ETF Symbol Search API allows users to efficiently locate the ticker symbols and names of various Exchange Traded Funds (ETFs). This API is essential for:

- Simple ETF Lookup: Access a database of ETF symbols and company names with minimal effort. By searching with a company name or part of it, users can quickly find relevant ETF symbols.
- Fast, Accurate Data: The API delivers up-to-date information, ensuring users are provided with the latest ETF symbols and names across multiple exchanges.
- Focus on ETFs: The API is designed specifically for ETF-related searches, making it an invaluable resource for investors, traders, and analysts focusing on this market segment.

Endpoint:

```plain
https://financialmodelingprep.com/stable/etf-list?apikey=
```

Response :

```json
[
  {
    "symbol": "GULF",
    "name": "WisdomTree Middle East Dividend Fund"
  }
]
```

## Actively Trading List API

List all actively trading companies and financial instruments with the FMP Actively Trading List API. This endpoint allows users to filter and display securities that are currently being traded on public exchanges, ensuring you access real-time market activity.

About Actively Trading List API :

The FMP Actively Trading List API provides a comprehensive view of all companies and financial instruments actively traded across public exchanges. This API is essential for:

- Real-Time Market Monitoring: Stay updated with a list of companies and financial instruments that are currently being traded on global exchanges.
- Investment Opportunities: Quickly identify active securities to capitalize on current market movements, helping traders and investors make informed decisions.
- Customizable Filtering: Filter securities based on exchange, industry, or region, ensuring that you find the exact instruments relevant to your trading or investment strategy.

This API is an invaluable tool for investors, traders, and analysts who need real-time data on actively traded securities to guide their decisions in the fast-moving financial markets.

Example: A day trader can use the Actively Trading List API to retrieve a list of stocks that are currently being traded on the NASDAQ exchange, allowing them to focus on high-liquidity securities for potential trades throughout the day.

Endpoint:

```plain
https://financialmodelingprep.com/stable/actively-trading-list?apikey=
```

Response :

```json
[
  {
    "symbol": "6898.HK",
    "name": "China Aluminum Cans Holdings Limited"
  }
]
```

## Earnings Transcript List API

Access available earnings transcripts for companies with the FMP Earnings Transcript List API. Retrieve a list of companies with earnings transcripts, along with the total number of transcripts available for each company.

About Earnings Transcript List API :

The FMP Earnings Transcript List API provides users with essential data on the availability of earnings transcripts for various companies. This API is ideal for financial analysts, investors, and researchers looking to track earnings performance over time.

- Identify Available Transcripts: Quickly access a list of companies with earnings transcripts, complete with the number of available transcripts for each.
- Support Earnings Analysis: Use the transcript count to further analyze earnings call data and gain insights into company performance.
- Track Historical Data: Discover companies with multiple transcripts to track earnings calls over different quarters or years.

Example: An investor looking to analyze a company's earnings performance over several quarters can use the Earnings Transcript List API to identify companies with multiple earnings call transcripts and retrieve the necessary documents for deeper financial analysis.

Endpoint:

```plain
https://financialmodelingprep.com/stable/earnings-transcript-list?apikey=
```

Response :

```json
[
  {
    "symbol": "MCUJF",
    "companyName": "Medicure Inc.",
    "noOfTranscripts": "16"
  }
]
```

## Available Exchanges API

Access a complete list of supported stock exchanges using the FMP Available Exchanges API. This API provides a comprehensive overview of global stock exchanges, allowing users to identify where securities are traded and filter data by specific exchanges for further analysis.

About Available Exchanges API :

The FMP Available Exchanges API offers users a detailed listing of all supported stock exchanges, providing valuable information for investors, traders, and researchers who want to understand where securities are traded. Key features include:

- Global Exchange List: Retrieve a complete list of supported exchanges from around the world, including major stock exchanges such as NYSE, NASDAQ, and more.
- Exchange Name and Short Name: Get both the full exchange name and the short code for easy identification and filtering.
- Data Filtering by Exchange: Use this list to filter further queries based on specific exchanges, ensuring focused and accurate data retrieval for your needs.

This API is essential for those looking to organize or filter financial data based on stock exchange information.

Example: A financial analyst can use the Available Exchanges API to create a customized dashboard that filters stock price data by different exchanges, ensuring they track securities relevant to specific markets.

Endpoint:

```plain
https://financialmodelingprep.com/stable/available-exchanges?apikey=
```

Available Exchanges API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| extended        | boolean | false   |

Response :

```json
[
  {
    "exchange": "AMEX",
    "name": "New York Stock Exchange Arca",
    "countryName": "United States of America",
    "countryCode": "US",
    "symbolSuffix": "N/A",
    "delay": "Real-time"
  }
]
```

## Available Sectors API

Access a complete list of industry sectors using the FMP Available Sectors API. This API helps users categorize and filter companies based on their respective sectors, enabling deeper analysis and more focused queries across different industries.

About Available Sectors API :

The FMP Available Sectors API provides users with access to an extensive range of industry sectors, making it easier to:

- Categorize Companies by Sector: Analyze companies within a specific industry or sector, like Technology, Healthcare, or Consumer Goods.
- Filter Data: Use the sector filter to refine your queries and retrieve relevant data for targeted analysis.
- Sector-Based Comparisons: Compare companies within the same sector for peer analysis and benchmarking.

This API is ideal for investors, analysts, and researchers who need to analyze sector-based trends or want to focus their efforts on companies operating within particular industries.

Example: An investment firm could use the Available Sectors API to filter and analyze companies solely within the Technology sector, enabling them to track growth trends or potential opportunities in that market segment.

Endpoint:

```plain
https://financialmodelingprep.com/stable/available-sectors?apikey=
```

Response :

```json
[
  {
    "sector": "Basic Materials"
  }
]
```

## Available Industries API

Access a comprehensive list of industries where stock symbols are available using the FMP Available Industries API. This API helps users filter and categorize companies based on their industry for more focused research and analysis.

About Available Industries API :

The FMP Available Industries API provides detailed access to industry classifications, enabling users to:

- Categorize Companies by Industry: Organize companies based on their specific industry, such as Automotive, Pharmaceuticals, or Steel.
- Filter Data for Precision: Use the industry filter to refine your queries, ensuring you retrieve only relevant data.
- Industry-Based Comparisons: Compare companies within the same industry for deeper analysis and competitive benchmarking.

This API is ideal for investors, analysts, and industry researchers seeking to focus on specific sectors or industries for targeted research and insights.

Example: A financial analyst could use the Available Industries API to filter out companies within the Steel industry, enabling them to perform a more granular analysis of competitors and market trends within that industry.

Endpoint:

```plain
https://financialmodelingprep.com/stable/available-industries?apikey=
```

Response :

```json
[
  {
    "industry": "Steel"
  }
]
```

## Available Countries API

Access a comprehensive list of countries where stock symbols are available with the FMP Available Countries API. This API enables users to filter and analyze stock symbols based on the country of origin or the primary market where the securities are traded.

About Available Countries API :

The FMP Available Countries API offers users detailed access to country-based data, allowing them to:

- Filter by Country of Origin: Retrieve stock symbols based on the country where the companies are headquartered.
- Analyze Market Data by Country: Focus on stock exchanges and securities in specific countries for more localized market research.
- Country-Based Comparisons: Compare companies and securities from different countries for a global investment strategy.

This API is ideal for investors, analysts, and researchers looking to focus on specific countries or markets for deeper analysis.

Example: An investor could use the Available Countries API to focus on companies traded in the United Kingdom, enabling a detailed analysis of UK-listed securities for international investment opportunities.

Endpoint:

```plain
https://financialmodelingprep.com/stable/available-countries?apikey=
```

Response :

```json
[
  {
    "country": "FK"
  }
]
```
