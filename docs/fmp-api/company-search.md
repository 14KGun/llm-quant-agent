# Company Search

## Stock Symbol Search API

Easily find the ticker symbol of any stock with the FMP Stock Symbol Search API. Search by symbol across multiple global markets.

About Stock Symbol Search API:

The FMP Stock Symbol Search API allows users to quickly and efficiently locate stock ticker symbols. Whether you're searching for U.S. stocks, international equities, or ETFs, this API provides fast, reliable results. Key features include:

- Simple Search: Enter a company name or ticker symbol to retrieve essential details like the symbol, company name, exchange, and currency.
- Global Market Access: Search across major stock exchanges, including NASDAQ, NYSE, and more.
- Accurate and Up-to-Date: The API delivers real-time results, ensuring you're always working with the latest ticker information.

The Stock Symbol Search API is perfect for traders, investors, or anyone needing quick access to stock symbols across different markets.

Endpoint:

```plain
https://financialmodelingprep.com/stable/search-symbol?query=AAPL&apikey=
```

Stock Symbol Search API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| --------------- | ------ | ------- |
| query\*         | string | AAPL    |
| limit           | number | 50      |
| exchange        | string | NASDAQ  |

Response :

```json
[
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "currency": "USD",
    "exchangeFullName": "NASDAQ Global Select",
    "exchange": "NASDAQ"
  }
]
```

## Company Name Search API

Search for ticker symbols, company names, and exchange details for equity securities and ETFs listed on various exchanges with the FMP Name Search API. This endpoint is useful for retrieving ticker symbols when you know the full or partial company or asset name but not the symbol identifier.

About Company Name Search API :

The FMP Name Search API provides an easy way to find the ticker symbols and exchange information for companies and ETFs. This endpoint is useful for retrieving ticker symbols when you know the company or asset name but not the symbol identifier.

Key Features of the Name Search API :

- Simple Company Name Lookup: Enter a company or asset name, and retrieve the corresponding ticker symbol, company name, and exchange details.
- Equity Securities and ETFs: Supports searches for a variety of listed equity securities and exchange-traded funds (ETFs) across major exchanges.
- Accurate and Up-to-Date Data: Receive real-time, accurate search results, ensuring you're always working with the latest available information.

How Investors and Analysts Can Benefit :

- Quick Symbol Lookup: Easily locate ticker symbols when you know the company name but not the corresponding symbol.
- Broad Market Coverage: Search across multiple exchanges for both domestic and international companies, helping you stay informed about different markets.
- Streamlined Workflow: Enhance your research and investment decisions by quickly identifying the correct symbols for analysis or trade execution.

Endpoint:

```plain
https://financialmodelingprep.com/stable/search-name?query=AA&apikey=
```

Company Name Search API Parameters :

(\*) Required

| Parameter | Type   | Example |
| :-------- | :----- | :------ |
| query\*   | string | AA      |
| limit     | number | 50      |
| exchange  | string | NASDAQ  |

Response :

```json
[
  {
    "symbol": "AAGUSD",
    "name": "AAG USD",
    "currency": "USD",
    "exchangeFullName": "CCC",
    "exchange": "CRYPTO"
  }
]
```

## Search Cik API

Easily retrieve the Central Index Key (CIK) for publicly traded companies with the FMP CIK API. Access unique identifiers needed for SEC filings and regulatory documents for a streamlined compliance and financial analysis process.

About Search Cik API :

The FMP CIK API is an essential tool for financial professionals, compliance officers, and analysts who need to quickly and accurately retrieve the Central Index Key (CIK) for a specific company. The CIK is a unique identifier used by the U.S. Securities and Exchange Commission (SEC) to track company filings, making it crucial for accessing corporate disclosures and financial data.

Key Features of the CIK API :

- Quick CIK Lookup: Retrieve a company’s CIK by entering its symbol or name, allowing for efficient access to SEC filings and other regulatory information.
- Essential for Compliance: Ensure accurate and timely access to SEC filings for regulatory compliance and corporate governance purposes.
- Comprehensive Market Coverage: Search for CIKs across companies listed on major U.S. stock exchanges like NASDAQ and the NYSE.

The CIK API is invaluable for anyone dealing with corporate filings and compliance, providing seamless access to essential company identifiers.

Example: Streamlined SEC Filings: A compliance officer can use the CIK API to quickly find a company’s CIK number and use it to retrieve all relevant SEC filings. This enables efficient monitoring of regulatory disclosures and financial statements.

