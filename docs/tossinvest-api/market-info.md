# Market Info

환율과 시장 운영 일정을 조회하는 그룹입니다. KRW↔USD 환율(1분 주기 갱신, 참고용 표시 환율)과 국내(KRX·NXT)·미국 시장의 장 운영 캘린더를 제공합니다. 장 캘린더는 영업일 여부와 데이마켓·프리·정규·애프터마켓 등 세션별 운영 시간을 포함하므로, 주문 가능 시간대 판단이나 휴장일 처리에 활용할 수 있습니다. 계좌와 무관한 정보로 토큰만으로 호출 가능합니다.

## 환율 조회

KRW ↔ USD 환율 정보를 조회합니다.

- 갱신 주기 1분, 참고용 표시 환율. 실제 주문 시 적용되는 거래 환율과 다를 수 있습니다.
- `dateTime` 미지정 시 현재 시점의 유효 환율이 응답됩니다.
- 응답의 `validFrom` ~ `validUntil` 은 해당 환율의 유효 시간 윈도 (보통 1분) 입니다.

Rate Limits Group: `MARKET_INFO`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| dateTime | string (date-time) | 선택 | 조회할 환율 시각. 특정 시점의 환율을 조회할 수 있습니다. |
| baseCurrency | enum | 필수 | **Values:** `KRW`, `USD` / 기준 통화 |
| quoteCurrency | enum | 필수 | **Values:** `KRW`, `USD` / 표시 통화 (quote currency) |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/exchange-rate?dateTime=2026-03-25T09%3A30%3A00%2B09%3A00&baseCurrency=USD&quoteCurrency=KRW' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "baseCurrency": "USD",
    "quoteCurrency": "KRW",
    "rate": "1380.5",
    "midRate": "1375",
    "basisPoint": "40",
    "rateChangeType": "UP",
    "validFrom": "2026-03-25T09:30:00+09:00",
    "validUntil": "2026-03-25T09:31:00+09:00"
  }
}
```

## 국내 장 운영 정보 조회

국내 시장의 거래 가능 시간을 조회합니다. 통합 모드 (KRX+NXT) 기준이며, 특수장(시간외종가/시간외단일가)은 제외됩니다. 전일/당일/익일 3영업일 정보를 반환합니다. 모든 시간은 KST(+09:00) 기준.

Rate Limits Group: `MARKET_INFO`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| date | string (date) | 선택 | 조회 기준일 (YYYY-MM-DD) |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/market-calendar/KR?date=2026-03-25' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "today": {
      "date": "2026-03-25",
      "integrated": {
        "preMarket": {
          "startTime": "2026-03-25T08:00:00+09:00",
          "singlePriceAuctionStartTime": "2026-03-25T08:50:00+09:00",
          "endTime": "2026-03-25T09:00:00+09:00"
        },
        "regularMarket": {
          "startTime": "2026-03-25T09:00:00+09:00",
          "singlePriceAuctionStartTime": "2026-03-25T15:20:00+09:00",
          "endTime": "2026-03-25T15:30:00+09:00"
        },
        "afterMarket": {
          "startTime": "2026-03-25T15:30:00+09:00",
          "singlePriceAuctionEndTime": "2026-03-25T15:40:00+09:00",
          "endTime": "2026-03-25T20:00:00+09:00"
        }
      }
    },
    "previousBusinessDay": {
      "date": "2026-03-24",
      "integrated": {
        "preMarket": {
          "startTime": "2026-03-24T08:00:00+09:00",
          "singlePriceAuctionStartTime": "2026-03-24T08:50:00+09:00",
          "endTime": "2026-03-24T09:00:00+09:00"
        },
        "regularMarket": {
          "startTime": "2026-03-24T09:00:00+09:00",
          "singlePriceAuctionStartTime": "2026-03-24T15:20:00+09:00",
          "endTime": "2026-03-24T15:30:00+09:00"
        },
        "afterMarket": {
          "startTime": "2026-03-24T15:30:00+09:00",
          "singlePriceAuctionEndTime": "2026-03-24T15:40:00+09:00",
          "endTime": "2026-03-24T20:00:00+09:00"
        }
      }
    },
    "nextBusinessDay": {
      "date": "2026-03-26",
      "integrated": {
        "preMarket": {
          "startTime": "2026-03-26T08:00:00+09:00",
          "singlePriceAuctionStartTime": "2026-03-26T08:50:00+09:00",
          "endTime": "2026-03-26T09:00:00+09:00"
        },
        "regularMarket": {
          "startTime": "2026-03-26T09:00:00+09:00",
          "singlePriceAuctionStartTime": "2026-03-26T15:20:00+09:00",
          "endTime": "2026-03-26T15:30:00+09:00"
        },
        "afterMarket": {
          "startTime": "2026-03-26T15:30:00+09:00",
          "singlePriceAuctionEndTime": "2026-03-26T15:40:00+09:00",
          "endTime": "2026-03-26T20:00:00+09:00"
        }
      }
    }
  }
}
```

## 해외 장 운영 정보 조회

미국 시장의 장 운영 시간을 조회합니다. 4 세션(`dayMarket`, `preMarket`, `regularMarket`, `afterMarket`) 별로 nullable. 휴장 시 4 세션 모두 null. 전일/당일/익일 3영업일 정보를 반환합니다. 모든 시간은 KST(+09:00) 기준.

Rate Limits Group: `MARKET_INFO`

Query Parameters ;

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| date | string (date) | 선택 | 조회 기준일 (YYYY-MM-DD, 미국 현지 날짜) |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/market-calendar/US?date=2026-03-25' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "today": {
      "date": "2026-03-25",
      "dayMarket": {
        "startTime": "2026-03-25T09:00:00+09:00",
        "endTime": "2026-03-25T16:50:00+09:00"
      },
      "preMarket": {
        "startTime": "2026-03-25T17:00:00+09:00",
        "endTime": "2026-03-25T22:30:00+09:00"
      },
      "regularMarket": {
        "startTime": "2026-03-25T22:30:00+09:00",
        "endTime": "2026-03-26T05:00:00+09:00"
      },
      "afterMarket": {
        "startTime": "2026-03-26T05:00:00+09:00",
        "endTime": "2026-03-26T07:00:00+09:00"
      }
    },
    "previousBusinessDay": {
      "date": "2026-03-24",
      "dayMarket": {
        "startTime": "2026-03-24T09:00:00+09:00",
        "endTime": "2026-03-24T16:50:00+09:00"
      },
      "preMarket": {
        "startTime": "2026-03-24T17:00:00+09:00",
        "endTime": "2026-03-24T22:30:00+09:00"
      },
      "regularMarket": {
        "startTime": "2026-03-24T22:30:00+09:00",
        "endTime": "2026-03-25T05:00:00+09:00"
      },
      "afterMarket": {
        "startTime": "2026-03-25T05:00:00+09:00",
        "endTime": "2026-03-25T07:00:00+09:00"
      }
    },
    "nextBusinessDay": {
      "date": "2026-03-26",
      "dayMarket": {
        "startTime": "2026-03-26T09:00:00+09:00",
        "endTime": "2026-03-26T16:50:00+09:00"
      },
      "preMarket": {
        "startTime": "2026-03-26T17:00:00+09:00",
        "endTime": "2026-03-26T22:30:00+09:00"
      },
      "regularMarket": {
        "startTime": "2026-03-26T22:30:00+09:00",
        "endTime": "2026-03-27T05:00:00+09:00"
      },
      "afterMarket": {
        "startTime": "2026-03-27T05:00:00+09:00",
        "endTime": "2026-03-27T07:00:00+09:00"
      }
    }
  }
}
```
