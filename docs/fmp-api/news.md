# News

## FMP Articles API

Access the latest articles from FMP with the FMP Articles API. Get comprehensive updates including headlines, snippets, and publication URLs.

About FMP Articles API :

The FMP Articles API provides access to a curated list of the most recent articles published by FMP. This endpoint offers:

- Headlines: Stay informed with the latest headlines covering a wide range of financial topics.
- Snippets: Quickly grasp the key points of each article with concise snippets.
- Publication URLs: Access the full articles through provided URLs for in-depth reading.

This API is updated regularly to ensure you have access to the most current content, helping you stay informed about the latest trends, insights, and analyses from FMP.

Endpoint:

```plain
https://financialmodelingprep.com/stable/fmp-articles?page=0&limit=20&apikey=
```

FMP Articles API Parameters :

(\*) Required

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| page            | number | 0       |
| limit           | number | 20      |

Response :

```json
[
  {
    "title": "Meta Platforms (NASDAQ:META) Faces Downgrade Amidst AI Investment and Potential Stock Offering",
    "date": "2026-06-05 20:23:22",
    "content": "<ul><li><strong>Citigroup Downgrade:</strong> Meta Platforms (NASDAQ:META) received an \"Underweight\" rating from Citigroup...</li></ul>",
    "tickers": "NASDAQ:META",
    "image": "https://portal.financialmodelingprep.com/positions/6a233af3d100e6cbf386bb06.jpeg",
    "link": "https://financialmodelingprep.com/market-news/meta-platforms-meta-downgraded-ai-costs-offering",
    "author": "Alex Lavoie",
    "site": "Financial Modeling Prep"
  }
]
```

## General News API

Access the latest general news articles from a variety of sources with the FMP General News API. Obtain headlines, snippets, and publication URLs for comprehensive news coverage.

About General News API :

The FMP General News API provides access to the latest general news articles from a wide range of sources. This endpoint includes:

- Headlines: Stay informed with the latest headlines on current events.
- Snippets: Get brief summaries of the articles to quickly understand the key points.
- Publication URLs: Access full articles through provided URLs for detailed information.

This API is updated daily to ensure you have the most current news.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/general-latest?page=0&limit=20&apikey=
```

General News API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": null,
    "publishedDate": "2026-06-06 12:40:12",
    "publisher": "Reuters",
    "title": "Deferring jet orders over Iran war would be costly for Middle Eastern carriers, IATA VP says",
    "image": "https://images.financialmodelingprep.com/news/deferring-jet-orders-over-iran-war-would-be-costly-20260606.jpg",
    "site": "reuters.com",
    "text": "Deferring jet orders due to uncertainty and higher jet fuel prices caused by the war in Iran would be unwise for Middle Eastern carriers...",
    "url": "https://www.reuters.com/business/aerospace-defense/deferring-jet-orders-over-iran-war-would-be-costly-middle-eastern-carriers-iata-2026-06-06/"
  }
]
```

## Press Releases API

Access official company press releases with the FMP Press Releases API. Get real-time updates on corporate announcements, earnings reports, mergers, and more.

About Press Releases API :

The Press Releases API provides real-time access to official company announcements, allowing investors, analysts, and business professionals to stay informed on the latest developments. This API is crucial for:

- Company Announcements: Stay informed about earnings reports, product launches, mergers, and more directly from companies.
- Strategic Updates: Track leadership changes, business restructuring, and other significant corporate strategies that may affect a company's market standing.
- Market Impact Analysis: Analyze how company press releases influence stock prices, company valuations, and market sentiment.

