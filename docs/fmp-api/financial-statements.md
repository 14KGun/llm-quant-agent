# Financial Statements

## Income Statement API

Access detailed income statement data for publicly traded companies with the Income Statements API. Track profitability, compare competitors, and identify business trends with up-to-date financial data.

About Income Statement API :

The FMP Income Statements API provides comprehensive access to income statement data for a wide range of companies. This API is essential for:

- Profitability Tracking: Monitor a company's revenue, expenses, and net income over time. The income statement, also known as the profit and loss statement, provides a detailed view of a company's financial performance during a specific period.
- Competitive Analysis: Use the API to compare a company's financial performance to its competitors. By analyzing income statements across companies, investors can identify which businesses are leading in profitability and efficiency.
- Trend Identification: Detect trends in a company's business by examining changes in revenue, expenses, and net income over multiple periods. This data is crucial for understanding a company's financial health and growth prospects.

Example: An investor can use the Income Statements API to calculate key financial ratios, such as the price-to-earnings ratio (P/E ratio) and gross margin. These ratios help investors assess a company's valuation and profitability, enabling more informed investment decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/income-statement?symbol=AAPL&apikey=
```

Income Statement API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "date": "2024-09-28",
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "cik": "0000320193",
    "filingDate": "2024-11-01",
    "acceptedDate": "2024-11-01 06:01:36",
    "fiscalYear": "2024",
    "period": "FY",
    "revenue": 391035000000,
    "costOfRevenue": 210352000000,
    "grossProfit": 180683000000,
    "researchAndDevelopmentExpenses": 31370000000,
    "generalAndAdministrativeExpenses": 0,
    "sellingAndMarketingExpenses": 0,
    "sellingGeneralAndAdministrativeExpenses": 26097000000,
    "otherExpenses": 0,
    "operatingExpenses": 57467000000,
    "costAndExpenses": 267819000000,
    "netInterestIncome": 0,
    "interestIncome": 0,
    "interestExpense": 0,
    "depreciationAndAmortization": 11445000000,
    "ebitda": 134661000000,
    "ebit": 123216000000,
    "nonOperatingIncomeExcludingInterest": 0,
    "operatingIncome": 123216000000,
    "totalOtherIncomeExpensesNet": 269000000,
    "incomeBeforeTax": 123485000000,
    "incomeTaxExpense": 29749000000,
    "netIncomeFromContinuingOperations": 93736000000,
    "netIncomeFromDiscontinuedOperations": 0,
    "otherAdjustmentsToNetIncome": 0,
    "netIncome": 93736000000,
    "netIncomeDeductions": 0,
    "bottomLineNetIncome": 93736000000,
    "eps": 6.11,
    "epsDiluted": 6.08,
    "weightedAverageShsOut": 15343783000,
    "weightedAverageShsOutDil": 15408095000
  }
]
```

## Balance Sheet Statement API

Access detailed balance sheet statements for publicly traded companies with the Balance Sheet Data API. Analyze assets, liabilities, and shareholder equity to gain insights into a company's financial health.

About Balance Sheet Statement API :

The Balance Sheet Data API allows investors, analysts, and financial professionals to retrieve detailed balance sheet information for companies. This API is essential for:

- Comprehensive Financial Analysis: View key data on assets, liabilities, and shareholder equity, allowing for a detailed assessment of a company's financial structure and solvency.
- Evaluating Company Health: Determine a company's liquidity and leverage through short-term and long-term assets, liabilities, and shareholder equity positions.
- Supporting Investment Decisions: Use the balance sheet to compare companies within the same industry or sector, ensuring you make informed investment decisions based on a company's financial stability.

This API provides real-time and historical balance sheet data, offering a snapshot of a company's financial health over different periods.

Example: An investor analyzing a potential stock purchase uses the Balance Sheet Data API to evaluate the company's assets and liabilities. They review how much cash the company has on hand, its debt obligations, and total equity to ensure the company is financially stable.

Endpoint:

```plain
https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=AAPL&apikey=
```