Endpoint:

```plain
https://financialmodelingprep.com/stable/search-cik?cik=320193&apikey=
```

Search Cik API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| cik\*           | string | 320193  |
| limit           | number | 50      |

Response :

```json
[
  {
    "symbol": "AAPL",
    "companyName": "Apple Inc.",
    "cik": "0000320193",
    "exchangeFullName": "NASDAQ Global Select",
    "exchange": "NASDAQ",
    "currency": "USD"
  }
]
```

## CUSIP API

Easily search and retrieve financial securities information by CUSIP number using the FMP CUSIP API. Find key details such as company name, stock symbol, and market capitalization associated with the CUSIP.

About CUSIP API :

The FMP CUSIP API allows users to quickly retrieve comprehensive financial information linked to a specific CUSIP number (Committee on Uniform Securities Identification Procedures). This nine-character alphanumeric code uniquely identifies financial securities, making it an essential tool for investors, traders, and analysts.

Key features of the CUSIP API include:

- Accurate Identification: Find stock symbols and company names associated with specific CUSIP numbers, ensuring precise identification of securities.
- Comprehensive Data: Retrieve relevant financial details, including market capitalization, alongside CUSIP and stock symbol information.
- Versatility: The API supports various types of securities, including stocks, bonds, and mutual funds, offering a broad range of search capabilities across multiple financial markets.

This API is a valuable resource for financial professionals who need to identify and analyze securities efficiently by their CUSIP.

Example: A trader can use the CUSIP API to instantly locate the CUSIP number and market capitalization for Apple Inc. by simply searching for the stock symbol “AAPL,” streamlining the research process before executing a trade.

Endpoint:

```plain
https://financialmodelingprep.com/stable/search-cusip?cusip=037833100&apikey=
```

CUSIP API Parameters :

(\*) Required

| Query Parameter | Type   | Example   |
| :-------------- | :----- | :-------- |
| cusip\*         | string | 037833100 |

Response :

```json
[
  {
    "symbol": "AAPL.MX",
    "companyName": "Apple Inc.",
    "cusip": "037833100",
    "marketCap": 79126074220160
  }
]
```

## Search Isin API

Easily search and retrieve the International Securities Identification Number (ISIN) for financial securities using the FMP ISIN API. Find key details such as company name, stock symbol, and market capitalization associated with the ISIN.

About Search Isin API :

The FMP ISIN API allows users to quickly retrieve comprehensive financial information linked to a specific ISIN (International Securities Identification Number). This twelve-character alphanumeric code uniquely identifies financial securities globally, making it an essential tool for investors, traders, and financial analysts.

Key features of the ISIN API include:

- Accurate Identification: Quickly find stock symbols and company names associated with a specific ISIN, ensuring precise identification of global securities.
- Comprehensive Data: Retrieve relevant financial details such as the company name, stock symbol, ISIN, and market capitalization.
- Global Coverage: The ISIN API supports a wide range of international securities, including stocks, bonds, and mutual funds, offering a broad range of search capabilities across global markets.

This API is a valuable resource for financial professionals needing to identify and analyze securities efficiently by their ISIN for global investments or research.

Example: An investor can use the ISIN API to locate the ISIN and market capitalization for Apple Inc. by searching for the stock symbol “AAPL,” streamlining global investment research.

Endpoint:

```plain
https://financialmodelingprep.com/stable/search-isin?isin=US0378331005&apikey=
```

Search Isin API Parameters :

(\*) Required

| Query Parameter | Type   | Example      |
| :-------------- | :----- | :----------- |
| isin\*          | string | US0378331005 |

Response :

```json
[
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "isin": "US0378331005",
    "marketCap": 3900351299800
  }
]
```

## Stock Screener API

Discover stocks that align with your investment strategy using the FMP Stock Screener API. Filter stocks based on market cap, price, volume, beta, sector, country, and more to identify the best opportunities.

About Stock Screener API :

The FMP Company Stock Screener API is a versatile tool designed to help investors find stocks that meet their specific investment criteria. This API is essential for:

- Customizable Stock Searches: Screen stocks based on a wide range of criteria, including market cap, price, trading volume, beta, sector, and country. Tailor your searches to match your investment goals.
- Financial Criteria Filters: Go beyond basic metrics by screening stocks based on financial performance indicators such as profitability, growth, and valuation metrics, ensuring you find stocks that fit your financial strategy.
- Investment Opportunities: Use the Stock Screener API to build watchlists, identify new investment opportunities, and perform in-depth portfolio analysis.
  Whether you’re a beginner or an experienced investor, this API is a valuable resource for discovering stocks that align with your investment approach.