Example: A financial analyst uses the Press Releases API to monitor corporate announcements from publicly traded companies, providing critical insights for investment decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/press-releases-latest?page=0&limit=20&apikey=
```

Press Releases API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "GPK",
    "publishedDate": "2026-06-06 15:00:00",
    "publisher": "GlobeNewsWire",
    "title": "ROSEN, NATIONAL INVESTOR COUNSEL, Encourages Graphic Packaging Holding Company Investors to Secure Counsel Before Important Deadline in Securities Class Action – GPK",
    "image": "https://images.financialmodelingprep.com/news/rosen-national-investor-counsel-encourages-graphic-packaging-holding-company-20260606.jpg",
    "site": "globenewswire.com",
    "text": "NEW YORK, June 06, 2026 (GLOBE NEWSWIRE) -- WHY: Rosen Law Firm, a global investor rights law firm...",
    "url": "https://www.globenewswire.com/news-release/2026/06/06/3307694/673/en/ROSEN-NATIONAL-INVESTOR-COUNSEL.html"
  }
]
```

## Stock News API

Stay informed with the latest stock market news using the FMP Stock News Feed API. Access headlines, snippets, publication URLs, and ticker symbols for the most recent articles from a variety of sources.

About Stock News API :

The Stock News API offers up-to-date information on stock market events, keeping traders, investors, and financial professionals informed about:

- Breaking Market News: Access the latest headlines that may impact stock prices and market movements.
- Company-Specific News: Stay updated on news related to individual stocks, including earnings reports, product announcements, and mergers.
- Market Trends and Analysis: Follow broader market trends and sentiment to make better investment decisions.

Example: A portfolio manager uses the Stock News API to track real-time updates on the stock markets, ensuring they are aware of any news that may affect the performance of the equities in their portfolio.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/stock-latest?page=0&limit=20&apikey=
```

Stock News API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "LASR",
    "publishedDate": "2026-06-06 15:05:07",
    "publisher": "Forbes",
    "title": "This Small-Cap Manager Is Up 94%, Betting On Hidden Drivers In The New Economy",
    "image": "https://images.financialmodelingprep.com/news/this-smallcap-manager-is-up-94-betting-on-hidden-20260606.jpg",
    "site": "forbes.com",
    "text": "Lasers that can shoot down drones. Data center infrastructure powering artificial intelligence.",
    "url": "https://www.forbes.com/sites/sergeiklebnikov/2026/06/06/this-small-cap-manager-is-up-94-betting-on-hidden-drivers-in-the-new-economy/"
  }
]
```

## Crypto News API

Stay informed with the latest cryptocurrency news using the FMP Crypto News API. Access a curated list of articles from various sources, including headlines, snippets, and publication URLs.

About Crypto News API :

The Crypto News API provides up-to-date news on cryptocurrencies, including key market events and trends. This API is critical for:

- Real-Time Updates: Receive the latest news on major cryptocurrencies like Bitcoin, Ethereum, and more.
- Market Sentiment Analysis: Follow news and reports that could influence crypto market sentiment and price movements.
- Cryptocurrency Trends: Stay informed about industry developments, new technologies, and regulatory updates.

Example: A crypto trader uses the Crypto News API to track daily news on Bitcoin and Ethereum, enabling them to stay ahead of market trends.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/crypto-latest?page=0&limit=20&apikey=
```

Crypto News API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "BTCUSD",
    "publishedDate": "2026-06-06 15:37:10",
    "publisher": "Blockonomi",
    "title": "Beyond Bitcoin's Price: Why BitMEX Research Defends Michael Saylor's Strategy Model",
    "image": "https://images.financialmodelingprep.com/news/beyond-bitcoins-price-why-bitmex-research-defends-michael-saylors-20260606.webp",
    "site": "blockonomi.com",
    "text": "BitMEX says Arkham BTC spend analysis ignores equity-driven value created via premium stock issuance",
    "url": "https://blockonomi.com/beyond-bitcoins-price-why-bitmex-research-defends-michael-saylors-strategy-model/"
  }
]
```

## Forex News API

Stay updated with the latest forex news articles from various sources using the FMP Forex News API. Access headlines, snippets, and publication URLs for comprehensive market insights.

About Forex News API :

The Forex News API provides up-to-date reports on currency markets, ensuring you stay informed about:

- Currency Market Movements: Get real-time updates on the forex market, including major events and macro-economic trends that influence currency pairs.
- Currency Pair Analysis: Stay informed on specific currency pair movements, such as EUR/USD, GBP/USD, or JPY/CHF, to better understand market conditions.
- Market Sentiment Updates: Follow forex-related news to gauge investor sentiment and market dynamics in the foreign exchange sector.

Example: A forex trader uses the Forex News API to track the latest news on currency pairs, helping them make quick and informed trading decisions.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/forex-latest?page=0&limit=20&apikey=
```

Forex News API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "XAGUSD",
    "publishedDate": "2026-06-06 06:36:02",
    "publisher": "FXEmpire",
    "title": "Silver (XAG) Forecast: Margin Calls Send Silver Prices Sharply Lower",
    "image": "https://images.financialmodelingprep.com/news/silver-xag-forecast-margin-calls-send-silver-prices-sharply-lower-20260606.jpg",
    "site": "fxempire.com",
    "text": "Silver prices plunged 8% after strong U.S. jobs data boosted rate hike expectations, triggering margin call selling and testing key support levels.",
    "url": "https://www.fxempire.com/forecasts/article/silver-xag-forecast-margin-calls-send-silver-prices-sharply-lower-1602869"
  }
]
```

## Search Press Releases API

Search for company press releases with the FMP Search Press Releases API. Find specific corporate announcements and updates by entering a stock symbol or company name.

About Search Press Releases API :

The Search Press Releases API allows users to find specific press releases based on a company name or stock symbol, offering quick access to relevant announcements. This API is essential for:

- Targeted Searches: Narrow down your search to find exact press releases from a particular company.
- Symbol-Based Retrieval: Use stock symbols to pinpoint corporate disclosures, making it ideal for investors and analysts looking for precise data.
- Historical and Real-Time Access: Retrieve both current and past press releases, helping with long-term trend analysis.

Example: An investor uses the Search Press Releases API to find the most recent earnings report of a specific company before making an investment decision.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/press-releases?symbols=AAPL&apikey=
```

Search Press Releases API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbols\*       | string | AAPL       |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "AAPL",
    "publishedDate": "2026-06-04 23:17:00",
    "publisher": "GlobeNewsWire",
    "title": "Iron Age Nutrition Announces Launch of \"Sour Apple Crush\" Flavor in Total Hydrate Electrolyte Line",
    "image": "https://images.financialmodelingprep.com/news/iron-age-nutrition-announces-launch-of-sour-apple-crush-20260604.jpg",
    "site": "globenewswire.com",
    "text": "FORT LAUDERDALE, FL, June 04, 2026 (GLOBE NEWSWIRE) -- Iron Age Nutrition announced the introduction of \"Sour Apple Crush,\" a new flavor within its Total Hydrate electrolyte line.",
    "url": "https://www.globenewswire.com/news-release/2026/06/05/3307178/0/en/Iron-Age-Nutrition-Announces-Launch-of-Sour-Apple-Crush-Flavor-in-Total-Hydrate-Electrolyte-Line.html"
  }
]
```

## Search Stock News API

Search for stock-related news using the FMP Search Stock News API. Find specific stock news by entering a ticker symbol or company name to track the latest developments.

About Search Stock News API :

The Search Stock News API helps users find stock-related news by entering a specific company name or stock symbol. This tool is ideal for:

- Targeted News Searches: Narrow down your search to find news about specific companies or stocks.
- Symbol-Based Lookup: Quickly retrieve news by entering the relevant ticker symbol for a stock.
- Comprehensive News Retrieval: Access both current and historical news reports to gain a full picture of stock movements over time.

Example: A trader uses the Search Stock News API to look up recent news articles about a stock they are considering buying, helping them make an informed decision.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/stock?symbols=AAPL&apikey=
```

Search Stock News API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbols\*       | string | AAPL       |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "AAPL",
    "publishedDate": "2026-06-06 14:13:36",
    "publisher": "TechCrunch",
    "title": "What to expect from WWDC 2026: Siri's highly anticipated revamp and Apple Intelligence updates",
    "image": "https://images.financialmodelingprep.com/news/what-to-expect-from-wwdc-2026-siris-highly-anticipated-20260606.jpg",
    "site": "techcrunch.com",
    "text": "As Apple's Worldwide Developers Conference, WWDC 2026, approaches, the excitement is building around what Apple has in store for us this year.",
    "url": "https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/"
  }
]
```