Balance Sheet Statement API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "date": "2024-09-28",
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "cik": "0000320193",
    "filingDate": "2024-11-01",
    "acceptedDate": "2024-11-01 06:01:36",
    "fiscalYear": "2024",
    "period": "FY",
    "cashAndCashEquivalents": 29943000000,
    "shortTermInvestments": 35228000000,
    "cashAndShortTermInvestments": 65171000000,
    "netReceivables": 66243000000,
    "accountsReceivables": 33410000000,
    "otherReceivables": 32833000000,
    "inventory": 7286000000,
    "prepaids": 0,
    "otherCurrentAssets": 14287000000,
    "totalCurrentAssets": 152987000000,
    "propertyPlantEquipmentNet": 45680000000,
    "goodwill": 0,
    "intangibleAssets": 0,
    "goodwillAndIntangibleAssets": 0,
    "longTermInvestments": 91479000000,
    "taxAssets": 19499000000,
    "otherNonCurrentAssets": 55335000000,
    "totalNonCurrentAssets": 211993000000,
    "otherAssets": 0,
    "totalAssets": 364980000000,
    "totalPayables": 95561000000,
    "accountPayables": 68960000000,
    "otherPayables": 26601000000,
    "accruedExpenses": 0,
    "shortTermDebt": 20879000000,
    "capitalLeaseObligationsCurrent": 1632000000,
    "taxPayables": 26601000000,
    "deferredRevenue": 8249000000,
    "otherCurrentLiabilities": 50071000000,
    "totalCurrentLiabilities": 176392000000,
    "longTermDebt": 85750000000,
    "deferredRevenueNonCurrent": 10798000000,
    "deferredTaxLiabilitiesNonCurrent": 0,
    "otherNonCurrentLiabilities": 35090000000,
    "totalNonCurrentLiabilities": 131638000000,
    "otherLiabilities": 0,
    "capitalLeaseObligations": 12430000000,
    "totalLiabilities": 308030000000,
    "treasuryStock": 0,
    "preferredStock": 0,
    "commonStock": 83276000000,
    "retainedEarnings": -19154000000,
    "additionalPaidInCapital": 0,
    "accumulatedOtherComprehensiveIncomeLoss": -7172000000,
    "otherTotalStockholdersEquity": 0,
    "totalStockholdersEquity": 56950000000,
    "totalEquity": 56950000000,
    "minorityInterest": 0,
    "totalLiabilitiesAndTotalEquity": 364980000000,
    "totalInvestments": 126707000000,
    "totalDebt": 106629000000,
    "netDebt": 76686000000
  }
]
```

## Cash Flow Statement API

Gain insights into a company's cash flow activities with the Cash Flow Statements API. Analyze cash generated and used from operations, investments, and financing activities to evaluate the financial health and sustainability of a business.

About Cash Flow Statement API :

The Cash Flow Statements API provides a detailed view of a company's cash flow, giving investors and analysts essential data to understand how a company generates and spends its cash. This API is critical for:

- Assessing Financial Health: Evaluate a company's ability to generate cash from its core operations and its reliance on investments and financing.
- Understanding Cash Management: Track cash inflows and outflows from operating, investing, and financing activities to understand how well a company manages its cash resources.
- Free Cash Flow Analysis: Analyze free cash flow to determine how much cash a company has left over after paying for capital expenditures, providing a clearer picture of financial flexibility.

This API delivers real-time and historical cash flow data, offering a comprehensive look at how a company manages its cash, which is essential for investment decisions, financial modeling, and credit analysis.

Example: A financial analyst uses the Cash Flow Statements API to evaluate a company's operating cash flow and free cash flow, helping to assess whether the company can sustain operations, invest in growth, and return value to shareholders.

Endpoint:

```plain
https://financialmodelingprep.com/stable/cash-flow-statement?symbol=AAPL&apikey=
```

Cash Flow Statement API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "date": "2024-09-28",
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "cik": "0000320193",
    "filingDate": "2024-11-01",
    "acceptedDate": "2024-11-01 06:01:36",
    "fiscalYear": "2024",
    "period": "FY",
    "netIncome": 93736000000,
    "depreciationAndAmortization": 11445000000,
    "deferredIncomeTax": 0,
    "stockBasedCompensation": 11688000000,
    "changeInWorkingCapital": 3651000000,
    "accountsReceivables": -5144000000,
    "inventory": -1046000000,
    "accountsPayables": 6020000000,
    "otherWorkingCapital": 3821000000,
    "otherNonCashItems": -2266000000,
    "netCashProvidedByOperatingActivities": 118254000000,
    "investmentsInPropertyPlantAndEquipment": -9447000000,
    "acquisitionsNet": 0,
    "purchasesOfInvestments": -48656000000,
    "salesMaturitiesOfInvestments": 62346000000,
    "otherInvestingActivities": -1308000000,
    "netCashProvidedByInvestingActivities": 2935000000,
    "netDebtIssuance": -5998000000,
    "longTermNetDebtIssuance": -9958000000,
    "shortTermNetDebtIssuance": 3960000000,
    "netStockIssuance": -94949000000,
    "netCommonStockIssuance": -94949000000,
    "commonStockIssuance": 0,
    "commonStockRepurchased": -94949000000,
    "netPreferredStockIssuance": 0,
    "netDividendsPaid": -15234000000,
    "commonDividendsPaid": -15234000000,
    "preferredDividendsPaid": 0,
    "otherFinancingActivities": -5802000000,
    "netCashProvidedByFinancingActivities": -121983000000,
    "effectOfForexChangesOnCash": 0,
    "netChangeInCash": -794000000,
    "cashAtEndOfPeriod": 29943000000,
    "cashAtBeginningOfPeriod": 30737000000,
    "operatingCashFlow": 118254000000,
    "capitalExpenditure": -9447000000,
    "freeCashFlow": 108807000000,
    "incomeTaxesPaid": 26102000000,
    "interestPaid": 0
  }
]
```

## Latest Financial Statements API

Access the most recently added financial statements across all companies with the FMP Latest Financial Statements API. Retrieve a paginated list of recently filed income statements, balance sheets, or cash flow data.

About Latest Financial Statements API :

The FMP Latest Financial Statements API provides a chronological feed of newly available financial statement data. This is useful for:

- Staying Up to Date: Monitor when new financial filings become available across all covered companies.
- Data Pipeline Integration: Trigger downstream processing when new statements are detected.

Endpoint:

```plain
https://financialmodelingprep.com/stable/latest-financial-statements?page=0&limit=250&apikey=
```

Latest Financial Statements API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100 | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| page            | number | 0       |
| limit           | number | 250     |

Response :

```json
[
  {
    "symbol": "FGFI",
    "calendarYear": 2024,
    "period": "Q4",
    "date": "2024-12-31",
    "dateAdded": "2025-03-13 17:03:59"
  }
]
```

## Income Statements TTM API

Access trailing twelve-month (TTM) income statement data for a company with the FMP Income Statements TTM API. Evaluate a company's most recent annualized revenue and profitability metrics.

About Income Statements TTM API :

The FMP Income Statements TTM API provides rolling twelve-month income statement data, enabling more current analysis than annual filings alone. This is useful for:

- Timely Profitability Analysis: Assess up-to-date revenue and net income without waiting for fiscal year-end results.
- Valuation Modeling: Use TTM figures as inputs for P/E, EV/EBITDA, and other valuation multiples.

Endpoint:

```plain
https://financialmodelingprep.com/stable/income-statement-ttm?symbol=AAPL&apikey=
```

Income Statements TTM API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 5       |

Response :

