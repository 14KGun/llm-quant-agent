# Earnings Transcript

## Latest Earning Transcripts API

Access the most recently available earnings call transcripts with the FMP Latest Earning Transcripts API. Retrieve a paginated list of companies with recent earnings transcripts, including period and fiscal year information.

About Latest Earning Transcripts API :

The FMP Latest Earning Transcripts API provides users with essential data on the availability of earnings transcripts for various companies. This API is ideal for financial analysts, investors, and researchers looking to track earnings performance over time:

- Identify Available Transcripts: Quickly access a list of companies with earnings transcripts, complete with the number of available transcripts for each.
- Support Earnings Analysis: Use the transcript count to further analyze earnings call data and gain insights into company performance.
- Track Historical Data: Discover companies with multiple transcripts to track earnings calls over different quarters or years.

Example: An investor looking to analyze a company's earnings performance over several quarters can use the Latest Earning Transcripts API to identify companies with multiple earnings call transcripts and retrieve the necessary documents for deeper financial analysis.

Endpoint:

```plain
https://financialmodelingprep.com/stable/earning-call-transcript-latest?apikey=
```

Latest Earning Transcripts API Parameters :

(\*) Required | Maximum 100 records per request | Page maxed at 100

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| limit           | number | 100     |
| page            | number | 0       |

Response :

```json
[
  {
    "symbol": "GASS",
    "period": "Q1",
    "fiscalYear": 2026,
    "date": "2026-06-05"
  }
]
```

## Earnings Transcript API

Access the full transcript of a company's earnings call with the FMP Earnings Transcript API. Stay informed about a company's financial performance, future plans, and overall strategy by analyzing management's communication.

About Earnings Transcript API :

The FMP Earnings Transcript API provides complete access to the text transcript of a company's earnings call. This API is essential for:

- In-Depth Financial Analysis: Gain valuable insights into a company's financial performance by reviewing what executives say during earnings calls. The transcript can provide context and details beyond what's available in standard financial reports.
- Strategic Planning: Learn about a company's future plans and strategic direction straight from management. Understanding the company's priorities and challenges can help investors make informed decisions.
- Risk Identification: Use the transcript to identify any potential red flags or areas of concern that might not be immediately apparent in the earnings report. This can include management's tone, response to analysts' questions, or any mention of operational or financial difficulties.

Example: An investor might use the Earnings Transcript API to review the most recent earnings call for a retail company. By analyzing the transcript, the investor can assess the company's response to market trends, management's outlook on upcoming quarters, and any potential risks that were discussed.

Endpoint:

```plain
https://financialmodelingprep.com/stable/earning-call-transcript?symbol=AAPL&year=2020&quarter=3&apikey=
```

Earnings Transcript API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| year\*          | string | 2020    |
| quarter\*       | string | 3       |
| limit           | number | 1       |

Response :

```json
[
  {
    "symbol": "AAPL",
    "period": "Q3",
    "year": 2020,
    "date": "2020-07-30",
    "content": "Operator: Good day, everyone. Welcome to the Apple Incorporated Third Quarter Fiscal Year 2020 Earnings Conference Call..."
  }
]
```

## Transcripts Dates By Symbol API

Access earnings call transcript dates for specific companies with the FMP Transcripts Dates By Symbol API. Get a comprehensive overview of earnings call schedules based on fiscal year and quarter.

About Transcripts Dates By Symbol API :

The FMP Transcripts Dates By Symbol API provides users with precise information about when earnings call transcripts are available for a given company. This API is ideal for investors, analysts, and researchers who want to track earnings discussions and financial insights over time, including:

- Earnings Call Availability by Quarter: Retrieve transcript dates by quarter and fiscal year to track a company's performance.
- Timely Access to Transcripts: Get access to transcripts for upcoming or historical earnings calls for in-depth analysis.
- Comprehensive Coverage: Identify and analyze earnings call transcripts across multiple quarters for better decision-making.

This API is designed to help users stay informed about earnings call schedules and access key financial insights through transcripts from specific periods.

Example: An investment firm can use the Transcripts Dates By Symbol API to keep track of a company's earnings calls for each quarter and access these transcripts for detailed performance analysis and strategic planning.

Endpoint:

```plain
https://financialmodelingprep.com/stable/earning-call-transcript-dates?symbol=AAPL&apikey=
```

Transcripts Dates By Symbol API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |

Response :

```json
[
  {
    "quarter": 2,
    "fiscalYear": 2026,
    "date": "2026-04-30"
  }
]
```

## Available Transcript Symbols API

Access a complete list of stock symbols with available earnings call transcripts using the FMP Available Earnings Transcript Symbols API. Retrieve information on which companies have earnings transcripts and how many are accessible for detailed financial analysis.

About Available Transcript Symbols API :

The FMP Available Earnings Transcript Symbols API provides users with a comprehensive list of companies that have earnings call transcripts available. This API is designed for analysts, investors, and researchers who want to track corporate earnings discussions and performance over time, including:

- Earnings Transcript Availability: Get a list of companies with earnings call transcripts available for review.
- Number of Available Transcripts: View the total number of transcripts available for each company, allowing users to analyze trends across multiple periods.
- Quick Access to Relevant Symbols: Easily identify which companies provide insights through earnings calls, facilitating research and performance analysis.

This API simplifies the process of discovering which companies have earnings transcripts, making it easier to access and analyze financial discussions.

Example: A research analyst can use the Available Earnings Transcript Symbols API to compile a list of companies with multiple earnings transcripts, allowing them to focus on companies with the most available historical data for better trend analysis.

Endpoint:

```plain
https://financialmodelingprep.com/stable/earnings-transcript-list?apikey=
```

Response :

```json
[
  {
    "symbol": "INBS",
    "companyName": "Intelligent Bio Solutions Inc.",
    "noOfTranscripts": "6"
  }
]
```
