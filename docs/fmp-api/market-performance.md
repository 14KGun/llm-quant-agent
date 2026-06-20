# Market Performance

## Market Sector Performance Snapshot API

Get a snapshot of sector performance using the Market Sector Performance Snapshot API. Analyze how different industries are performing in the market based on average changes across sectors.

About Market Sector Performance Snapshot API :

The FMP Market Sector Performance Snapshot API provides real-time insights into the performance of different sectors across various stock exchanges. This API allows users to track the average performance of industries like Basic Materials, Technology, Healthcare, and more. Key features include:

- Sector-Specific Performance Data: Access performance data for various sectors, including the average percentage change for each sector.
- Exchange-Specific Analysis: Analyze sector performance across specific exchanges such as NASDAQ, NYSE, and others.
- Daily Snapshots: Get daily updates on sector performance to track trends and market dynamics in real time.
- Cross-Industry Comparisons: Compare the performance of different sectors to identify growth or decline in key areas of the market.

Example: A portfolio manager uses the Market Sector Performance Snapshot API to review how different sectors performed on NASDAQ on a specific date, identifying that the Basic Materials sector experienced an average decline of -0.31%, and adjusts sector allocations accordingly.

Endpoint:

```plain
https://financialmodelingprep.com/stable/sector-performance-snapshot?date=2024-02-01&apikey=
```

Market Sector Performance Snapshot API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| date\*          | string | 2024-02-01 |
| exchange        | string | NASDAQ     |
| sector          | string | Energy     |

Response :

```json
[
  {
    "date": "2024-02-01",
    "sector": "Basic Materials",
    "exchange": "NASDAQ",
    "averageChange": -0.31481377464310634
  }
]
```

## Industry Performance Snapshot API

Access detailed performance data by industry using the Industry Performance Snapshot API. Analyze trends, movements, and daily performance metrics for specific industries across various stock exchanges.

About Industry Performance Snapshot API :

The FMP Industry Performance Snapshot API provides a daily overview of how specific industries are performing across major stock exchanges. Key features include:

- Industry-Level Performance Data: View average percentage changes for specific industries across major exchanges.
- Real-Time Market Insights: Analyze industry performance trends and movements in real time with daily updates.
- Exchange-Specific Data: Compare how different industries are performing on various stock exchanges like NASDAQ, NYSE, and others.
- In-Depth Industry Comparisons: Track and analyze the performance of specific industries to understand market trends and identify growth opportunities.

Example: A market analyst uses the Industry Performance Snapshot API to analyze the performance of the Advertising Agencies industry on a specific date, and finds that it posted an average gain of 3.87% on NASDAQ.

Endpoint:

```plain
https://financialmodelingprep.com/stable/industry-performance-snapshot?date=2024-02-01&apikey=
```

Industry Performance Snapshot API Parameters :

(\*) Required

| Query Parameter | Type   | Example     |
| :-------------- | :----- | :---------- |
| date\*          | string | 2024-02-01  |
| exchange        | string | NASDAQ      |
| industry        | string | Biotechnology |

Response :

```json
[
  {
    "date": "2024-02-01",
    "industry": "Advertising Agencies",
    "exchange": "NASDAQ",
    "averageChange": 3.8660194344955996
  }
]
```

## Historical Market Sector Performance API

Access historical sector performance data using the Historical Market Sector Performance API. Review how different sectors have performed over time across various stock exchanges.

About Historical Market Sector Performance API :

The FMP Historical Market Sector Performance API provides detailed historical data on the performance of market sectors, such as Energy, Technology, Healthcare, and others. Key features include:

- Historical Sector Performance: Access historical data on average percentage changes in various sectors over time.
- Exchange-Specific Data: Track how sectors have performed on different stock exchanges, including NASDAQ, NYSE, and others.
- Long-Term Market Trends: Analyze trends and sector performance data over extended periods, offering insights for long-term investment strategies.
- Cross-Sector Analysis: Compare the performance of multiple sectors to see how different areas of the market have evolved.