```json
[
  {
    "date": "2024-12-28",
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "cik": "0000320193",
    "filingDate": "2025-01-31",
    "acceptedDate": "2025-01-31 06:01:27",
    "fiscalYear": "2025",
    "period": "Q1",
    "revenue": 395760000000,
    "costOfRevenue": 211657000000,
    "grossProfit": 184103000000,
    "researchAndDevelopmentExpenses": 31942000000,
    "sellingGeneralAndAdministrativeExpenses": 26486000000,
    "operatingExpenses": 58428000000,
    "costAndExpenses": 270085000000,
    "depreciationAndAmortization": 11677000000,
    "ebitda": 137352000000,
    "ebit": 125675000000,
    "operatingIncome": 125675000000,
    "totalOtherIncomeExpensesNet": 71000000,
    "incomeBeforeTax": 125746000000,
    "incomeTaxExpense": 29596000000,
    "netIncomeFromContinuingOperations": 96150000000,
    "netIncome": 96150000000,
    "bottomLineNetIncome": 96150000000,
    "eps": 6.31,
    "epsDiluted": 6.3,
    "weightedAverageShsOut": 15081724000,
    "weightedAverageShsOutDil": 15150865000
  }
]
```

## Balance Sheet Statements TTM API

Access trailing twelve-month (TTM) balance sheet data for a company with the FMP Balance Sheet Statements TTM API. Evaluate a company's most recent annualized asset and liability positions.

About Balance Sheet Statements TTM API :

The FMP Balance Sheet Statements TTM API provides rolling twelve-month balance sheet data, enabling more current analysis than annual filings alone. This is useful for:

- Current Financial Position: Assess up-to-date assets, liabilities, and equity without waiting for fiscal year-end results.
- Liquidity and Leverage Analysis: Use TTM figures to evaluate short-term solvency and debt levels in real time.

Endpoint:

```plain
https://financialmodelingprep.com/stable/balance-sheet-statement-ttm?symbol=AAPL&apikey=
```

Balance Sheet Statements TTM API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 5       |

Response :

```json
[
  {
    "date": "2024-12-28",
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "cik": "0000320193",
    "filingDate": "2025-01-31",
    "acceptedDate": "2025-01-31 06:01:27",
    "fiscalYear": "2025",
    "period": "Q1",
    "cashAndCashEquivalents": 30299000000,
    "shortTermInvestments": 23476000000,
    "cashAndShortTermInvestments": 53775000000,
    "netReceivables": 59306000000,
    "inventory": 6911000000,
    "totalCurrentAssets": 133240000000,
    "propertyPlantEquipmentNet": 46069000000,
    "longTermInvestments": 87593000000,
    "totalNonCurrentAssets": 210845000000,
    "totalAssets": 344085000000,
    "accountPayables": 61910000000,
    "shortTermDebt": 12843000000,
    "deferredRevenue": 8461000000,
    "totalCurrentLiabilities": 144365000000,
    "longTermDebt": 83956000000,
    "totalNonCurrentLiabilities": 132962000000,
    "totalLiabilities": 277327000000,
    "commonStock": 84768000000,
    "retainedEarnings": -11221000000,
    "totalStockholdersEquity": 66758000000,
    "totalEquity": 66758000000,
    "totalLiabilitiesAndTotalEquity": 344085000000,
    "totalInvestments": 111069000000,
    "totalDebt": 96799000000,
    "netDebt": 66500000000
  }
]
```

## Cashflow Statements TTM API

Access trailing twelve-month (TTM) cash flow data for a company with the FMP Cashflow Statements TTM API. Evaluate a company's most recent annualized operating, investing, and financing cash flows.

About Cashflow Statements TTM API :

The FMP Cashflow Statements TTM API provides rolling twelve-month cash flow data, enabling more current analysis than annual filings alone. This is useful for:

- Current Cash Generation: Assess the most recent operating and free cash flow without waiting for year-end results.
- Capital Allocation Analysis: Review how the company has been deploying cash across investing and financing activities in the trailing period.

Endpoint:

```plain
https://financialmodelingprep.com/stable/cash-flow-statement-ttm?symbol=AAPL&apikey=
```

Cashflow Statements TTM API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 5       |

Response :

```json
[
  {
    "date": "2024-12-28",
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "cik": "0000320193",
    "filingDate": "2025-01-31",
    "acceptedDate": "2025-01-31 06:01:27",
    "fiscalYear": "2025",
    "period": "Q1",
    "netIncome": 96150000000,
    "depreciationAndAmortization": 11677000000,
    "stockBasedCompensation": 11977000000,
    "changeInWorkingCapital": -8224000000,
    "netCashProvidedByOperatingActivities": 108294000000,
    "investmentsInPropertyPlantAndEquipment": -9995000000,
    "purchasesOfInvestments": -45000000000,
    "salesMaturitiesOfInvestments": 67422000000,
    "netCashProvidedByInvestingActivities": 10800000000,
    "netDebtIssuance": -10967000000,
    "netStockIssuance": -98416000000,
    "commonStockRepurchased": -98416000000,
    "netDividendsPaid": -15265000000,
    "netCashProvidedByFinancingActivities": -130769000000,
    "netChangeInCash": -11675000000,
    "cashAtEndOfPeriod": 30299000000,
    "cashAtBeginningOfPeriod": 41974000000,
    "operatingCashFlow": 108294000000,
    "capitalExpenditure": -9995000000,
    "freeCashFlow": 98299000000,
    "incomeTaxesPaid": 37498000000,
    "interestPaid": 0
  }
]
```

## Key Metrics API

Access essential financial metrics for a company with the FMP Financial Key Metrics API. Evaluate revenue, net income, P/E ratio, and more to assess performance and compare it to competitors.

About Key Metrics API :

The FMP Financial Key Metrics API provides crucial financial data that helps investors, analysts, and managers assess a company's financial performance. This endpoint offers:

- Revenue: Track the total income generated by the company from its operations.
- Net Income: Understand the company's profitability after all expenses and taxes have been deducted.
- P/E Ratio: Evaluate the company's valuation relative to its earnings, helping to determine if the stock is overvalued or undervalued.

