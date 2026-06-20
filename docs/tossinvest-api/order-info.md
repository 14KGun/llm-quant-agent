# Order Info

주문을 내기 전 확인하는 거래 가능 정보를 제공하는 그룹입니다. 미수거래를 제외한 현금 기반 매수 가능 금액, 종목별 매도 가능 수량, 시장별 매매 수수료를 조회할 수 있습니다. 주문 화면에서 입력 가능한 최대 수량·금액을 안내하거나 예상 비용을 계산하는 용도로 활용하며, 정확한 주문 검증을 위해 주문 생성 직전에 호출하는 것을 권장합니다. 호출 시 `X-Tossinvest-Account` 헤더가 필요합니다.

## 매수 가능 금액 조회

매수 주문 시 사용할 수 있는 매수 가능 금액을 조회합니다. 미수거래를 제외한 현금 기반 매수 가능 금액(미수 미발생 기준)을 반환합니다.

Rate Limits Group: `ORDER_INFO`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `currency` | enum | 필수 | **Values:** `KRW`, `USD` <br><br>통화 코드 |

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `X-Tossinvest-Account` | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/buying-power?currency=KRW' \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "currency": "KRW",
    "cashBuyingPower": "5000000"
  }
}
```

## 판매 가능 수량 조회

특정 종목의 판매 가능 수량을 조회합니다.

Rate Limits Group: `ORDER_INFO`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `symbol` | string | 필수 | **Pattern:** `^[A-Za-z0-9.\-]+$` / 종목 심볼. KRX: 6자리 숫자 (예: `005930`), US: 영문 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `X-Tossinvest-Account` | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/sellable-quantity?symbol=005930' \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "sellableQuantity": "100"
  }
}
```

## 매매 수수료 조회

현재 계좌의 시장별 매매 수수료율을 조회합니다. 국내주식과 해외주식의 수수료 정보를 배열로 반환합니다.

Rate Limits Group: `ORDER_INFO`

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `X-Tossinvest-Account` | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Example :

```shell
curl https://openapi.tossinvest.com/api/v1/commissions \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": [
    {
      "marketCountry": "KR",
      "commissionRate": "0.015",
      "startDate": "2026-01-01",
      "endDate": "2026-12-31"
    },
    {
      "marketCountry": "US",
      "commissionRate": "0.1",
      "startDate": null,
      "endDate": "2026-06-30"
    }
  ]
}
```
