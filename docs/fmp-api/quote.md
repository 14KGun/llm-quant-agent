# Quote

## Stock Quote API

Access real-time stock quotes with the FMP Stock Quote API. Get up-to-the-minute prices, changes, and volume data for individual stocks.

About Stock Quote API :

The FMP Stock Quote API provides detailed, real-time stock data for individual stocks, making it a valuable tool for investors, traders, and financial analysts. This API helps you:

- Monitor Real-Time Prices: Stay updated with the latest stock prices to make informed trading decisions.
- Analyze Stock Movements: Track key data points such as price changes, volume, day highs and lows, and yearly highs and lows.
- Portfolio Tracking: Use real-time data to keep track of stock performance in your portfolio.

Whether you are monitoring individual stocks or building trading strategies, this API ensures that you have the most up-to-date information.

Endpoint:

```plain
https://financialmodelingprep.com/stable/quote?symbol=AAPL&apikey=
```

Stock Quote API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "price": 232.8,
    "changePercentage": 2.1008,
    "change": 4.79,
    "volume": 44489128,
    "dayLow": 226.65,
    "dayHigh": 233.13,
    "yearHigh": 260.1,
    "yearLow": 164.08,
    "marketCap": 3500823120000,
    "priceAvg50": 240.2278,
    "priceAvg200": 219.98755,
    "exchange": "NASDAQ",
    "open": 227.2,
    "previousClose": 228.01,
    "timestamp": 1738702801
  }
]
```

## Stock Quote Short API

Get quick snapshots of real-time stock quotes with the FMP Stock Quote Short API. Access key stock data like current price, volume, and price changes for instant market insights.

About Stock Quote Short API :

The FMP Stock Quote Short API provides a concise, real-time snapshot of essential stock information, making it perfect for quick checks and streamlined data retrieval. This API is ideal for:

- Quick Stock Monitoring: Get key data such as current stock price, price change, and trading volume with minimal delay.
- High-Frequency Trading: Traders looking for rapid updates can use this API to stay ahead of the market in a streamlined format.
- Simplified Data Feed: For applications requiring lightweight data, the short format is efficient and easy to integrate.

This API delivers the core metrics you need to make fast, informed trading decisions without unnecessary data points.

Endpoint:

```plain
https://financialmodelingprep.com/stable/quote-short?symbol=AAPL&apikey=
```

Stock Quote Short API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "price": 232.8,
    "change": 4.79,
    "volume": 44489128
  }
]
```

## Aftermarket Trade API

Track real-time trading activity occurring after regular market hours with the FMP Aftermarket Trade API. Access key details such as trade prices, sizes, and timestamps for trades executed during the post-market session.

About Aftermarket Trade API :

The FMP Aftermarket Trade API allows investors to monitor trades made outside of standard market hours, offering insights into post-market trading activity. This API is ideal for:

- After-Hours Monitoring: Stay informed about stock prices and trading activity in the aftermarket session to track price movements outside the main trading day.
- Investor Insights: Detect trends or patterns in aftermarket trades that could provide valuable information ahead of the next trading session.
- Enhanced Trading Strategies: Use aftermarket data to adjust trading strategies for the next day or make more informed decisions based on overnight market activity.

This API helps users gain visibility into the post-market period, enabling more comprehensive tracking of market activity outside traditional trading hours.

Endpoint:

```plain
https://financialmodelingprep.com/stable/aftermarket-trade?symbol=AAPL&apikey=
```

Aftermarket Trade API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "price": 232.53,
    "tradeSize": 132,
    "timestamp": 1738715334311
  }
]
```

## Aftermarket Quote API

Access real-time aftermarket stock quotes with the FMP Aftermarket Quote API. Track bid and ask prices, volume, and other relevant data outside of regular trading hours.

About Aftermarket Quote API :

The FMP Aftermarket Stock Quote API provides comprehensive quotes for stocks traded outside of normal market hours. This API is essential for:

- Tracking Aftermarket Stock Movers: See real-time bid and ask prices, volumes, and other key metrics after the stock market closes.
- Strategic Analysis: Use aftermarket stock quotes to gain insights into market sentiment and stock performance beyond regular trading hours, helping you make better decisions for the next trading session.
- Efficient Market Monitoring: Stay updated on price movements and trends that can affect next-day trading strategies.

With the Aftermarket Stock Price API, investors can efficiently monitor post-market movements, bid-ask spreads, and trading volumes to stay ahead of potential shifts in the market.

Endpoint:

```plain
https://financialmodelingprep.com/stable/aftermarket-quote?symbol=AAPL&apikey=
```

Aftermarket Quote API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "bidSize": 1,
    "bidPrice": 232.45,
    "askSize": 3,
    "askPrice": 232.64,
    "volume": 41647042,
    "timestamp": 1738715334311
  }
]
```