These financial key performance indicators (KPIs) are invaluable tools for business analysis, goal tracking, and competitive benchmarking. By using these metrics, you can:

- Assess Financial Performance: Get a clear picture of a company's financial health and operational efficiency.
- Compare to Competitors: Benchmark a company's performance against its competitors to identify strengths, weaknesses, and market positioning.

Endpoint:

```plain
https://financialmodelingprep.com/stable/key-metrics?symbol=AAPL&apikey=
```

Key Metrics API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2024-09-28",
    "fiscalYear": "2024",
    "period": "FY",
    "reportedCurrency": "USD",
    "marketCap": 3495160329570,
    "enterpriseValue": 3571846329570,
    "evToSales": 9.134339201273542,
    "evToOperatingCashFlow": 30.204866893043786,
    "evToFreeCashFlow": 32.82735788662494,
    "evToEBITDA": 26.524727497716487,
    "netDebtToEBITDA": 0.5694744580836323,
    "currentRatio": 0.8673125765340832,
    "incomeQuality": 1.2615643936161134,
    "grahamNumber": 22.587017267616833,
    "workingCapital": -23405000000,
    "investedCapital": 22275000000,
    "returnOnAssets": 0.25682503150857583,
    "returnOnEquity": 1.6459350307287095,
    "returnOnInvestedCapital": 0.4430708117427921,
    "earningsYield": 0.026818798327209237,
    "freeCashFlowYield": 0.03113076074921754,
    "daysOfSalesOutstanding": 61.83255974529134,
    "daysOfPayablesOutstanding": 119.65847721913745,
    "daysOfInventoryOutstanding": 12.642570548414087,
    "operatingCycle": 74.47513029370543,
    "cashConversionCycle": -45.18334692543202,
    "freeCashFlowToEquity": 32121000000,
    "tangibleAssetValue": 56950000000,
    "netCurrentAssetValue": -155043000000
  }
]
```

## Financial Ratios API

Analyze a company's financial performance using the Financial Ratios API. This API provides detailed profitability, liquidity, and efficiency ratios, enabling users to assess a company's operational and financial health across various metrics.

About Financial Ratios API :

The Financial Ratios API delivers key ratios that help investors, analysts, and researchers evaluate a company's performance. These ratios include profitability indicators like gross profit margin and net profit margin, liquidity metrics such as current ratio and quick ratio, and efficiency measurements like asset turnover and inventory turnover.

- Profitability Ratios: Gain insight into a company's ability to generate profit, with metrics like net profit margin and return on equity.
- Liquidity Ratios: Understand how well a company can meet its short-term obligations using ratios like current ratio and quick ratio.
- Efficiency Ratios: Assess how effectively a company utilizes its assets with metrics such as asset turnover and inventory turnover.
- Debt Ratios: Evaluate a company's leverage and debt management through ratios like debt-to-equity and interest coverage ratios.

This API is an essential tool for investors and analysts looking to analyze financial ratios and make informed decisions based on a company's financial performance.

Example: A portfolio manager can use the Financial Ratios API to compare liquidity ratios between companies in the same industry, helping them identify firms with stronger financial stability and more efficient operations.

Endpoint:

```plain
https://financialmodelingprep.com/stable/ratios?symbol=AAPL&apikey=
```

Financial Ratios API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2024-09-28",
    "fiscalYear": "2024",
    "period": "FY",
    "reportedCurrency": "USD",
    "grossProfitMargin": 0.4620634981523393,
    "ebitMargin": 0.31510222870075566,
    "ebitdaMargin": 0.3443707085043538,
    "operatingProfitMargin": 0.31510222870075566,
    "pretaxProfitMargin": 0.3157901466620635,
    "netProfitMargin": 0.23971255769943867,
    "receivablesTurnover": 5.903038811648023,
    "payablesTurnover": 3.0503480278422272,
    "inventoryTurnover": 28.870710952511665,
    "assetTurnover": 1.0713874732862074,
    "currentRatio": 0.8673125765340832,
    "quickRatio": 0.8260068483831466,
    "priceToEarningsRatio": 37.287278415656736,
    "priceToBookRatio": 61.37243774486391,
    "priceToSalesRatio": 8.93822887866815,
    "priceToFreeCashFlowRatio": 32.12256867269569,
    "debtToAssetsRatio": 0.29215025480848267,
    "debtToEquityRatio": 1.872326602282704,
    "dividendYield": 0.0043585983369965175,
    "dividendYieldPercentage": 0.43585983369965176,
    "revenuePerShare": 25.484914639368924,
    "netIncomePerShare": 6.109054070954992,
    "freeCashFlowPerShare": 7.091275991064264,
    "effectiveTaxRate": 0.24091185164189982,
    "enterpriseValueMultiple": 26.524727497716487
  }
]
```

## Key Metrics TTM API

Retrieve a comprehensive set of trailing twelve-month (TTM) key performance metrics with the TTM Key Metrics API. Access data related to a company's profitability, capital efficiency, and liquidity, allowing for detailed analysis of its financial health over the past year.

About Key Metrics TTM API :

The TTM Key Metrics API provides valuable insights into a company's recent performance, capturing data over the trailing twelve-month period. This API is ideal for:

- Profitability Assessment: Understand a company's ability to generate profit, with metrics such as return on assets (ROA) and earnings yield.
- Liquidity and Solvency Analysis: Evaluate how efficiently a company manages its short-term obligations with ratios like the current ratio and cash conversion cycle.
- Capital Efficiency: Assess how well a company is using its capital with metrics like return on invested capital (ROIC) and return on equity (ROE).
- Operational Performance: Get insights into the operational efficiency of a company through operating cycle and days of inventory outstanding (DIO).

This API helps investors, analysts, and portfolio managers track financial performance trends and assess companies' efficiency in generating returns.