Example: An investor uses the Historical Market Sector Performance API to review the Energy sector's historical performance on NASDAQ, tracking the sector's performance over time to make more informed decisions about future investments.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-sector-performance?sector=Energy&apikey=
```

Historical Market Sector Performance API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| sector\*        | string | Energy     |
| exchange        | string | NASDAQ     |
| from            | string | 2024-02-01 |
| to              | string | 2024-03-01 |

Response :

```json
[
  {
    "date": "2024-03-01",
    "sector": "Energy",
    "exchange": "NASDAQ",
    "averageChange": 1.3989969286740689
  }
]
```

## Historical Industry Performance API

Access historical performance data for industries using the Historical Industry Performance API. Track long-term trends and analyze how different industries have evolved over time across various stock exchanges.

About Historical Industry Performance API :

The FMP Historical Industry Performance API provides detailed historical data on the performance of various industries, such as Biotechnology, Technology, Financial Services, and more. Key features include:

- Industry-Level Historical Data: Access performance data for specific industries, including average percentage changes over time.
- Exchange-Specific Performance: View how industries have performed on major stock exchanges like NASDAQ, NYSE, and others.
- Long-Term Trend Analysis: Analyze historical data to identify long-term industry trends and market shifts.
- Cross-Industry Comparisons: Compare the performance of different industries over time to identify growth areas and declining sectors.

Example: A financial analyst uses the Historical Industry Performance API to track the historical performance of the Biotechnology industry on NASDAQ, assessing how the industry has performed over time and determining if it aligns with their investment strategy.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-industry-performance?industry=Biotechnology&apikey=
```

Historical Industry Performance API Parameters :

(\*) Required

| Query Parameter | Type   | Example       |
| :-------------- | :----- | :------------ |
| industry\*      | string | Biotechnology |
| exchange        | string | NASDAQ        |
| from            | string | 2024-02-01    |
| to              | string | 2024-03-01    |

Response :

```json
[
  {
    "date": "2024-03-01",
    "industry": "Biotechnology",
    "exchange": "NASDAQ",
    "averageChange": 2.6143442556463383
  }
]
```

## Sector Pe Snapshot API

Retrieve the price-to-earnings (P/E) ratios for various sectors using the Sector P/E Snapshot API. Compare valuation levels across sectors to better understand market valuations.

About Sector Pe Snapshot API :

The FMP Sector P/E Snapshot API provides detailed data on the price-to-earnings (P/E) ratios of different market sectors, such as Basic Materials, Technology, Healthcare, and more. Key features include:

- P/E Ratio by Sector: Access up-to-date P/E ratios for various sectors, helping you compare their relative valuations.
- Exchange-Specific Data: View sector P/E ratios for specific exchanges, such as NASDAQ or NYSE.
- Daily Updates: Receive daily updates on sector P/E ratios to track changes in valuation levels over time.
- Valuation Comparisons: Compare the P/E ratios across multiple sectors to identify potential overvalued or undervalued sectors.

Example: A portfolio manager uses the Sector P/E Snapshot API to compare the P/E ratios of different sectors on NASDAQ, seeing that the Basic Materials sector has a P/E ratio of 15.69, and adjusts their portfolio accordingly.

Endpoint:

```plain
https://financialmodelingprep.com/stable/sector-pe-snapshot?date=2024-02-01&apikey=
```

Sector Pe Snapshot API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| date\*          | string | 2024-02-01 |
| exchange        | string | NASDAQ     |
| sector          | string | Energy     |

Response :

```json
[
  {
    "date": "2024-02-01",
    "sector": "Basic Materials",
    "exchange": "NASDAQ",
    "pe": 15.687711758428254
  }
]
```

## Industry Pe Snapshot API

View price-to-earnings (P/E) ratios for different industries using the Industry P/E Snapshot API. Analyze valuation levels across various industries to understand how each is priced relative to its earnings.

About Industry Pe Snapshot API :

The FMP Industry P/E Snapshot API provides detailed information on the price-to-earnings (P/E) ratios of various industries. Key features include:

- P/E Ratios by Industry: Access the most recent P/E ratios for industries across major stock exchanges.
- Daily Updates: Get daily snapshots of industry P/E ratios, helping track changes in valuations over time.
- Exchange-Specific Data: Analyze how industries are valued on different exchanges, such as NASDAQ or NYSE.
- Cross-Industry Comparisons: Compare P/E ratios across industries to identify potential investment opportunities or risks.

Example: An investor uses the Industry P/E Snapshot API to assess a specific industry on NASDAQ. Knowing the P/E ratio, the investor can determine if the industry is overvalued and adjust their portfolio accordingly.

Endpoint:

```plain
https://financialmodelingprep.com/stable/industry-pe-snapshot?date=2024-02-01&apikey=
```

Industry Pe Snapshot API Parameters :

(\*) Required

| Query Parameter | Type   | Example       |
| :-------------- | :----- | :------------ |
| date\*          | string | 2024-02-01    |
| exchange        | string | NASDAQ        |
| industry        | string | Biotechnology |

Response :

```json
[
  {
    "date": "2024-02-01",
    "industry": "Advertising Agencies",
    "exchange": "NASDAQ",
    "pe": 71.09601665201151
  }
]
```

## Historical Sector PE API

Access historical price-to-earnings (P/E) ratios for various sectors using the Historical Sector P/E API. Analyze how sector valuations have evolved over time to understand long-term trends and market shifts.

About Historical Sector PE API :

The FMP Historical Sector P/E API provides detailed historical data on the price-to-earnings (P/E) ratios of different sectors, such as Energy, Technology, and Healthcare. Key features include:

- Historical P/E Ratios by Sector: Access historical P/E ratios for various sectors, allowing you to track valuation trends.
- Exchange-Specific Data: Analyze sector valuations on specific exchanges, such as NASDAQ or NYSE.
- Long-Term Analysis: Review historical data to identify sector trends and how valuations have evolved over time.
- Cross-Sector Comparisons: Compare P/E ratios across multiple sectors to better understand relative valuations and market shifts.

Example: A portfolio manager uses the Historical Sector P/E API to review the historical P/E ratios of the Energy sector on NASDAQ, assessing how the sector's valuation has evolved and making informed decisions about future investments.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-sector-pe?sector=Energy&apikey=
```

Historical Sector PE API Parameters :

(\*) Required

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| sector\*        | string | Energy     |
| exchange        | string | NASDAQ     |
| from            | string | 2024-02-01 |
| to              | string | 2024-03-01 |

Response :

```json
[
  {
    "date": "2024-03-01",
    "sector": "Energy",
    "exchange": "NASDAQ",
    "pe": 5.4165892628211205
  }
]
```

## Historical Industry PE API

Access historical price-to-earnings (P/E) ratios by industry using the Historical Industry P/E API. Track valuation trends across various industries to understand how market sentiment and valuations have evolved over time.

About Historical Industry PE API :

The FMP Historical Industry P/E API provides detailed historical data on the price-to-earnings (P/E) ratios of different industries, such as Biotechnology, Financial Services, and Consumer Goods. Key features include:

- Industry-Specific P/E Data: Access historical P/E ratios for specific industries, helping you track how valuations have evolved over time.
- Exchange-Specific Analysis: View industry P/E ratios across different exchanges, including NASDAQ, NYSE, and more.
- Long-Term Valuation Trends: Analyze historical data to identify valuation trends and shifts in market sentiment within industries.
- Cross-Industry Comparisons: Compare P/E ratios across multiple industries to understand which sectors are undervalued or overvalued.

Example: A financial analyst uses the Historical Industry P/E API to review the historical P/E ratios of the Biotechnology industry on NASDAQ, determining whether the industry's current valuation reflects long-term market trends.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-industry-pe?industry=Biotechnology&apikey=
```

Historical Industry PE API Parameters :

(\*) Required

| Query Parameter | Type   | Example       |
| :-------------- | :----- | :------------ |
| industry\*      | string | Biotechnology |
| exchange        | string | NASDAQ        |
| from            | string | 2024-02-01    |
| to              | string | 2024-03-01    |