## Stock Price Change API

Track stock price fluctuations in real-time with the FMP Stock Price Change API. Monitor percentage and value changes over various time periods, including daily, weekly, monthly, and long-term.

About Stock Price Change API :

The FMP Stock Price Change API allows you to stay updated on the real-time performance of stocks by tracking price changes across multiple timeframes. This API is essential for:

- Real-Time Monitoring: Track percentage and value changes in stock prices over different time intervals, such as 1 day, 5 days, 1 month, and up to 10 years.
- Investment Strategy: Use the data to identify trends in stock performance, helping you make informed decisions based on short-term and long-term price movements.
- Comparative Analysis: Compare price changes across multiple timeframes to assess a stock's performance over time, helping you adjust your portfolio or strategy accordingly.

This API is a valuable resource for investors, traders, and analysts who need detailed stock performance data to inform their strategies and decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/stock-price-change?symbol=AAPL&apikey=
```

Stock Price Change API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "1D": 2.1008,
    "5D": -2.45946,
    "1M": -4.33925,
    "3M": 4.86014,
    "6M": 5.88556,
    "ytd": -4.53147,
    "1Y": 24.04092,
    "3Y": 35.04264,
    "5Y": 192.05871,
    "10Y": 678.8558,
    "max": 181279.04168
  }
]
```

## Stock Batch Quote API

Retrieve multiple real-time stock quotes in a single request with the FMP Stock Batch Quote API. Access current prices, volume, and detailed data for multiple companies at once, making it easier to track large portfolios or monitor multiple stocks simultaneously.

About Stock Batch Quote API :

The FMP Stock Batch Quote API allows users to retrieve quotes for multiple stocks in one streamlined request. This API is ideal for:

- Portfolio Monitoring: Track several stocks in real-time, perfect for investors or portfolio managers who need to monitor multiple holdings at once.
- Data Efficiency: Instead of making multiple calls, get detailed stock data for several companies in a single API request, reducing complexity.
- Comprehensive Stock Insights: Access detailed data for each stock, including the current price, volume, day high/low, 50-day and 200-day moving averages, and more.

This API ensures efficient data retrieval for investors, traders, and applications requiring comprehensive real-time stock data for multiple symbols.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-quote?symbols=AAPL&apikey=
```

Stock Batch Quote API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbols\*       | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "price": 232.8,
    "changePercentage": 2.1008,
    "change": 4.79,
    "volume": 44489128,
    "dayLow": 226.65,
    "dayHigh": 233.13,
    "yearHigh": 260.1,
    "yearLow": 164.08,
    "marketCap": 3500823120000,
    "priceAvg50": 240.2278,
    "priceAvg200": 219.98755,
    "exchange": "NASDAQ",
    "open": 227.2,
    "previousClose": 228.01,
    "timestamp": 1738702801
  }
]
```

## Stock Batch Quote Short API

Access real-time, short-form quotes for multiple stocks with the FMP Stock Batch Quote Short API. Get a quick snapshot of key stock data such as current price, change, and volume for several companies in one streamlined request.

About Stock Batch Quote Short API :

The FMP Stock Batch Quote Short API is designed for users who need quick, high-level data for multiple stocks in one go. This API is ideal for:

- Quick Price Monitoring: Get a snapshot of current prices, changes, and volume for several stocks at once, helping you keep tabs on market trends.
- Portfolio Efficiency: Track essential stock data for multiple holdings in a single request, perfect for portfolio managers or traders who need rapid updates.
- Streamlined Data Retrieval: Skip the detailed data and focus on the basics—price, change, and volume—giving you the key insights quickly and efficiently.

This API provides a fast and efficient way to monitor key stock information for multiple companies, all in one simple request.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-quote-short?symbols=AAPL&apikey=
```

Stock Batch Quote Short API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbols\*       | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "price": 232.8,
    "change": 4.79,
    "volume": 44489128
  }
]
```

## Batch Aftermarket Trade API

Retrieve real-time aftermarket trading data for multiple stocks with the FMP Batch Aftermarket Trade API. Track post-market trade prices, volumes, and timestamps across several companies simultaneously.

About Batch Aftermarket Trade API :

The FMP Batch Aftermarket Trade API provides detailed aftermarket trading data for multiple stocks in a single request. This API is perfect for:

- Monitoring Multiple Stocks: Stay updated on post-market trades for various companies, allowing you to track price movements and trading activity after regular market hours.
- Efficient Data Access: Instead of retrieving data for each stock individually, this API lets you access aftermarket trading information for a batch of stocks all at once.
- Enhanced Investment Decisions: Use real-time data from the aftermarket session to analyze trends or patterns across multiple stocks, helping you prepare for the next trading day.

