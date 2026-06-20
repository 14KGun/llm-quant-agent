# Technical Indicators

## Simple Moving Average API

Arithmetic mean of an asset's closing prices over a fixed look-back window, smoothing short-term noise to expose the underlying trend.

About Simple Moving Average API :

The SMA is computed as the unweighted average of the last N closes for the requested timeframe. Traders use it to identify trend direction, define dynamic support and resistance, and generate crossover signals against price or against a second SMA of different length. Because every observation carries equal weight, the SMA reacts more slowly than weighted variants such as EMA or WMA.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/sma?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Simple Moving Average API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "sma": 310.291
  }
]
```

## Exponential Moving Average API

Moving average that applies exponentially decaying weights to past prices, making the line more responsive to recent moves than a simple SMA.

About Exponential Moving Average API :

The EMA gives the most recent close the highest weight and decays older observations geometrically with smoothing factor 2 / (N + 1). It reacts to new information faster than the SMA, which makes it preferred for shorter-term crossover systems and momentum strategies, at the cost of being more sensitive to whipsaws in choppy markets.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/ema?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Exponential Moving Average API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "ema": 308.44057474678436
  }
]
```

## Weighted Moving Average API

Moving average that assigns linearly decreasing weights to older prices, balancing the responsiveness of an EMA with a deterministic decay.

About Weighted Moving Average API :

In a length-N WMA the most recent close is multiplied by N, the previous by N-1, and so on, with the sum divided by N(N+1)/2. The linear decay puts more emphasis on recent data than the SMA while remaining simpler and more predictable than the EMA, making the WMA useful when a clear, bounded weighting profile is desired.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/wma?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Weighted Moving Average API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "wma": 310.3487272727272
  }
]
```

## Double Exponential Moving Average API

A faster, lag-reduced moving average defined as 2·EMA − EMA(EMA), designed to track price more closely than a standard EMA.

About Double Exponential Moving Average API :

DEMA subtracts the EMA of an EMA from twice the EMA itself, which cancels much of the lag inherent to single-pass exponential smoothing. The result is a curve that hugs price during strong trends and turns earlier at reversals, which traders pair with EMA crossovers, MACD-style histograms, or trend filters for breakout systems.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/dema?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Double Exponential Moving Average API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "dema": 312.41959432990143
  }
]
```

## Triple Exponential Moving Average API

A further lag-reduced moving average defined as 3·EMA − 3·EMA(EMA) + EMA(EMA(EMA)), tighter to price than both EMA and DEMA.

About Triple Exponential Moving Average API :

TEMA layers three EMAs in a way that cancels more lag than DEMA while preserving most of the smoothing benefits of an exponential filter. It is favoured by short-term trend followers who want fast trend confirmation, though its sharper turns also make it more prone to whipsaws in low-volatility regimes.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/tema?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Triple Exponential Moving Average API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "tema": 310.28622027117757
  }
]
```

## Relative Strength Index API

Momentum oscillator bounded between 0 and 100 that measures the speed and magnitude of recent price changes to flag overbought and oversold conditions.

About Relative Strength Index API :

RSI is computed from the average gains and losses over the chosen period, with classic thresholds of 70 (overbought) and 30 (oversold). Beyond extreme readings, traders watch for divergences against price, mid-line crossings around 50 as a trend filter, and shifts in the index's own range to confirm regime changes.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/rsi?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Relative Strength Index API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "rsi": 56.87420287286961
  }
]
```

## Standard Deviation API

Rolling measure of price dispersion around its mean over a fixed window, used as a fundamental gauge of volatility for the requested asset and timeframe.

About Standard Deviation API :

The endpoint computes the standard deviation of closing prices over the supplied period length, sampled at the chosen timeframe. It underpins volatility-based tools such as Bollinger Bands, position-sizing models, and risk filters, and is often used directly to detect volatility regime shifts or to normalise other indicators.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/standarddeviation?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Standard Deviation API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "standardDeviation": 2.5280998793560374
  }
]
```

## Williams API

Momentum oscillator bounded between -100 and 0 that locates the current close relative to the highest high and lowest low of the look-back window.

About Williams API :

Williams %R reads -20 or above as overbought and -80 or below as oversold, mirroring the structure of the Stochastic but using only highs and lows. It is well suited for identifying short-term exhaustion in trending markets, especially when combined with a longer-term trend filter to avoid taking countertrend signals.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/williams?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Williams API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "williams": -80.53691275167793
  }
]
```

## Average Directional Index API

Indicator measuring trend strength on a 0–100 scale, derived from smoothed directional movement and used to separate trending markets from ranging ones.

About Average Directional Index API :

ADX is the smoothed average of the absolute difference between the +DI and -DI directional indicators over the chosen period. Readings above 25 typically signal a developing trend and above 40 a strong one, while sustained values below 20 suggest a range-bound market. The indicator describes strength only — direction is read from the +DI / -DI pair.

Endpoint:

```plain
https://financialmodelingprep.com/stable/technical-indicators/adx?symbol=AAPL&periodLength=10&timeframe=1day&apikey=
```

Average Directional Index API Parameters :

(\*) Required

Available `timeframe` values: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day`

| Query Parameter | Type   | Example |
| :-------------- | :----- | :------ |
| symbol\*        | string | AAPL    |
| periodLength\*  | number | 10      |
| timeframe\*     | string | 1day    |
| from            | date   | 2026-03-01 |
| to              | date   | 2026-06-01 |

Response :

```json
[
  {
    "date": "2026-06-05 00:00:00",
    "open": 312.86,
    "high": 315.17,
    "low": 307.15,
    "close": 307.34,
    "volume": 65310502,
    "adx": 54.65170078857176
  }
]
```