Response :

```json
[
  {
    "date": "2024-03-01",
    "industry": "Biotechnology",
    "exchange": "NASDAQ",
    "pe": 8.129037884885042
  }
]
```

## Biggest Stock Gainers API

Track the stocks with the largest price increases using the Top Stock Gainers API. Identify the companies that are leading the market with significant price surges, offering potential growth opportunities.

About Biggest Stock Gainers API :

The FMP Top Stock Gainers API provides real-time data on stocks that are experiencing the most significant price increases across major stock exchanges. Key features include:

- Top Gainers List: Access a real-time list of the stocks with the highest price increases.
- Real-Time Price & Percentage Changes: Track the current price, total price change, and percentage change for each stock.
- Exchange-Specific Data: View the top stock gainers on specific exchanges, such as NASDAQ, NYSE, and more.
- Company Information: Get key details on the leading companies, including their name, symbol, and price change information.

Example: A trader uses the Top Stock Gainers API to find stocks with the highest price increases on NASDAQ, identifying a 27.69% price increase candidate, and decides to take advantage of the momentum.

Endpoint:

```plain
https://financialmodelingprep.com/stable/biggest-gainers?apikey=
```

Response :

```json
[
  {
    "symbol": "MOTS",
    "price": 0.0002,
    "name": "Motus GI Holdings, Inc.",
    "change": 0.0001,
    "changesPercentage": 100,
    "exchange": "OTC"
  }
]
```

## Biggest Stock Losers API

Access data on the stocks with the largest price drops using the Biggest Stock Losers API. Identify companies experiencing significant declines and track the stocks that are falling the fastest in the market.

About Biggest Stock Losers API :

The FMP Biggest Stock Losers API provides real-time data on stocks that have seen the most substantial price declines across various exchanges. Key features include:

- Top Decliners List: Access a real-time list of stocks with the largest price drops across major exchanges.
- Real-Time Price Changes: Track current price data, total price changes, and percentage declines for each stock.
- Exchange-Specific Data: View the biggest stock decliners on exchanges like NASDAQ, NYSE, and others.
- Company Information: Get essential details about the companies, including their name, symbol, and exchange.

Example: A trader uses the Biggest Stock Losers API to identify stocks on NASDAQ experiencing rapid price declines, assessing whether to short the stock or consider it for a rebound play.

Endpoint:

```plain
https://financialmodelingprep.com/stable/biggest-losers?apikey=
```

Response :

```json
[
  {
    "symbol": "SPEC",
    "price": 0.0002,
    "name": "Spectaire Holdings Inc.",
    "change": -0.002,
    "changesPercentage": -90.90909,
    "exchange": "OTC"
  }
]
```

## Top Traded Stocks API

View the most actively traded stocks using the Top Traded Stocks API. Identify the companies experiencing the highest trading volumes in the market and track where the most trading activity is happening.

About Top Traded Stocks API :

The FMP Top Traded Stocks API provides real-time data on the stocks with the highest trading volumes across major stock exchanges. Key features include:

- Top Traded Stocks: Access a list of the most actively traded stocks based on trading volumes.
- Real-Time Volume Data: Track the trading volume, price changes, and percentage change for each stock.
- Exchange-Specific Data: Monitor the most actively traded stocks on specific exchanges, such as NASDAQ or NYSE.
- Company Information: Get essential details about the most traded companies, including their name, symbol, and trading volume.

Example: A day trader uses the Top Traded Stocks API to identify which stocks on NASDAQ are experiencing the highest trading volumes, deciding whether to enter a trade based on the stock's momentum and market interest.

Endpoint:

```plain
https://financialmodelingprep.com/stable/most-actives?apikey=
```

Response :

```json
[
  {
    "symbol": "LUCY",
    "price": 1.85,
    "name": "Innovative Eyewear, Inc.",
    "change": 0.06,
    "changesPercentage": 3.35196,
    "exchange": "NASDAQ"
  }
]
```