Example: An analyst can use the TTM Key Metrics API to compare the free cash flow yield of several companies within the same industry, helping them make better-informed investment decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=AAPL&apikey=
```

Key Metrics TTM API Parameters :

(\*) Required | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "marketCap": 3149833928000,
    "enterpriseValueTTM": 3216333928000,
    "evToSalesTTM": 8.126980816656559,
    "evToOperatingCashFlowTTM": 29.70001965021146,
    "evToFreeCashFlowTTM": 32.71990486169747,
    "evToEBITDATTM": 23.41672438697653,
    "netDebtToEBITDATTM": 0.48415749315627005,
    "currentRatioTTM": 0.9229383853427077,
    "returnOnAssetsTTM": 0.27943676707790227,
    "returnOnEquityTTM": 1.4534598087751787,
    "returnOnInvestedCapitalTTM": 0.45208108089346594,
    "earningsYieldTTM": 0.030404739849149914,
    "freeCashFlowYieldTTM": 0.03120767705439485,
    "daysOfSalesOutstandingTTM": 54.69650798463715,
    "daysOfPayablesOutstandingTTM": 106.76306476988712,
    "daysOfInventoryOutstandingTTM": 11.917937984569374,
    "operatingCycleTTM": 66.61444596920653,
    "cashConversionCycleTTM": -40.148618800680595,
    "freeCashFlowToEquityTTM": 31799000000,
    "tangibleAssetValueTTM": 66758000000,
    "netCurrentAssetValueTTM": -144087000000
  }
]
```

## Financial Ratios TTM API

Gain access to trailing twelve-month (TTM) financial ratios with the TTM Ratios API. This API provides key performance metrics over the past year, including profitability, liquidity, and efficiency ratios.

About Financial Ratios TTM API :

The TTM Ratios API offers a comprehensive view of a company's financial performance, making it an essential tool for investors, analysts, and decision-makers. This API is ideal for:

- Profitability Analysis: Understand how efficiently a company generates profit using metrics like gross profit margin, net profit margin, and EBITDA margin.
- Liquidity Assessment: Evaluate a company's ability to meet short-term obligations with ratios such as the current ratio and quick ratio.
- Efficiency Insight: Examine how well a company manages its assets and liabilities with key efficiency ratios like asset turnover and inventory turnover.
- Leverage Evaluation: Assess a company's debt levels and leverage through metrics like the debt-to-equity ratio and financial leverage ratio.

This API provides insights into a company's performance across key areas, helping users make more informed decisions by analyzing trends over the past twelve months.

Example: An investor uses the TTM Ratios API to analyze Apple's liquidity and profitability ratios, helping them decide whether to invest in the company based on its trailing twelve-month financial performance.

Endpoint:

```plain
https://financialmodelingprep.com/stable/ratios-ttm?symbol=AAPL&apikey=
```

Financial Ratios TTM API Parameters :

(\*) Required | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "grossProfitMarginTTM": 0.46518849807964424,
    "ebitMarginTTM": 0.3175535678188801,
    "ebitdaMarginTTM": 0.34705882352941175,
    "operatingProfitMarginTTM": 0.3175535678188801,
    "pretaxProfitMarginTTM": 0.31773296947645036,
    "netProfitMarginTTM": 0.24295027289266222,
    "receivablesTurnoverTTM": 6.673186524129093,
    "payablesTurnoverTTM": 3.4187853335486995,
    "inventoryTurnoverTTM": 30.626103313558097,
    "assetTurnoverTTM": 1.1501809145995903,
    "currentRatioTTM": 0.9229383853427077,
    "quickRatioTTM": 0.8750666712845911,
    "priceToEarningsRatioTTM": 32.889608822880916,
    "priceToBookRatioTTM": 47.370141231313106,
    "priceToSalesRatioTTM": 7.958949686678795,
    "priceToFreeCashFlowRatioTTM": 32.04339747098139,
    "debtToAssetsRatioTTM": 0.28132292892744526,
    "debtToEquityRatioTTM": 1.4499985020521886,
    "dividendYieldTTM": 0.0047691720717283476,
    "enterpriseValueTTM": 3216333928000,
    "revenuePerShareTTM": 26.24103186081379,
    "netIncomePerShareTTM": 6.375265851569754,
    "freeCashFlowPerShareTTM": 6.5177561928596495,
    "effectiveTaxRateTTM": 0.23536335151813975,
    "enterpriseValueMultipleTTM": 23.41672438697653
  }
]
```

## Financial Scores API

Assess a company's financial strength using the Financial Health Scores API. This API provides key metrics such as the Altman Z-Score and Piotroski Score, giving users insights into a company's overall financial health and stability.

About Financial Scores API :

The Financial Health Scores API offers a detailed evaluation of a company's financial stability by calculating various scores and metrics. This API is ideal for:

- Bankruptcy Risk Analysis: Use the Altman Z-Score to assess the likelihood of a company facing financial distress.
- Profitability and Efficiency Evaluation: The Piotroski Score helps determine a company's financial strength by measuring profitability and operational efficiency.
- Working Capital Management: Track changes in working capital to understand how a company manages its short-term assets and liabilities.
- Leverage and Capital Structure: Assess the relationship between a company's total liabilities and market capitalization to evaluate its financial leverage.

This API is a powerful tool for investors and analysts who need to evaluate the financial strength of a company to make informed decisions.

Example: A financial analyst uses the Financial Health Scores API to check Apple's Altman Z-Score and Piotroski Score before recommending it as a stable investment to clients.

Endpoint:

```plain
https://financialmodelingprep.com/stable/financial-scores?symbol=AAPL&apikey=
```

Financial Scores API Parameters :

(\*) Required | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "altmanZScore": 9.322985825443649,
    "piotroskiScore": 8,
    "workingCapital": -11125000000,
    "totalAssets": 344085000000,
    "retainedEarnings": -11221000000,
    "ebit": 125675000000,
    "marketCap": 3259495258000,
    "totalLiabilities": 277327000000,
    "revenue": 395760000000
  }
]
```