## Search Crypto News API

Search for cryptocurrency news using the FMP Search Crypto News API. Retrieve news related to specific coins or tokens by entering their name or symbol.

About Search Crypto News API :

The Search Crypto News API allows users to look up cryptocurrency news by entering a coin name or symbol. This API is helpful for:

- Targeted Searches: Quickly find news on specific cryptocurrencies by entering their name or ticker symbol.
- Real-Time & Historical News: Retrieve both current and past news on digital assets to track market trends and price drivers.
- Symbol-Based Lookups: Find news related to your preferred coins, such as Bitcoin (BTC) or Ethereum (ETH).

Example: A crypto investor uses the Search Crypto News API to search for news on Ethereum to understand the recent market movements before making a trade.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/crypto?symbols=BTCUSD&apikey=
```

Search Crypto News API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbols\*       | string | BTCUSD     |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "BTCUSD",
    "publishedDate": "2026-06-06 15:37:10",
    "publisher": "Blockonomi",
    "title": "Beyond Bitcoin's Price: Why BitMEX Research Defends Michael Saylor's Strategy Model",
    "image": "https://images.financialmodelingprep.com/news/beyond-bitcoins-price-why-bitmex-research-defends-michael-saylors-20260606.webp",
    "site": "blockonomi.com",
    "text": "BitMEX says Arkham BTC spend analysis ignores equity-driven value created via premium stock issuance",
    "url": "https://blockonomi.com/beyond-bitcoins-price-why-bitmex-research-defends-michael-saylors-strategy-model/"
  }
]
```

## Search Forex News API

Search for foreign exchange news using the FMP Search Forex News API. Find targeted news on specific currency pairs by entering their symbols for focused updates.

About Search Forex News API :

The Search Forex News API allows users to look up forex news by entering a currency pair, such as EUR/USD or GBP/USD. This API is perfect for:

- Targeted News Search: Easily find news about specific currency pairs to track the latest developments in the forex market.
- Historical News Access: Look up both current and historical forex news to analyze long-term trends and market movements.
- Symbol-Based Retrieval: Enter specific currency pair symbols to retrieve relevant news for informed decision-making.

Example: A currency trader uses the Search Forex News API to search for the latest news on EUR/USD, helping them understand recent price fluctuations before entering a trade.

Endpoint:

```plain
https://financialmodelingprep.com/stable/news/forex?symbols=EURUSD&apikey=
```

Search Forex News API Parameters :

(\*) Required | Maximum 250 records per request | Page maxed at 100

| Query Parameter | Type   | Example    |
| :-------------- | :----- | :--------- |
| symbols\*       | string | EURUSD     |
| from            | date   | 2026-01-27 |
| to              | date   | 2026-04-28 |
| page            | number | 0          |
| limit           | number | 20         |

Response :

```json
[
  {
    "symbol": "EURUSD",
    "publishedDate": "2026-06-05 12:45:35",
    "publisher": "FXEmpire",
    "title": "U.S. Dollar Soars As Non Farm Payrolls Beat Estimates: Analysis For EUR/USD, GBP/USD, USD/CAD, USD/JPY",
    "image": "https://images.financialmodelingprep.com/news/us-dollar-soars-as-non-farm-payrolls-beat-estimates-20260605.jpg",
    "site": "fxempire.com",
    "text": "The American currency tests multi-week highs as traders bet on hawkish Fed.",
    "url": "https://www.fxempire.com/forecasts/article/u-s-dollar-soars-as-non-farm-payrolls-beat-estimates-analysis-for-eur-usd-gbp-usd-usd-cad-usd-jpy-1602771"
  }
]
```
