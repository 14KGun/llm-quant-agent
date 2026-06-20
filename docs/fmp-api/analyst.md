# Analyst

## Financial Estimates API

Retrieve analyst financial estimates for stock symbols with the FMP Financial Estimates API. Access projected figures like revenue, earnings per share (EPS), and other key financial metrics as forecasted by industry analysts to inform your investment decisions.

About Financial Estimates API :

The FMP Financial Estimates API is an invaluable resource for investors who want a deeper understanding of a company's projected performance. By collecting forecasts from leading financial analysts, this API provides essential insights into:

- Revenue Projections: Get estimates on future company revenue, offering a glimpse into anticipated growth trends.
- Earnings Per Share (EPS) Forecasts: Access analyst predictions on a company's future earnings, which are critical for evaluating profitability.
- Consensus Metrics: View consensus estimates from multiple analysts, providing a comprehensive outlook on the market's expectations.
- Investment Planning: Use these estimates to benchmark a company's projected performance, identify potential over- or undervalued stocks, and refine your investment strategies.

The Financial Estimates API is ideal for investors, traders, and financial analysts looking to build more accurate financial models or make informed investment decisions based on market forecasts.

Endpoint:

```plain
https://financialmodelingprep.com/stable/analyst-estimates?symbol=AAPL&period=annual&page=0&limit=10&apikey=
```

Financial Estimates API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| period\*        | string | annual  |
| page            | number | 0       |
| limit           | number | 10      |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2030-09-27",
    "revenueLow": 626395080065,
    "revenueHigh": 691467177041,
    "revenueAvg": 648898666667,
    "ebitdaLow": 226087880398,
    "ebitdaHigh": 249574674829,
    "ebitdaAvg": 234210211428,
    "ebitLow": 209796492582,
    "ebitHigh": 231590881052,
    "ebitAvg": 217333546576,
    "netIncomeLow": 183687950827,
    "netIncomeHigh": 208765000830,
    "netIncomeAvg": 192360215552,
    "sgaExpenseLow": 40316327360,
    "sgaExpenseHigh": 44504527503,
    "sgaExpenseAvg": 41764713519,
    "epsAvg": 12.82,
    "epsHigh": 13.91331,
    "epsLow": 12.24203,
    "numAnalystsRevenue": 17,
    "numAnalystsEps": 15
  }
]
```

## Ratings Snapshot API

Quickly assess the financial health and performance of companies with the FMP Ratings Snapshot API. This API provides a comprehensive snapshot of financial ratings for stock symbols in our database, based on various key financial ratios.

About Ratings Snapshot API :

The FMP Ratings Snapshot API allows users to evaluate a company's financial performance across multiple dimensions by delivering:

- Overall Rating: Get a summary score that reflects the company's financial standing.
- Discounted Cash Flow (DCF) Score: Understand the company's valuation compared to its future cash flow potential.
- Return on Equity (ROE) Score: Measure how efficiently a company is generating profit relative to shareholders' equity.
- Return on Assets (ROA) Score: Gauge how effectively a company uses its assets to generate earnings.
- Debt-to-Equity Score: Analyze the company's capital structure and risk by comparing its debt to equity.
- Price-to-Earnings (P/E) Score: Assess the company's stock price relative to its earnings to understand its valuation.
- Price-to-Book (P/B) Score: Compare the company's market price to its book value to evaluate potential investment opportunities.

This API is perfect for investors, financial analysts, and researchers who need a fast, comprehensive view of a company's financial health based on key metrics.

Example: An equity analyst can use the Ratings Snapshot API to compare multiple companies' financial health based on return on equity, debt levels, and valuation ratios, helping them make more informed investment recommendations.

Endpoint:

```plain
https://financialmodelingprep.com/stable/ratings-snapshot?symbol=AAPL&apikey=
```

Ratings Snapshot API Parameters :

(\*) Required | Maximum 1 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "rating": "B",
    "overallScore": 3,
    "discountedCashFlowScore": 3,
    "returnOnEquityScore": 5,
    "returnOnAssetsScore": 5,
    "debtToEquityScore": 1,
    "priceToEarningsScore": 2,
    "priceToBookScore": 1
  }
]
```

## Historical Ratings API

Track changes in financial performance over time with the FMP Historical Ratings API. This API provides access to historical financial ratings for stock symbols in our database, allowing users to view ratings and key financial metric scores for specific dates.

About Historical Ratings API :

