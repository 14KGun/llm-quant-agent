# Chart

## Stock Chart Light API

Access simplified stock chart data using the FMP Basic Stock Chart API. This API provides essential charting information, including date, price, and trading volume, making it ideal for tracking stock performance with minimal data and creating basic price and volume charts.

About Stock Chart Light API :

The FMP Basic Stock Chart API delivers streamlined access to stock charting data for users who need to track price movements without overwhelming complexity. This API offers:

- Date & Price Information: Easily track daily price movements for a specific stock symbol.
- Volume Data: Stay informed about trading activity with volume data included for each date.
- Basic Charting Needs: Ideal for generating simple stock price and volume charts for historical performance analysis.

This API is perfect for users and developers who want a quick, straightforward way to visualize stock data without the need for detailed technical indicators.

Example: A financial app can use the Basic Stock Chart API to display a minimal chart showing a stock's daily closing price and volume, allowing users to quickly assess its performance over time.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=AAPL&apikey=
```

Stock Chart Light API Parameters :

(\*) Required | Maximum 5000 records per request

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbol\*        | string | AAPL       |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-27 |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-05",
    "price": 307.34,
    "volume": 65310502
  }
]
```

## Stock Price and Volume Data API

Access full price and volume data for any stock symbol using the FMP Comprehensive Stock Price and Volume Data API. Get detailed insights, including open, high, low, close prices, trading volume, price changes, percentage changes, and volume-weighted average price (VWAP).

About Stock Price and Volume Data API :

The FMP Comprehensive Stock Price and Volume Data API provides in-depth data on stock performance over time, making it an essential tool for analysts, traders, and investors. With this API, users can:

- Detailed Price Data: Access complete price information, including opening, closing, high, and low prices for each trading day.
- Trading Volume Insights: Retrieve data on daily trading volume to analyze liquidity and market activity.
- Price Changes and Percentages: Track absolute price changes and percentage shifts to evaluate price movements.
- VWAP (Volume-Weighted Average Price): Get the VWAP to measure the average price based on volume, helping to identify price trends and market behavior.

This API is perfect for users who require detailed and accurate stock price and volume data to make informed trading and investment decisions.

Example: A financial analyst can use the Comprehensive Stock Price and Volume Data API to monitor Apple's daily stock performance, analyzing price changes, VWAP, and trading volume to spot trends and predict future price movements.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=AAPL&apikey=
```

Stock Price and Volume Data API Parameters :

(\*) Required | Maximum 5000 records per request

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbol\*        | string | AAPL       |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-27 |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-05",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "change": -5.52,
    "changePercent": -1.76,
    "vwap": 310.63
  }
]
```

## Unadjusted Stock Price API

Access stock price and volume data without adjustments for stock splits with the FMP Unadjusted Stock Price Chart API. Get accurate insights into stock performance, including open, high, low, and close prices, along with trading volume, without split-related changes.

About Unadjusted Stock Price API :

The FMP Unadjusted Stock Price Chart API provides unadjusted historical price data, allowing traders, analysts, and investors to view stock performance without split-related adjustments. This is useful for users who want a clear view of how stock prices moved before and after stock splits. Key features include:

- Unadjusted Price Data: Access historical stock prices — open, high, low, and close — without any adjustments for stock splits.
- Volume Data: Retrieve daily trading volume for further analysis of market activity.
- Pre-Split Analysis: See how stock prices performed in their original form, making it easier to analyze trends prior to a split event.
- Clear Historical View: For investors and analysts looking to avoid the distortions caused by stock splits, this API delivers clear and unmodified data.

This API is ideal for anyone who needs accurate, split-free stock data for more precise historical analysis.

Example: A market researcher analyzing Apple stock performance before and after a split can use the Unadjusted Stock Price Chart API to get a clear view of stock prices without any split-related adjustments.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-price-eod/non-split-adjusted?symbol=AAPL&apikey=
```

Unadjusted Stock Price API Parameters :

(\*) Required | Maximum 5000 records per request

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbol\*        | string | AAPL       |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-27 |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-05",
    "adjOpen": 312.86,
    "adjHigh": 315.17,
    "adjLow": 307.15,
    "adjClose": 307.34,
    "volume": 65310502
  }
]
```

## Dividend Adjusted Price Chart API

