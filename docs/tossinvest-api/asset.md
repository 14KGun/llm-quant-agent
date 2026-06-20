# Asset

본인 계좌의 보유 자산 현황을 조회하는 그룹입니다. 종목별 보유 수량·매입가·평가금액·손익과 함께 계좌 전체의 합산 요약을 제공합니다. 국내(KR)·미국(US) 주식이 대상이며 해외 옵션·채권 등은 제외됩니다. 손익률은 원화(KRW) 환산 기준으로 계산됩니다. 호출 시 액세스 토큰과 `X-Tossinvest-Account` 헤더가 함께 필요합니다.

## 보유 주식 조회​

보유 주식 정보를 조회합니다. 국내(KR)·미국(US) 주식만 포함하며, 해외 옵션·채권은 제외합니다. 보유 종목이 없으면 요약 금액은 0이고 items는 빈 배열입니다.

Rate Limits Group: `ASSET`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `symbol` | string | 선택 | **Pattern:** `^[A-Za-z0-9.\-]+$` / 종목 심볼. KR: 6자리 숫자 (예: `005930`), US: 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. 제공 시 해당 종목만 필터링하여 반환하며, 요약 필드도 해당 종목 기준으로 재계산합니다. 미제공 시 전체 보유 종목을 반환합니다. |

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| X-Tossinvest-Account | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/holdings?symbol=005930' \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "totalPurchaseAmount": {
      "krw": "6500000",
      "usd": "1553"
    },
    "marketValue": {
      "amount": {
        "krw": "7200000",
        "usd": "1785"
      },
      "amountAfterCost": {
        "krw": "7050000",
        "usd": "1771.43"
      }
    },
    "profitLoss": {
      "amount": {
        "krw": "700000",
        "usd": "232"
      },
      "amountAfterCost": {
        "krw": "550000",
        "usd": "218.43"
      },
      "rate": "0.1179",
      "rateAfterCost": "0.0983"
    },
    "dailyProfitLoss": {
      "amount": {
        "krw": "100000",
        "usd": "25"
      },
      "rate": "0.0141"
    },
    "items": [
      {
        "symbol": "005930",
        "name": "삼성전자",
        "marketCountry": "KR",
        "currency": "KRW",
        "quantity": "100",
        "lastPrice": "72000",
        "averagePurchasePrice": "65000",
        "marketValue": {
          "purchaseAmount": "6500000",
          "amount": "7200000",
          "amountAfterCost": "7050000"
        },
        "profitLoss": {
          "amount": "700000",
          "amountAfterCost": "550000",
          "rate": "0.1077",
          "rateAfterCost": "0.0846"
        },
        "dailyProfitLoss": {
          "amount": "100000",
          "rate": "0.0141"
        },
        "cost": {
          "commission": "14400",
          "tax": "135600"
        }
      },
      {
        "symbol": "AAPL",
        "name": "Apple Inc.",
        "marketCountry": "US",
        "currency": "USD",
        "quantity": "10",
        "lastPrice": "178.5",
        "averagePurchasePrice": "155.3",
        "marketValue": {
          "purchaseAmount": "1553",
          "amount": "1785",
          "amountAfterCost": "1771.43"
        },
        "profitLoss": {
          "amount": "232",
          "amountAfterCost": "218.43",
          "rate": "0.1494",
          "rateAfterCost": "0.1406"
        },
        "dailyProfitLoss": {
          "amount": "25",
          "rate": "0.0142"
        },
        "cost": {
          "commission": "3.57",
          "tax": "10"
        }
      }
    ]
  }
}
```