With this API, investors can efficiently track post-market activity for several stocks, enabling more comprehensive analysis and strategy adjustments.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-aftermarket-trade?symbols=AAPL&apikey=
```

Batch Aftermarket Trade API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbols\*       | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "price": 232.53,
    "tradeSize": 132,
    "timestamp": 1738715334311
  }
]
```

## Batch Aftermarket Quote API

Retrieve real-time aftermarket quotes for multiple stocks with the FMP Batch Aftermarket Quote API. Access bid and ask prices, volume, and other relevant data for several companies during post-market trading.

About Batch Aftermarket Quote API :

The FMP Batch Aftermarket Quote API allows you to efficiently track aftermarket trading activity for multiple stocks at once. This API is ideal for:

- Monitoring Multiple Stocks: Get bid and ask prices, volume, and other key aftermarket data for several stocks simultaneously, providing a comprehensive view of post-market movements.
- Post-Market Strategy: Use batch data to analyze stock performance and develop strategies based on aftermarket trends that can affect the next trading session.
- Streamlined Data Access: Track the aftermarket trading environment across your portfolio or watchlist in one single request.

The Batch Aftermarket Quote API helps investors make quicker, more informed decisions by providing real-time data on several stocks after normal market hours.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-aftermarket-quote?symbols=AAPL&apikey=
```

Batch Aftermarket Quote API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbols\*       | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "bidSize": 1,
    "bidPrice": 232.45,
    "askSize": 3,
    "askPrice": 232.64,
    "volume": 41647042,
    "timestamp": 1738715334311
  }
]
```

## Exchange Stock Quotes API

Retrieve real-time stock quotes for all listed stocks on a specific exchange with the FMP Exchange Stock Quotes API. Track price changes and trading activity across the entire exchange.

About Exchange Stock Quotes API :

The FMP Exchange Stock Quotes API allows users to access real-time quotes for all stocks trading on a specific exchange. This API is crucial for:

- Comprehensive Exchange Monitoring: Track every stock listed on a particular exchange, providing a complete view of the market activity.
- Real-Time Trading Data: Access up-to-date price quotes, volume, and change information for all stocks, allowing you to monitor trading trends.
- Portfolio Management: Compare performance across multiple stocks on the same exchange to make well-informed investment decisions.

This API is ideal for investors, analysts, and traders who need an overview of trading activity and stock performance on a specific exchange.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-exchange-quote?exchange=NASDAQ&apikey=
```

Exchange Stock Quotes API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| exchange\*      | string  | NASDAQ  |
| short           | boolean | true    |

Response :

```json
[
  {
    "symbol": "AAACX",
    "price": 6.38,
    "change": 0,
    "volume": 0
  }
]
```

## Mutual Fund Price Quotes API

Access real-time quotes for mutual funds with the FMP Mutual Fund Price Quotes API. Track current prices, performance changes, and key data for various mutual funds.

About Mutual Fund Price Quotes API :

The FMP Mutual Fund Price Quotes API provides real-time price information and performance updates for mutual funds. Investors and analysts can use this API to:

- Monitor Mutual Fund Performance: Stay updated on the latest price movements and performance changes of mutual funds.
- Track Investment Value: Use price data to assess the value of your mutual fund investments in real-time.
- Analyze Trends: Compare performance across multiple mutual funds to make informed investment decisions and portfolio adjustments.

This API is an essential tool for investors seeking to stay informed on mutual fund prices and performance data.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-mutualfund-quotes?apikey=
```

Mutual Fund Price Quotes API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| short           | boolean | true    |

Response :

```json
[
  {
    "symbol": "ARCFX",
    "price": 9.84,
    "change": 0.01,
    "volume": 0
  }
]
```

## ETF Price Quotes API

Get real-time price quotes for exchange-traded funds (ETFs) with the FMP ETF Price Quotes API. Track current prices, performance changes, and key data for a wide variety of ETFs.

About ETF Price Quotes API :

The FMP ETF Price Quotes API allows investors to access real-time pricing information and performance updates for ETFs. This API is essential for those looking to:

- Monitor ETF Performance: Stay updated on the latest prices and performance metrics of different ETFs.
- Evaluate Investment Opportunities: Use real-time price data to assess the value of ETFs and make informed investment decisions.
- Compare ETFs: Easily track and compare the performance of multiple ETFs to optimize your portfolio strategy.