The FMP Historical Ratings API is ideal for analysts and investors looking to assess how a company's financial health has evolved over time. Key features include:

- Historical Ratings: Retrieve ratings from past dates to track a company's financial trajectory.
- Overall Rating: Access an easy-to-understand rating summarizing the company's financial health on a given date.
- Discounted Cash Flow (DCF) Score: Evaluate historical valuation compared to future cash flow potential.
- Return on Equity (ROE) Score: Track past performance on generating profit relative to shareholders' equity.
- Return on Assets (ROA) Score: View how asset utilization has changed over time.
- Debt-to-Equity Score: Examine changes in the company's capital structure.
- Price-to-Earnings (P/E) Score: Monitor historical stock valuation relative to earnings.
- Price-to-Book (P/B) Score: Assess how market price has compared to book value in the past.

This API is ideal for conducting trend analysis and understanding how various financial metrics have influenced a company's rating over time.

Example: A portfolio manager can use the Historical Ratings API to analyze how a company's return on equity and debt-to-equity ratios have evolved over the last five years, helping them evaluate long-term performance trends.

Endpoint:

```plain
https://financialmodelingprep.com/stable/ratings-historical?symbol=AAPL&apikey=
```

Historical Ratings API Parameters :

(\*) Required | Maximum 10000 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 1       |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-05",
    "rating": "B",
    "overallScore": 3,
    "discountedCashFlowScore": 3,
    "returnOnEquityScore": 5,
    "returnOnAssetsScore": 5,
    "debtToEquityScore": 1,
    "priceToEarningsScore": 2,
    "priceToBookScore": 1
  }
]
```

## Price Target Summary API

Gain insights into analysts' expectations for stock prices with the FMP Price Target Summary API. This API provides access to average price targets from analysts across various timeframes, helping investors assess future stock performance based on expert opinions.

About Price Target Summary API :

The FMP Price Target Summary API allows users to track and analyze analysts' price targets for individual stocks, making it a valuable tool for investors and analysts looking to understand market sentiment. Key features include:

- Average Price Targets: Access average price targets from analysts over different periods (last month, last quarter, last year, and all time).
- Price Target History: Track how price expectations have evolved over time to gauge changes in analysts' outlooks.
- Analyst Coverage: Retrieve the number of analysts providing price targets during specific periods.
- Multiple Publishers: View a list of sources and publishers providing price target data, such as Benzinga, MarketWatch, and Barrons.

This API allows you to quickly assess the consensus among financial analysts regarding a stock's future price movement.

Example: An investor can use the Price Target Summary API to compare the average price targets for a stock over the past quarter and year to determine if analysts' outlooks have become more bullish or bearish over time.

Endpoint:

```plain
https://financialmodelingprep.com/stable/price-target-summary?symbol=AAPL&apikey=
```

Price Target Summary API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "lastMonthCount": 3,
    "lastMonthAvgPriceTarget": 380,
    "lastQuarterCount": 10,
    "lastQuarterAvgPriceTarget": 322.6,
    "lastYearCount": 58,
    "lastYearAvgPriceTarget": 293.43,
    "allTimeCount": 242,
    "allTimeAvgPriceTarget": 225.33,
    "publishers": "[\"TheFly\",\"StreetInsider\",\"Benzinga\",\"Pulse 2.0\",\"TipRanks Contributor\",\"MarketWatch\",\"Investing\",\"Barrons\",\"Investor's Business Daily\"]"
  }
]
```

## Price Target Consensus API

Access analysts' consensus price targets with the FMP Price Target Consensus API. This API provides high, low, median, and consensus price targets for stocks, offering investors a comprehensive view of market expectations for future stock prices.

About Price Target Consensus API :

The FMP Price Target Consensus API delivers key insights into stock price forecasts by aggregating price targets from analysts. This allows investors to make more informed decisions based on the following metrics:

- High Price Target: See the highest price target forecasted by analysts.
- Low Price Target: Access the lowest expected price for a stock, providing insight into downside risk.
- Median Price Target: Get the median price target to understand the central tendency of analysts' predictions.
- Consensus Price Target: Retrieve the overall consensus target, which reflects the average of analysts' forecasts.

This API offers a broad perspective on price expectations, helping users to evaluate the potential range of stock movements based on expert predictions.