Example :

Building a Watchlist: An investor interested in technology stocks with a market cap of over $10 billion can use the Stock Screener API to filter and create a watchlist of potential investment opportunities. The investor can further refine the list based on other criteria such as beta and trading volume.

Endpoint:

```plain
https://financialmodelingprep.com/stable/company-screener?apikey=
```

Stock Screener API Parameters :

(\*) Required

| Query Parameter        | Type    | Example              |
| :--------------------- | :------ | :------------------- |
| marketCapMoreThan      | number  | 1000000              |
| marketCapLowerThan     | number  | 10000000000000       |
| sector                 | string  | Technology           |
| industry               | string  | Consumer Electronics |
| betaMoreThan           | number  | 0.5                  |
| betaLowerThan          | number  | 1.5                  |
| priceMoreThan          | number  | 10                   |
| priceLowerThan         | number  | 500                  |
| dividendMoreThan       | number  | 0.5                  |
| dividendLowerThan      | number  | 2                    |
| volumeMoreThan         | number  | 1000                 |
| volumeLowerThan        | number  | 100000000            |
| exchange               | string  | NASDAQ               |
| country                | string  | US                   |
| isEtf                  | boolean | false                |
| isFund                 | boolean | false                |
| isActivelyTrading      | boolean | true                 |
| page                   | number  | 0                    |
| limit                  | number  | 1000                 |
| includeAllShareClasses | boolean | false                |

Response :

```json
[
  {
    "symbol": "WIMA",
    "companyName": "WisdomTree International Adaptive Moving Average Fund",
    "marketCap": null,
    "sector": "Financial Services",
    "industry": "Asset Management",
    "beta": null,
    "price": 41.3753,
    "lastAnnualDividend": null,
    "volume": 9247,
    "exchange": "NASDAQ Global Market",
    "exchangeShortName": "NASDAQ",
    "country": "US",
    "isEtf": false,
    "isFund": true,
    "isActivelyTrading": true
  }
]
```

## Exchange Variants API

Search across multiple public exchanges to find where a given stock symbol is listed using the FMP Exchange Variants API. This allows users to quickly identify all the exchanges where a security is actively traded.

About Exchange Variants API :

The FMP Exchange Variants API is a powerful tool that provides essential data on where a particular stock is listed across different global exchanges. This API is critical for:

- Multi-Exchange Search: Easily find all public exchanges where a specific stock is listed, ensuring you have a complete understanding of a company's trading activity worldwide.
- Detailed Stock Information: The API returns not only the exchanges where a stock is listed but also includes key financial data such as price, market cap, volume, and beta, allowing for a thorough analysis of the stock.
- Broad Market Coverage: With support for major international exchanges, users can access data from global markets, making it easier to track securities listed in different regions.

This API is a valuable resource for investors, traders, and analysts who need a global view of where securities are traded.

Example: A trader looking for Apple Inc. (AAPL) can use the Exchange Variants API to retrieve a list of exchanges where Apple’s stock is traded, along with crucial financial data like market cap, price range, and average trading volume.

Endpoint:

```plain
https://financialmodelingprep.com/stable/search-exchange-variants?symbol=AAPL&apikey=
```

Exchange Variants API Parameters :

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
    "beta": 1.086,
    "volAvg": 44645993,
    "mktCap": 3900351299800,
    "lastDiv": 1.05,
    "range": "195.07-316.94",
    "changes": 3.24,
    "companyName": "Apple Inc.",
    "currency": "USD",
    "cik": "0000320193",
    "isin": "US0378331005",
    "cusip": "037833100",
    "exchange": "NASDAQ Global Select",
    "exchangeShortName": "NASDAQ",
    "industry": "Consumer Electronics",
    "website": "https://www.apple.com",
    "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discov...",
    "ceo": "Timothy D. Cook",
    "sector": "Technology",
    "country": "US",
    "fullTimeEmployees": "164000",
    "phone": "(408) 996-1010",
    "address": "One Apple Park Way",
    "city": "Cupertino",
    "state": "CA",
    "zip": "95014",
    "dcfDiff": 162.74174,
    "dcf": 144.59825927349374,
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