## Owner Earnings API

Retrieve a company's owner earnings with the Owner Earnings API, which provides a more accurate representation of cash available to shareholders by adjusting net income. This metric is crucial for evaluating a company's profitability from the perspective of investors.

About Owner Earnings API :

The Owner Earnings API offers a detailed breakdown of a company's cash flow adjusted for key factors, such as capital expenditures and depreciation. It is designed for:

- Investor Evaluation: Calculate cash truly available to shareholders, giving a clearer picture of profitability beyond net income.
- Valuation Analysis: Use owner earnings to make informed decisions when valuing a company for long-term investments.
- Capex Insight: Get insights into both maintenance and growth capital expenditures (Capex) to assess how much of the company's income is being reinvested.
- Owner Earnings Per Share: Track the value available to each share, helping determine if a stock is a good investment.

This API provides a robust view of a company's profitability and cash flow potential, especially for value investors looking for long-term returns.

Example: An investor uses the Owner Earnings API to evaluate Apple's true cash earnings before purchasing additional shares, ensuring that the company's income aligns with their long-term investment strategy.

Endpoint:

```plain
https://financialmodelingprep.com/stable/owner-earnings?symbol=AAPL&apikey=
```

Owner Earnings API Parameters :

(\*) Required | Currency is as Reported in Financials

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| limit           | number | 5       |

Response :

```json
[
  {
    "symbol": "AAPL",
    "reportedCurrency": "USD",
    "fiscalYear": "2025",
    "period": "Q1",
    "date": "2024-12-28",
    "averagePPE": 0.13969,
    "maintenanceCapex": -2279964750,
    "ownersEarnings": 27655035250,
    "growthCapex": -660035250,
    "ownersEarningsPerShare": 1.83
  }
]
```

## Enterprise Values API

Access a company's enterprise value using the Enterprise Values API. This metric offers a comprehensive view of a company's total market value by combining both its equity (market capitalization) and debt, providing a better understanding of its worth.

About Enterprise Values API :

The Enterprise Values API provides key financial data to help assess a company's value by including:

- Market Capitalization: The total value of all outstanding shares based on the current stock price.
- Debt & Cash: Includes total debt and subtracts cash and cash equivalents to get a full picture of a company's financial standing.
- Comprehensive Valuation: Enterprise value includes both equity and debt, making it a preferred measure for evaluating potential buyouts, mergers, or acquisitions.

This API is ideal for analysts, investors, and finance professionals who need a complete understanding of a company's valuation, especially when considering its overall market position.

Example: A financial analyst uses the Enterprise Values API to assess Apple's total market value, factoring in debt and subtracting cash reserves, to determine whether it's a good acquisition target.

Endpoint:

```plain
https://financialmodelingprep.com/stable/enterprise-values?symbol=AAPL&apikey=
```

Enterprise Values API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2024-09-28",
    "stockPrice": 227.79,
    "numberOfShares": 15343783000,
    "marketCapitalization": 3495160329570,
    "minusCashAndCashEquivalents": 29943000000,
    "addTotalDebt": 106629000000,
    "enterpriseValue": 3571846329570
  }
]
```

## Income Statement Growth API

Track key financial growth metrics with the Income Statement Growth API. Analyze how revenue, profits, and expenses have evolved over time, offering insights into a company's financial health and operational efficiency.

About Income Statement Growth API :

The Income Statement Growth API provides critical growth data, allowing users to track year-over-year changes in key income statement items, such as:

- Revenue Growth: Monitor changes in a company's total revenue, helping gauge overall business performance.
- Profit Growth: Assess fluctuations in gross profit, operating income, and net income, offering insights into profitability trends.
- Expense Growth: Analyze growth in operating expenses, cost of revenue, and specific line items like research and development or interest expenses.

This API is a valuable tool for investors, analysts, and financial professionals who want to track a company's financial trends over time.

Example: A financial analyst can use the Income Statement Growth API to evaluate Apple's revenue and net income trends over the past few years, identifying whether the company is experiencing consistent growth or declines in profitability.

Endpoint:

```plain
https://financialmodelingprep.com/stable/income-statement-growth?symbol=AAPL&apikey=
```

Income Statement Growth API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2024-09-28",
    "fiscalYear": "2024",
    "period": "FY",
    "reportedCurrency": "USD",
    "growthRevenue": 0.020219940775141214,
    "growthCostOfRevenue": -0.017675600199872046,
    "growthGrossProfit": 0.06819471705252206,
    "growthResearchAndDevelopmentExpenses": 0.04863780712017383,
    "growthOperatingExpenses": 0.04776924900176856,
    "growthDepreciationAndAmortization": -0.006424168764649709,
    "growthEBITDA": 0.07026704816404387,
    "growthOperatingIncome": 0.07799581805933456,
    "growthIncomeBeforeTax": 0.08571604417246959,
    "growthIncomeTaxExpense": 0.7770145152619318,
    "growthNetIncome": -0.033599670086086914,
    "growthEPS": -0.008116883116883088,
    "growthEPSDiluted": -0.008156606851549727
  }
]
```

## Balance Sheet Statement Growth API

Analyze the growth of key balance sheet items over time with the Balance Sheet Statement Growth API. Track changes in assets, liabilities, and equity to understand the financial evolution of a company.

About Balance Sheet Statement Growth API :

The Balance Sheet Statement Growth API provides year-over-year growth metrics for key balance sheet components. This API is ideal for:

- Asset Growth Analysis: Track changes in assets, such as cash, inventory, and long-term investments, to assess how a company's resources are expanding or contracting.
- Liability Growth Monitoring: Understand how short-term and long-term liabilities are evolving, including payables and debt.
- Equity Growth Tracking: Monitor shifts in shareholder equity, retained earnings, and total equity, offering insights into a company's financial health.