Example: A portfolio manager can use the Price Target Consensus API to assess the potential upside and downside for a stock, using the high, low, median, and consensus price targets to create risk-reward scenarios for investment decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/price-target-consensus?symbol=AAPL&apikey=
```

Price Target Consensus API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "targetHigh": 400,
    "targetLow": 253,
    "targetConsensus": 323.82,
    "targetMedian": 325
  }
]
```

## Stock Grades API

Access the latest stock grades from top analysts and financial institutions with the FMP Grades API. Track grading actions, such as upgrades, downgrades, or maintained ratings, for specific stock symbols, providing valuable insight into how experts evaluate companies over time.

About Stock Grades API :

The FMP Grades API offers timely data on stock evaluations by prominent financial institutions, including:

- Grading Company: Identify the institution providing the stock rating.
- Previous Grade and New Grade: View the change in grade, if any, from previous assessments to the latest one.
- Action Taken: Determine whether the grade was upgraded, downgraded, or maintained.
- Date of Evaluation: See when the latest grading action occurred.

This API helps investors and analysts understand the latest sentiment from financial experts, enabling better investment decisions based on how stocks are graded.

Example: An investor can use the Grades API to track the latest stock ratings for their portfolio, seeing how financial institutions view the company's current performance and investment potential.

Endpoint:

```plain
https://financialmodelingprep.com/stable/grades?symbol=AAPL&apikey=
```

Stock Grades API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-05-26",
    "gradingCompany": "B of A Securities",
    "previousGrade": "Buy",
    "newGrade": "Buy",
    "action": "maintain"
  }
]
```

## Historical Stock Grades API

Access a comprehensive record of analyst grades with the FMP Historical Grades API. This tool allows you to track historical changes in analyst ratings for specific stock symbols.

About Historical Stock Grades API :

The FMP Historical Grades API offers an in-depth look at how analysts have rated specific stocks in the past. This API is perfect for:

- Trend Analysis: Investors can use historical ratings to spot long-term trends in market sentiment for a stock, helping to predict future price movements.
- Investment Strategy Optimization: By tracking changes in analyst sentiment over time, investors can adjust their strategies based on whether analysts are becoming more bullish or bearish.
- Benchmarking Performance: Compare a stock's historical ratings to its actual performance, enabling a deeper understanding of how well the stock has lived up to expectations.
- Market Sentiment Tracking: Use the API to analyze how buy, hold, and sell ratings have changed, providing insight into broader market confidence or caution around a stock.

This API empowers investors with historical context, offering a valuable tool for long-term financial analysis and decision-making.

Example: A portfolio manager can utilize the Historical Grades API to observe changes in analyst sentiment for a particular stock, helping them adjust their strategy based on evolving market outlooks.

Endpoint:

```plain
https://financialmodelingprep.com/stable/grades-historical?symbol=AAPL&apikey=
```

Historical Stock Grades API Parameters :

(\*) Required | Maximum 1000 records per request

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 100     |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2026-06-01",
    "analystRatingsStrongBuy": 7,
    "analystRatingsBuy": 23,
    "analystRatingsHold": 15,
    "analystRatingsSell": 1,
    "analystRatingsStrongSell": 2
  }
]
```

## Stock Grades Summary API

Quickly access an overall view of analyst ratings with the FMP Grades Summary API. This API provides a consolidated summary of market sentiment for individual stock symbols, including the total number of strong buy, buy, hold, sell, and strong sell ratings.

About Stock Grades Summary API :

The FMP Grades Summary API simplifies the process of gauging market sentiment by delivering a clear breakdown of analyst ratings. It is particularly valuable for:

- Market Sentiment Assessment: Quickly assess the overall market opinion on a stock, whether it's leaning towards buy, hold, or sell.
- Investment Decision Support: Use the consensus ratings to guide your investment decisions, knowing how many analysts recommend buying or selling a stock.
- Portfolio Monitoring: Keep an eye on stocks in your portfolio by reviewing changes in analyst sentiment and adjusting your positions accordingly.
- Streamlined Stock Analysis: For users looking to get a high-level understanding of a stock's market position, the summarized data offers an efficient way to digest complex rating information.

This API helps investors and analysts make informed decisions with a quick glance at how the market views a stock.

Endpoint:

```plain
https://financialmodelingprep.com/stable/grades-consensus?symbol=AAPL&apikey=
```

Stock Grades Summary API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "strongBuy": 1,
    "buy": 69,
    "hold": 33,
    "sell": 7,
    "strongSell": 0,
    "consensus": "Buy"
  }
]
```