Analyze stock performance with dividend adjustments using the FMP Dividend-Adjusted Price Chart API. Access end-of-day price and volume data that accounts for dividend payouts, offering a more comprehensive view of stock trends over time.

About Dividend Adjusted Price Chart API :

The FMP Dividend-Adjusted Price Chart API delivers EOD (end-of-day) price data that is adjusted for dividends, helping traders, analysts, and investors understand stock performance while factoring in dividend payments. Features include:

- Dividend-Adjusted Prices: Access historical stock prices — open, high, low, and close — that have been adjusted for dividend payouts, reflecting the true stock value.
- Volume Data: Retrieve daily trading volume to assess market activity alongside price movements.
- Accurate Performance Analysis: Use dividend-adjusted data to evaluate a stock's performance over time with the impact of dividends factored in.
- Enhanced Historical Insights: Ideal for long-term investors who want a clearer picture of stock growth and performance, while including the effect of dividends.

This API is a valuable tool for understanding total returns, making it easier to gauge a stock's historical performance by incorporating dividend impacts.

Example: An investor tracking the historical growth of Apple stock can use the Dividend-Adjusted Price Chart API to account for the effect of dividend payouts when analyzing stock price changes over time.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-price-eod/dividend-adjusted?symbol=AAPL&apikey=
```

Dividend Adjusted Price Chart API Parameters :

(\*) Required | Maximum 5000 records per request

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbol\*        | string | AAPL       |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-27 |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-05",
    "adjOpen": 312.86,
    "adjHigh": 315.17,
    "adjLow": 307.15,
    "adjClose": 307.34,
    "volume": 65310502
  }
]
```

## 1 Min Interval Stock Chart API

Access precise intraday stock price and volume data with the FMP 1-Minute Interval Stock Chart API. Retrieve real-time or historical stock data in 1-minute intervals, including key information such as open, high, low, and close prices, and trading volume for each minute.

About 1 Min Interval Stock Chart API :

The FMP 1-Minute Interval Stock Chart API is designed for traders, analysts, and investors who need detailed intraday stock data for technical analysis, high-frequency trading, or algorithmic strategies. With this API, you can:

- Detailed Intraday Data: Get stock prices at 1-minute intervals, including open, high, low, and close prices, as well as trading volume for each minute.
- Real-Time and Historical Data: Access real-time minute-by-minute data or retrieve historical data using specific date ranges, allowing for long-term analysis.
- Customization with Date Parameters: Easily pull data for any desired time frame by setting the `from` and `to` parameters.
- Intraday Charting: Perfect for building detailed intraday charts that provide deeper insights into short-term stock movements.
- Perfect for Day Traders: For day traders or algorithmic traders, this API offers the precision needed to identify short-term trends, fluctuations, and trading opportunities.

Example: A day trader can use the 1-Minute Interval Stock Chart API to track Apple's stock price movements throughout the trading day, enabling them to make timely buy and sell decisions based on real-time price changes and volume spikes.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-chart/1min?symbol=AAPL&apikey=
```

1 Min Interval Stock Chart API Parameters :

(\*) Required

| Query Parameter | Type    | Example    |
| :-------------- | :------ | :--------- |
| symbol\*        | string  | AAPL       |
| from            | date    | 2024-01-01 |
| to              | date    | 2024-03-01 |
| nonadjusted     | boolean | false      |

Response :

```json
[
  {
    "date": "2026-06-05 15:59:00",
    "open": 307.89,
    "low": 307.35,
    "high": 307.94,
    "close": 307.55,
    "volume": 100179
  }
]
```

## 5 Min Interval Stock Chart API

Access stock price and volume data with the FMP 5-Minute Interval Stock Chart API. Retrieve detailed stock data in 5-minute intervals, including open, high, low, and close prices, along with trading volume for each 5-minute period.

About 5 Min Interval Stock Chart API :

The FMP 5-Minute Interval Stock Chart API provides users with valuable stock data over 5-minute intervals, allowing for better insight into intraday market activity. Key features include:

- Short-Term Price Analysis: Track stock price movements over short periods with 5-minute interval data, providing an ideal solution for intraday traders.
- Precise Trading Data: Get open, high, low, and close prices, along with trading volume, for each 5-minute period to identify patterns and trends.
- Intraday Charting: Build detailed intraday charts for any stock symbol, allowing for enhanced visualization of short-term price trends.
- Historical Data Access: Use the API to retrieve historical 5-minute interval data, providing a broader scope for price analysis and trend identification.
- Efficient for Active Traders: This API is perfect for day traders and active investors who need fast, reliable data to make informed trading decisions.

Example: A day trader can use the 5-Minute Interval Stock Chart API to monitor Apple's stock throughout the trading day, identifying short-term trends and making timely trading decisions based on price fluctuations.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-chart/5min?symbol=AAPL&apikey=
```

