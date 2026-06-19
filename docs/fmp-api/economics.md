# Economics

## Treasury Rates API

Access latest and historical Treasury rates for all maturities with the FMP Treasury Rates API. Track key benchmarks for interest rates across the economy.

About Treasury Rates API :

The Treasury Rates API provides latest and historical data on Treasury rates for all maturities. These rates represent the interest rates that the US government pays on its debt obligations and serve as a critical benchmark for interest rates across the economy. Investors can use this API to:

- Track Treasury Rates Over Time: Monitor the movement of Treasury rates and understand how they change over different periods.
- Identify Interest Rate Trends: Analyze trends in interest rates to gain insights into the broader economic landscape.
- Make Informed Investment Decisions: Use the data to inform investment strategies based on current and historical interest rate information.

This API is an invaluable tool for investors, analysts, and economists who need accurate and timely information on Treasury rates.

Endpoint:

```plain
https://financialmodelingprep.com/stable/treasury-rates?apikey=
```

Treasury Rates API Parameters :

(\*) Required | Max 90-day date range

| Query Parameter | Type | Example    |
| :-------------- | :--- | :--------- |
| from            | date | 2026-01-27 |
| to              | date | 2026-04-27 |

Response :

```json
[
  {
    "date": "2026-06-05",
    "month1": 3.71,
    "month2": 3.71,
    "month3": 3.78,
    "month6": 3.81,
    "year1": 3.88,
    "year2": 4.17,
    "year3": 4.22,
    "year5": 4.29,
    "year7": 4.41,
    "year10": 4.55,
    "year20": 5.03,
    "year30": 5.01
  }
]
```

## Economics Indicators API

Access real-time and historical economic data for key indicators like GDP, unemployment, and inflation with the FMP Economic Indicators API. Use this data to measure economic performance and identify growth trends.

About Economics Indicators API :

The FMP Economic Indicators API provides comprehensive access to real-time and historical data for a wide range of economic indicators, including GDP, unemployment rates, and inflation. These indicators are essential tools for:

- Economic Performance Tracking: Economic indicators such as GDP, unemployment, and inflation provide a snapshot of the overall health of the economy. By tracking these indicators over time, investors and analysts can gauge economic performance and make predictions about future economic conditions.
- Trend Identification: Identifying trends in economic growth is crucial for making informed investment decisions. The Economic Indicators API allows users to analyze historical data and detect patterns that can indicate economic expansion or contraction.
- Informed Investment Decisions: Economic data is a key factor in making informed investment decisions. By understanding the current state of the economy and its trajectory, investors can better align their portfolios with economic cycles.

Example: An investor might use the Economic Indicators API to monitor GDP growth rates over the past decade. By analyzing this data, the investor can identify periods of strong economic growth and align their investment strategy accordingly.

Endpoint:

```plain
https://financialmodelingprep.com/stable/economic-indicators?name=GDP&apikey=
```

Economics Indicators API Parameters :

(\*) Required | Max 90-day date range

Available `name` values: `GDP`, `realGDP`, `nominalPotentialGDP`, `realGDPPerCapita`, `federalFunds`, `CPI`, `inflationRate`, `inflation`, `retailSales`, `consumerSentiment`, `durableGoods`, `unemploymentRate`, `totalNonfarmPayroll`, `initialClaims`, `industrialProductionTotalIndex`, `newPrivatelyOwnedHousingUnitsStartedTotalUnits`, `totalVehicleSales`, `retailMoneyFunds`, `smoothedUSRecessionProbabilities`, `3MonthOr90DayRatesAndYieldsCertificatesOfDeposit`, `commercialBankInterestRateOnCreditCardPlansAllAccounts`, `30YearFixedRateMortgageAverage`, `15YearFixedRateMortgageAverage`, `tradeBalanceGoodsAndServices`

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| name\*          | string | GDP        |
| from            | date   | 2025-04-27 |
| to              | date   | 2026-04-27 |

Response :

```json
[
  {
    "name": "GDP",
    "date": "2026-01-01",
    "value": 31819.464
  }
]
```

## Economic Data Releases Calendar API

Stay informed with the FMP Economic Data Releases Calendar API. Access a comprehensive calendar of upcoming economic data releases to prepare for market impacts and make informed investment decisions.

About Economic Data Releases Calendar API :

The FMP Economic Data Releases Calendar API provides a detailed schedule of upcoming economic data releases. This tool is essential for investors who want to:

- Stay Updated on Economic Events: Access a calendar that lists the dates and details of key economic data releases.
- Prepare for Market Reactions: Anticipate market movements by staying informed about upcoming economic indicators and reports.
- Make Informed Investment Decisions: Use the latest economic data to guide your investment strategies and decisions.

This API is ideal for traders, analysts, and investors who need to stay ahead of market trends by monitoring critical economic data releases.

Endpoint:

```plain
https://financialmodelingprep.com/stable/economic-calendar?apikey=
```

Economic Data Releases Calendar API Parameters :

(\*) Required | Max 90-day date range

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| country         | string | US         |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-27 |

Response :

```json
[
  {
    "date": "2026-06-06 16:00:00",
    "country": "US",
    "event": "Fed Barr Speech",
    "currency": "USD",
    "previous": null,
    "estimate": null,
    "actual": null,
    "change": null,
    "impact": "Medium",
    "changePercentage": 0,
    "unit": null
  }
]
```

## Market Risk Premium API

Access the market risk premium for specific dates with the FMP Market Risk Premium API. Use this key financial metric to assess the additional return expected from investing in the stock market over a risk-free investment.

About Market Risk Premium API :

The FMP Market Risk Premium API provides the market risk premium, a critical measure in financial analysis and investment decision-making. This metric represents the difference between the expected return of the stock market and the risk-free rate, and it is essential for:

- Investment Valuation: The market risk premium is a fundamental component in calculating the cost of equity and assessing the value of investments. By knowing the premium, investors can evaluate whether the potential return on an investment justifies the risk.
- Risk Assessment: Understanding the market risk premium helps investors gauge the level of risk they are taking on compared to the risk-free rate. This can inform decisions on asset allocation and portfolio management.
- Financial Modeling: The market risk premium is often used in models such as the Capital Asset Pricing Model (CAPM) to estimate the expected return on an investment. Accurate market risk premium data is crucial for reliable financial modeling.

Example: An analyst might use the Market Risk Premium API to calculate the expected return on a stock investment. By subtracting the risk-free rate from the expected market return, they can determine whether the investment offers a sufficient premium to justify the associated risk.

Endpoint:

```plain
https://financialmodelingprep.com/stable/market-risk-premium?apikey=
```

Response :

```json
[
  {
    "country": "Zimbabwe",
    "continent": "Africa",
    "countryRiskPremium": 11.66,
    "totalEquityRiskPremium": 15.89
  }
]
```