This API helps financial analysts and investors evaluate a company's stability and growth by examining the evolution of its balance sheet items.

Example: An investor can use the Balance Sheet Statement Growth API to analyze how Apple's cash reserves and debt levels have changed over the past year, helping them assess the company's liquidity and financial health.

Endpoint:

```plain
https://financialmodelingprep.com/stable/balance-sheet-statement-growth?symbol=AAPL&apikey=
```

Balance Sheet Statement Growth API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2024-09-28",
    "fiscalYear": "2024",
    "period": "FY",
    "reportedCurrency": "USD",
    "growthCashAndCashEquivalents": -0.0007341898882029034,
    "growthShortTermInvestments": 0.11516302627413738,
    "growthNetReceivables": 0.08621792243994425,
    "growthInventory": 0.15084504817564365,
    "growthTotalCurrentAssets": 0.06562138667929733,
    "growthPropertyPlantEquipmentNet": -0.15992349565984992,
    "growthLongTermInvestments": -0.09015953214513049,
    "growthTotalAssets": 0.035160515396374756,
    "growthAccountPayables": 0.1014039066617687,
    "growthShortTermDebt": 0.32087050041121024,
    "growthTotalCurrentLiabilities": 0.21391802240757563,
    "growthLongTermDebt": -0.10003043628845205,
    "growthTotalLiabilities": 0.060574238130816666,
    "growthCommonStock": 0.12821763398905328,
    "growthRetainedEarnings": -88.50467289719626,
    "growthTotalStockholdersEquity": -0.0836095645737457,
    "growthTotalDebt": -0.0401393489845888,
    "growthNetDebt": -0.05469472282829777
  }
]
```

## Cashflow Statement Growth API

Measure the growth rate of a company's cash flow with the FMP Cashflow Statement Growth API. Determine how quickly a company's cash flow is increasing or decreasing over time.

About Cashflow Statement Growth API :

The FMP Cashflow Statement Growth API provides key insights into the cash flow growth rate of a company, an essential metric for assessing a company's financial health. This API is crucial for:

- Financial Performance Evaluation: Analyze the rate at which a company's cash flow is growing. A positive growth rate indicates that the company is generating more cash than it is using, which can signal strong financial health and operational efficiency.
- Investment Decision-Making: Use cash flow growth data to identify companies with strong cash flow generation capabilities. Companies with consistent positive cash flow growth are often more stable and may represent good investment opportunities.
- Risk Assessment: A negative cash flow growth rate can be a red flag, indicating that a company is using more cash than it is generating. This information can be used to evaluate the risk associated with investing in or continuing to hold a company's stock.

Example: An investor might use the Cashflow Growth API to assess a manufacturing company's financial health by examining its cash flow growth over the past five years. If the company shows consistent positive growth, the investor may decide to increase their investment in the company.

Endpoint:

```plain
https://financialmodelingprep.com/stable/cash-flow-statement-growth?symbol=AAPL&apikey=
```

Cashflow Statement Growth API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2024-09-28",
    "fiscalYear": "2024",
    "period": "FY",
    "reportedCurrency": "USD",
    "growthNetIncome": -0.033599670086086914,
    "growthDepreciationAndAmortization": -0.006424168764649709,
    "growthStockBasedCompensation": 0.07892550540016616,
    "growthChangeInWorkingCapital": 1.555116314429071,
    "growthNetCashProvidedByOperatingActivites": 0.06975566069312394,
    "growthInvestmentsInPropertyPlantAndEquipment": 0.13796879277306323,
    "growthPurchasesOfInvestments": -0.6486294175448107,
    "growthSalesMaturitiesOfInvestments": 0.3698202750801951,
    "growthNetCashUsedForInvestingActivites": -0.2078272604588394,
    "growthCommonStockRepurchased": -0.2243584784010316,
    "growthDividendsPaid": -0.013910149750415973,
    "growthNetCashUsedProvidedByFinancingActivities": -0.12439163778482412,
    "growthNetChangeInCash": -1.1378472222222222,
    "growthOperatingCashFlow": 0.06975566069312394,
    "growthCapitalExpenditure": 0.13796879277306323,
    "growthFreeCashFlow": 0.092615279562982
  }
]
```

## Financial Statement Growth API

Analyze the growth of key financial statement items across income, balance sheet, and cash flow statements with the Financial Statement Growth API. Track changes over time to understand trends in financial performance.

About Financial Statement Growth API :

The Financial Statement Growth API provides an overview of year-over-year growth in key financial metrics from income statements, balance sheets, and cash flow statements. It's designed for analysts and investors who want to:

- Assess Revenue Trends: See how a company's revenue has grown or contracted over time, highlighting overall business health.
- Evaluate Profitability Growth: Track growth in net income, operating income, and EBIT to gauge profitability.
- Monitor Asset & Debt Changes: Understand the growth or reduction in assets and liabilities, providing insights into financial management.
- Examine Cash Flow Changes: View growth in operating cash flow and free cash flow to analyze liquidity and capital efficiency.

This API helps in identifying long-term trends across financial statements, providing a comprehensive picture of a company's financial growth.

Example: An investor can use the Financial Statement Growth API to analyze Apple's revenue, net income, and free cash flow growth over the past few years, helping them assess the company's performance trends.

Endpoint:

```plain
https://financialmodelingprep.com/stable/financial-growth?symbol=AAPL&apikey=
```

Financial Statement Growth API Parameters :

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials

| Query Parameter | Type   | Example  |
| :-------------- | :----- | :------- |
| symbol\*        | string | AAPL     |
| limit           | number | 5        |
| period          | string | annual   |

Response :