5 Min Interval Stock Chart API Parameters :

(\*) Required

| Query Parameter | Type    | Example    |
| :-------------- | :------ | :--------- |
| symbol\*        | string  | AAPL       |
| from            | date    | 2024-01-01 |
| to              | date    | 2024-03-01 |
| nonadjusted     | boolean | false      |

Response :

```json
[
  {
    "date": "2026-06-05 15:55:00",
    "open": 308.82,
    "low": 307.35,
    "high": 308.82,
    "close": 307.55,
    "volume": 335694
  }
]
```

## 15 Min Interval Stock Chart API

Access stock price and volume data with the FMP 15-Minute Interval Stock Chart API. Retrieve detailed stock data in 15-minute intervals, including open, high, low, close prices, and trading volume.

About 15 Min Interval Stock Chart API :

The FMP 15-Minute Interval Stock Chart API is designed to provide a more balanced view of stock price movements throughout the trading day. By delivering key data at 15-minute intervals, this API offers medium-term insights for traders and investors. Key features include:

- Medium-Term Price Analysis: Monitor price fluctuations over 15-minute intervals, ideal for traders who need to identify intraday trends without analyzing every minute.
- Comprehensive Data Points: Access key metrics such as open, high, low, close prices, and trading volume to create detailed intraday charts.
- Flexible Intraday Monitoring: Suitable for traders and investors who need to track stock performance throughout the trading day.
- Historical Data Access: Retrieve historical 15-minute interval data to conduct in-depth analysis of past trading sessions and identify recurring patterns.
- Efficient Data Retrieval: Ideal for those who want a balance between fast-moving data and longer-term intraday data for smarter decision-making.

Example: A swing trader can use the 15-Minute Interval Stock Chart API to monitor Apple stock throughout the trading day, analyzing medium-term price movements to make strategic trade entries and exits based on significant fluctuations.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-chart/15min?symbol=AAPL&apikey=
```

15 Min Interval Stock Chart API Parameters :

(\*) Required

| Query Parameter | Type    | Example    |
| :-------------- | :------ | :--------- |
| symbol\*        | string  | AAPL       |
| from            | date    | 2024-01-01 |
| to              | date    | 2024-03-01 |
| nonadjusted     | boolean | false      |

Response :

```json
[
  {
    "date": "2026-06-05 15:45:00",
    "open": 308.1,
    "low": 307.35,
    "high": 309,
    "close": 307.55,
    "volume": 1326262
  }
]
```

## 30 Min Interval Stock Chart API

Access stock price and volume data with the FMP 30-Minute Interval Stock Chart API. Retrieve essential stock data in 30-minute intervals, including open, high, low, close prices, and trading volume.

About 30 Min Interval Stock Chart API :

The FMP 30-Minute Interval Stock Chart API is designed for traders and investors seeking medium-term price insights without monitoring every minute of the trading day. Key features include:

- Efficient Medium-Term Analysis: Monitor stock price fluctuations at 30-minute intervals, providing a clear view of price movements without the noise of smaller time frames.
- Detailed Price Metrics: Access important data points such as open, high, low, close prices, and trading volume to build comprehensive intraday charts.
- Ideal for Intraday Strategies: Supports trading strategies that rely on medium-term price movements and volume patterns.
- Historical Data Availability: Retrieve historical data for 30-minute intervals, helping you analyze trends and patterns from past trading sessions.
- Optimized for Trend Tracking: Offers an efficient solution for those looking to identify key trends during the trading day.

Example: A day trader uses the 30-Minute Interval Stock Chart API to monitor the performance of Apple stock over the course of a trading day, identifying important price patterns and volume changes to make calculated buy and sell decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-chart/30min?symbol=AAPL&apikey=
```