This API provides comprehensive information for investors and analysts looking to make data-driven decisions regarding their ETF investments.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-etf-quotes?apikey=
```

ETF Price Quotes API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| short           | boolean | true    |

Response :

```json
[
  {
    "symbol": "GULF",
    "price": 16.335,
    "change": 0.13,
    "volume": 3032
  }
]
```

## Full Commodities Quotes API

Get up-to-the-minute quotes for commodities with the FMP Commodities Quotes API. Track the latest prices, changes, and volumes for a wide range of commodities, including oil, gold, and agricultural products.

About Full Commodities Quotes API :

The FMP Commodities Quotes API provides access to latest pricing information for various commodities. This API is an essential tool for:

- Tracking Key Commodities: Monitor real-time prices for commodities such as oil, gold, natural gas, and agricultural products.
- Making Timely Investment Decisions: Stay informed about price changes and volume to make well-timed trades or investments.
- Market Analysis: Use live data to analyze trends and fluctuations in commodity markets, helping you stay ahead of market movements.

Whether you are a trader, investor, or analyst, this API delivers crucial data to keep you informed on the commodities markets.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-commodity-quotes?apikey=
```

Full Commodities Quotes API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| short           | boolean | true    |

Response :

```json
[
  {
    "symbol": "DCUSD",
    "price": 19.89,
    "change": 0.23,
    "volume": 442
  }
]
```

## Full Cryptocurrency Quotes API

Access real-time cryptocurrency quotes with the FMP Full Cryptocurrency Quotes API. Track live prices, trading volumes, and price changes for a wide range of digital assets.

About Full Cryptocurrency Quotes API :

The FMP Full Cryptocurrency Quotes API offers comprehensive real-time data on cryptocurrency prices, including the latest trading prices, volumes, and price fluctuations. This API is essential for:

- Monitoring Market Prices: Keep track of live cryptocurrency prices to make informed trading decisions.
- Analyzing Market Movements: Stay updated with real-time changes and volume data to identify potential opportunities in the digital asset market.
- Portfolio Management: Use the API to follow the performance of specific cryptocurrencies in your portfolio and adjust your strategy accordingly.

This API is ideal for traders, investors, and analysts who want accurate and up-to-date information about cryptocurrency markets.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-crypto-quotes?apikey=
```

Full Cryptocurrency Quotes API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| short           | boolean | true    |

Response :

```json
[
  {
    "symbol": "00USD",
    "price": 0.03071157,
    "change": -0.0026034,
    "volume": 169600
  }
]
```

## Full Forex Quote API

Retrieve real-time quotes for multiple forex currency pairs with the FMP Batch Forex Quote API. Get real-time price changes and updates for a variety of forex pairs in a single request.

About Full Forex Quote API :

The FMP Batch Forex Quote API allows users to track real-time exchange rates for multiple currency pairs at once. This API is ideal for those who need to monitor numerous forex pairs simultaneously. Key features include:

- Multiple Currency Pair Tracking: Retrieve real-time quotes for several forex pairs in one request, streamlining market analysis.
- Comprehensive Forex Data: Access up-to-date prices, price changes, and trading volumes across a wide range of global currencies.
- Efficient Market Monitoring: Ideal for traders or analysts monitoring multiple currency pairs in fast-moving forex markets.

The Batch Forex Quote API is a powerful tool for tracking global forex market trends and staying informed on price fluctuations for multiple pairs.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-forex-quotes?apikey=
```

Full Forex Quote API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| short           | boolean | true    |

Response :

```json
[
  {
    "symbol": "AEDAUD",
    "price": 0.43575,
    "change": 0.0009547891,
    "volume": 344
  }
]
```

## Full Index Quotes API

Track real-time movements of major stock market indexes with the FMP Stock Market Index Quotes API. Access live quotes for global indexes and monitor changes in their performance.

About Full Index Quotes API :

The FMP Stock Market Index Quotes API provides real-time data for various stock market indexes, offering key insights into the performance of entire markets. Features include:

- Live Index Data: Access up-to-the-minute quotes for major stock market indexes like the S&P 500, Dow Jones, and others.
- Price Movement Tracking: Stay informed on index price changes and fluctuations throughout the trading day.
- Global Market Coverage: Follow performance for indexes across global markets, helping investors and analysts assess market sentiment and trends.

This API is ideal for traders, investors, and financial professionals who need to stay updated on the movement of key stock market indexes.

Endpoint:

```plain
https://financialmodelingprep.com/stable/batch-index-quotes?apikey=
```

Full Index Quotes API Parameters :

(\*) Required

| Query Parameter | Type    | Example |
| :-------------- | :------ | :------ |
| short           | boolean | true    |

Response :

```json
[
  {
    "symbol": "^DJBGIE",
    "price": 4277.52,
    "change": -15.7,
    "volume": 0
  }
]
```