```json
[
  {
    "symbol": "AAPL",
    "date": "2024-09-28",
    "fiscalYear": "2024",
    "period": "FY",
    "reportedCurrency": "USD",
    "revenueGrowth": 0.020219940775141214,
    "grossProfitGrowth": 0.06819471705252206,
    "operatingIncomeGrowth": 0.07799581805933456,
    "netIncomeGrowth": -0.033599670086086914,
    "epsgrowth": -0.008116883116883088,
    "epsdilutedGrowth": -0.008156606851549727,
    "dividendsPerShareGrowth": 0.040371570095532654,
    "operatingCashFlowGrowth": 0.06975566069312394,
    "receivablesGrowth": 0.08621792243994425,
    "inventoryGrowth": 0.15084504817564365,
    "assetGrowth": 0.035160515396374756,
    "debtGrowth": -0.0401393489845888,
    "rdexpenseGrowth": 0.04863780712017383,
    "freeCashFlowGrowth": 0.092615279562982,
    "tenYRevenueGrowthPerShare": 2.3937532854122625,
    "fiveYRevenueGrowthPerShare": 0.8093292228858464,
    "threeYRevenueGrowthPerShare": 0.163506592883552,
    "tenYNetIncomeGrowthPerShare": 2.76381558093543,
    "fiveYNetIncomeGrowthPerShare": 1.0421744314966246,
    "threeYNetIncomeGrowthPerShare": 0.07761907162786884
  }
]
```

## Financial Reports Dates API

Retrieve available financial report dates and download links for a company with the FMP Financial Reports Dates API. Access direct links to JSON and XLSX formats for each filing period.

About Financial Reports Dates API :

The FMP Financial Reports Dates API provides a list of available reporting periods for a given company, along with direct links to download the corresponding financial reports. This is useful for:

- Report Discovery: Identify which periods have available 10-K or quarterly filings for a given company.
- Data Pipeline Integration: Use the returned links to programmatically retrieve JSON or XLSX report data.

Endpoint:

```plain
https://financialmodelingprep.com/stable/financial-reports-dates?symbol=AAPL&apikey=
```

Financial Reports Dates API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "symbol": "AAPL",
    "fiscalYear": 2025,
    "period": "Q1",
    "linkXlsx": "https://financialmodelingprep.com/stable/financial-reports-json?symbol=AAPL&year=2025&period=Q1&apikey=YOUR_API_KEY",
    "linkJson": "https://financialmodelingprep.com/stable/financial-reports-xlsx?symbol=AAPL&year=2025&period=Q1&apikey=YOUR_API_KEY"
  }
]
```

## Financial Reports Form 10-K JSON API

Access comprehensive annual reports with the FMP Annual Reports on Form 10-K API. Obtain detailed information about a company's financial performance, business operations, and risk factors as reported to the SEC.

About Financial Reports Form 10-K JSON API :

The FMP Annual Reports on Form 10-K API provides investors, analysts, and researchers with direct access to the annual reports that public companies in the United States are required to file with the Securities and Exchange Commission (SEC). This API is an invaluable resource for:

- In-Depth Financial Analysis: Access detailed financial statements and data included in a company's Form 10-K to evaluate its financial health and performance over the past fiscal year.
- Understanding Business Operations: Gain insights into a company's operations, including its business strategy, key markets, and operational challenges, as disclosed in the Form 10-K.
- Assessing Risk Factors: Review the risk factors section of the Form 10-K to understand the potential challenges and uncertainties that a company faces, helping to inform your investment decisions.

The FMP Annual Reports on Form 10-K API makes it easy to retrieve and analyze these comprehensive reports, providing a complete picture of a company's financial and operational status.

Endpoint:

```plain
https://financialmodelingprep.com/stable/financial-reports-json?symbol=AAPL&year=2022&period=FY&apikey=
```

Financial Reports Form 10-K JSON API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| year\*          | number | 2022    |
| period\*        | string | FY      |

Response :

```json
[
  {
    "symbol": "AAPL",
    "period": "FY",
    "year": "2022",
    "Cover Page": [
      {
        "Cover Page - USD ($) shares in Thousands, $ in Millions": ["12 Months Ended"]
      },
      {
        "items": ["Sep. 24, 2022", "Oct. 14, 2022", "Mar. 25, 2022"]
      }
    ],
    "CONSOLIDATED STATEMENTS OF OPER": [
      {
        "CONSOLIDATED STATEMENTS OF OPERATIONS - USD ($) shares in Thousands, $ in Millions": ["12 Months Ended"]
      },
      {
        "items": ["Sep. 24, 2022", "Sep. 25, 2021", "Sep. 26, 2020"]
      },
      {
        "Net sales": [394328, 365817, 274515]
      }
    ]
  }
]
```

## Financial Reports Form 10-K XLSX API

Download detailed 10-K reports in XLSX format with the Financial Reports Form 10-K XLSX API. Effortlessly access and analyze annual financial data for companies in a spreadsheet-friendly format.

About Financial Reports Form 10-K XLSX API :

The Financial Reports Form 10-K XLSX API provides users with the ability to download 10-K financial reports in a format that can be opened in Excel. This allows for:

- Detailed Financial Analysis: View comprehensive financial data, including income statements, balance sheets, and cash flow statements, with Excel's built-in analysis tools.
- Flexible Data Usage: Customize and manipulate the data for further analysis, enabling users to run financial models or track trends.
- Efficient Reporting: Create financial summaries, pivot tables, and other visualizations based on the data from 10-K reports.
- Historical Data Access: Download reports from previous fiscal years for detailed historical comparisons.

This API makes it simple to work with financial data in a spreadsheet, streamlining analysis and reporting workflows.

Example: A financial analyst can download Apple's 2022 10-K report in XLSX format, making it easier to import the data into their financial models and analyze trends over the fiscal year.

Endpoint:

```plain
https://financialmodelingprep.com/stable/financial-reports-xlsx?symbol=AAPL&year=2022&period=FY&apikey=
```

Financial Reports Form 10-K XLSX API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| year\*          | number | 2022    |
| period\*        | string | FY      |

Response :

Binary XLSX file download.