30 Min Interval Stock Chart API Parameters :

(\*) Required

| Query Parameter | Type    | Example    |
| :-------------- | :------ | :--------- |
| symbol\*        | string  | AAPL       |
| from            | date    | 2024-01-01 |
| to              | date    | 2024-03-01 |
| nonadjusted     | boolean | false      |

Response :

```json
[
  {
    "date": "2026-06-05 15:30:00",
    "open": 308.9,
    "low": 307.35,
    "high": 309,
    "close": 307.55,
    "volume": 3262071
  }
]
```

## 1 Hour Interval Stock Chart API

Track stock price movements over hourly intervals with the FMP 1-Hour Interval Stock Chart API. Access essential stock price and volume data, including open, high, low, and close prices for each hour, to analyze broader intraday trends with precision.

About 1 Hour Interval Stock Chart API :

The FMP 1-Hour Interval Stock Chart API is perfect for traders and investors who want to monitor hourly stock price movements. Key features include:

- Hourly Price Data: Access open, high, low, and close prices updated every hour to stay on top of stock performance throughout the trading day.
- Volume Tracking: Get insights into hourly trading volumes to understand market activity and liquidity at different times of the day.
- Broader Timeframe Analysis: Ideal for traders who focus on medium-to-long intraday trends, the API helps visualize price movements over a broader timeframe.
- Historical Data: Retrieve hourly historical data to analyze past price performance and identify trends over time.
- Ideal for Trend and Pattern Recognition: Use this data to identify key patterns such as support, resistance, or trend reversals over hourly intervals.

Example: A swing trader uses the 1-Hour Interval Stock Chart API to track the hourly performance of Apple stock throughout the day, helping them make informed buy and sell decisions based on observed trends and trading volume changes.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-chart/1hour?symbol=AAPL&apikey=
```

1 Hour Interval Stock Chart API Parameters :

(\*) Required

| Query Parameter | Type    | Example    |
| :-------------- | :------ | :--------- |
| symbol\*        | string  | AAPL       |
| from            | date    | 2024-01-01 |
| to              | date    | 2024-03-01 |
| nonadjusted     | boolean | false      |

Response :

```json
[
  {
    "date": "2026-06-05 15:30:00",
    "open": 308.9,
    "low": 307.35,
    "high": 309,
    "close": 307.55,
    "volume": 3262071
  }
]
```

## 4 Hour Interval Stock Chart API

Analyze stock price movements over extended intraday periods with the FMP 4-Hour Interval Stock Chart API. Access key stock price and volume data in 4-hour intervals, perfect for tracking longer intraday trends and understanding broader market movements.

About 4 Hour Interval Stock Chart API :

The FMP 4-Hour Interval Stock Chart API provides traders and investors with essential data points over longer intraday time frames, allowing for comprehensive trend analysis. Key features include:

- 4-Hour Price Intervals: Access open, high, low, and close prices, updated every 4 hours to provide a clearer view of intraday market trends.
- Volume Data: Understand market activity by tracking trading volumes during each 4-hour period.
- Ideal for Medium-Term Intraday Analysis: Longer intervals allow for deeper analysis of stock movements, helping to identify patterns and trends within a trading day.
- Historical Data: Retrieve past 4-hour price data to study trends and create broader price movement models.
- Intraday Market Strategy Support: Use the data to develop trading strategies that benefit from wider price movements and shifts within a trading session.

Example: A position trader uses the 4-Hour Interval Stock Chart API to monitor the longer intraday performance of Apple stock, allowing them to detect more substantial trends and price shifts without getting lost in short-term fluctuations.

Endpoint:

```plain
https://financialmodelingprep.com/stable/historical-chart/4hour?symbol=AAPL&apikey=
```

4 Hour Interval Stock Chart API Parameters :

(\*) Required

| Query Parameter | Type    | Example    |
| :-------------- | :------ | :--------- |
| symbol\*        | string  | AAPL       |
| from            | date    | 2024-01-01 |
| to              | date    | 2024-03-01 |
| nonadjusted     | boolean | false      |

Response :

```json
[
  {
    "date": "2026-06-05 13:30:00",
    "open": 311.5,
    "low": 307.16,
    "high": 312.81,
    "close": 307.55,
    "volume": 13535139
  }
]
```
