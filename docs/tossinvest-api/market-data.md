# Market Data

종목의 실시간성 시세 정보를 조회하는 그룹입니다. 매수/매도 호가, 현재가, 최근 체결 내역, 상·하한가, 캔들 차트(1분봉·일봉)를 제공합니다. 계좌 정보 없이 액세스 토큰만으로 호출할 수 있습니다. 호가·현재가·체결·상하한가는 MARKET_DATA Rate Limits Group 에 속하고, 캔들 차트는 호출 부하 특성이 달라 별도의 MARKET_DATA_CHART Rate Limits Group 으로 관리되므로, 두 그룹의 한도 응답 헤더를 각각 확인하는 것을 권장합니다.

이용 안내

- 웹 소켓은 추후 지원 예정입니다

## 호가 조회​

매수/매도 호가 및 잔량을 조회합니다.

Rate Limits Group: `MARKET_DATA`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| symbol | string | 필수 | **Pattern:** `^[A-Za-z0-9.\-]+$` <br><br>종목 심볼. KRX: 6자리 숫자 (예: `005930`), US: 영문 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |

Examples:

```shell
curl 'https://openapi.tossinvest.com/api/v1/orderbook?symbol=005930' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "timestamp": "2026-03-25T09:30:00.123+09:00",
    "currency": "KRW",
    "asks": [
      {
        "price": "72300",
        "volume": "1200"
      },
      {
        "price": "72200",
        "volume": "3400"
      },
      {
        "price": "72100",
        "volume": "8500"
      }
    ],
    "bids": [
      {
        "price": "72000",
        "volume": "5200"
      },
      {
        "price": "71900",
        "volume": "4100"
      },
      {
        "price": "71800",
        "volume": "2700"
      }
    ]
  }
}
```

## 현재가 조회

종목의 현재가 정보를 조회합니다. 최대 200건 까지 다건 조회를 지원하며 콤마(,)로 구분합니다.

Rate Limits Group: `MARKET_DATA`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| symbols | string | 필수 | **Pattern:** `^[A-Za-z0-9.,\-]+$` <br><br>종목 심볼. 최대 200 개를 콤마(,)로 구분. 예: `005930,000660` 또는 `AAPL,MSFT`. 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |

Examples:

```shell
curl 'https://openapi.tossinvest.com/api/v1/prices?symbols=005930%2C000660' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": [
    {
      "symbol": "005930",
      "timestamp": "2026-03-25T09:30:00.123+09:00",
      "lastPrice": "72000",
      "currency": "KRW"
    }
  ]
}
```


## 최근 체결 내역 조회

당일 최근 체결 내역을 조회합니다.

Rate Limits Group: `MARKET_DATA`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| symbol | string | 필수 | **Pattern:** `^[A-Za-z0-9.\-]+$` <br><br>종목 심볼. KRX: 6자리 숫자 (예: `005930`), US: 영문 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |
| count | integer | 선택 | **Min:** 1, **Max:** 50, **Default:** 50 <br><br>조회 건수 (최대 50) |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/trades?symbol=005930&count=50' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": [
    {
      "price": "72000",
      "volume": "120",
      "timestamp": "2026-03-25T09:30:42.000+09:00",
      "currency": "KRW"
    },
    {
      "price": "71900",
      "volume": "50",
      "timestamp": "2026-03-25T09:30:41.500+09:00",
      "currency": "KRW"
    },
    {
      "price": "72000",
      "volume": "200",
      "timestamp": "2026-03-25T09:30:40.800+09:00",
      "currency": "KRW"
    }
  ]
}
```

## 상/하한가 조회

종목의 당일 상한가 및 하한가를 조회합니다.

Rate Limits Group: `MARKET_DATA`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| symbol | string | 필수 | **Pattern:** `^[A-Za-z0-9.\-]+$` <br><br>종목 심볼. KRX: 6자리 숫자 (예: `005930`), US: 영문 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/price-limits?symbol=005930' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "timestamp": "2026-03-25T09:30:00.123+09:00",
    "upperLimitPrice": "93000",
    "lowerLimitPrice": "50400",
    "currency": "KRW"
  }
}
```

## 캔들 차트 조회

종목의 캔들(OHLCV) 차트 데이터를 조회합니다. 최대 200개 봉을 반환합니다.

Rate Limits Group: `MARKET_DATA_CHART`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| symbol | string | 필수 | **Pattern:** `^[A-Za-z0-9.\-]+$` <br><br>종목 심볼. KRX: 6자리 숫자 (예: `005930`), US: 영문 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |
| interval | enum | 필수 | **Values:** `1m`, `1d` <br><br>봉 단위 |
| count | integer | 선택 | **Min:** 1, **Max:** 200, **Default:** 200 <br><br>조회 봉 수 (최대 200) |
| before | string (date-time) | 선택 | **Format:** ISO 8601 <br><br>페이지네이션 상한 (exclusive). 이 시각보다 이전의 봉만 반환합니다. 미지정 시 가장 최신 봉부터 반환. 다음 페이지 요청 시 이전 응답의 `nextBefore` 값을 그대로 전달합니다. |
| adjusted | boolean | 선택 | **Default:** `true` <br><br>수정주가 적용 여부. `true` 면 수정주가 적용, `false` 면 미적용. |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/candles?symbol=005930&interval=1m&count=100&before=2026-03-25T09%3A00%3A00%2B09%3A00&adjusted=true' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "candles": [
      {
        "timestamp": "2026-03-25T09:00:00+09:00",
        "openPrice": "71600",
        "highPrice": "72300",
        "lowPrice": "71500",
        "closePrice": "72000",
        "volume": "3521000",
        "currency": "KRW"
      },
      {
        "timestamp": "2026-03-24T09:00:00+09:00",
        "openPrice": "71200",
        "highPrice": "71800",
        "lowPrice": "71000",
        "closePrice": "71600",
        "volume": "2984000",
        "currency": "KRW"
      }
    ],
    "nextBefore": "2026-03-24T09:00:00+09:00"
  }
}
```
