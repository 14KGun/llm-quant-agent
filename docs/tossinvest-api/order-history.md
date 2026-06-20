# Order History

제출한 주문의 처리 상태와 체결 내역을 조회하는 그룹입니다. `status` 파라미터로 라이프사이클 그룹(현재 진행 중 주문 `OPEN`, 종료된 주문 `CLOSED`)을 선택해 주문 목록을 조회하고, 개별 `orderId`로 모든 상태의 주문 상세를 조회할 수 있습니다. 상세 조회는 부분 체결 내역 등 주문 단위 정보를 포함합니다. 호출 시 `X-Tossinvest-Account` 헤더가 필요합니다.

## 주문 목록 조회

주문 목록을 조회합니다. status 파라미터로 주문 상태를 필터링합니다.

지원하는 status 값:

- 진행 중 주문: `OPEN` -- PENDING, PARTIAL_FILLED, PENDING_CANCEL, PENDING_REPLACE 상태의 주문을 반환
- 종료된 주문: `CLOSED` -- FILLED, CANCELED, REJECTED, REPLACED 등 종료 상태 주문을 반환합니다.
symbol을 지정하면 해당 종목의 주문만 필터링하여 반환합니다.

페이징 동작:

- `status=OPEN`: 모든 대기 중 주문을 전량 반환합니다. `limit`, `cursor` 는 무시되며, `from`/`to` 만 주문 생성일(`orderedAt`, KST 기준) 범위 필터로 적용됩니다 (미지정 시 전체 기간).
- `status=CLOSED`: `limit` (기본 20, 최대 100), `cursor`, `from`/`to` 파라미터 모두 적용됩니다.

Rate Limits Group: `ORDER_HISTORY`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `status` | enum | 필수 | **Values:** `OPEN`, `CLOSED` <br><br>주문 라이프사이클 그룹 필터. 각 주문의 세부 상태(`orders[].status`)를 그룹화한 라벨이며, `orders[].status`와 값 체계가 다릅니다.<br>• `OPEN`: 진행 중 주문 그룹 ($\in$ {`PENDING`, `PARTIAL_FILLED`, `PENDING_CANCEL`, `PENDING_REPLACE`})<br>• `CLOSED`: 종료된 주문 그룹 ($\in$ {`FILLED`, `CANCELED`, `REJECTED`, `REPLACED`, `CANCEL_REJECTED`, `REPLACE_REJECTED`, `PARTIAL_FILLED`})<br>※ 예: `status=OPEN`을 요청하면 응답의 `orders[].status`는 개별 주문에 따라 `PENDING`, `PARTIAL_FILLED` 등으로 내려옵니다. |
| `symbol` | string | 선택 | **Pattern:** `^[A-Za-z0-9.\-]+$` <br><br>종목 심볼. 지정 시 해당 종목의 주문만 조회. KRX: 6자리 숫자 (예: `005930`), US: 영문 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |
| `from` | string (date) | 선택 | **Format:** YYYY-MM-DD (KST 기준, inclusive) <br><br>주문 생성 시간(`orderedAt`) 기준 조회 시작일. 미지정 시 전체 기간 조회. |
| `to` | string (date) | 선택 | **Format:** YYYY-MM-DD (KST 기준, inclusive) <br><br>주문 생성 시간(`orderedAt`) 기준 조회 종료일. 미지정 시 전체 기간 조회. |
| `cursor` | string | 선택 | 페이지네이션 커서. `OPEN` 그룹에서는 무시되며, `CLOSED` 그룹에서 다음 페이지를 조회할 때 사용됩니다. |
| `limit` | integer | 선택 | **Min:** 1, **Max:** 100, **Default:** 20 <br><br>페이지 크기. `OPEN` 그룹에서는 무시(전량 반환)되고, `CLOSED` 그룹에서만 적용됩니다. |

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `X-Tossinvest-Account` | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/orders?status=OPEN&symbol=005930&from=2026-03-01&to=2026-03-31&cursor=&limit=20' \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "orders": [
      {
        "orderId": "bAGzNvMOOTa5Uy0xVzYNbxDJ3Qpobwau4jDF3hyZZGWbpHm7wha8CFZc7aXVOWAl",
        "symbol": "005930",
        "side": "BUY",
        "orderType": "LIMIT",
        "timeInForce": "DAY",
        "status": "PENDING",
        "price": "70000",
        "quantity": "10",
        "orderAmount": null,
        "currency": "KRW",
        "orderedAt": "2026-03-29T09:30:00+09:00",
        "canceledAt": null,
        "execution": {
          "filledQuantity": "0",
          "averageFilledPrice": null,
          "filledAmount": null,
          "commission": null,
          "tax": null,
          "filledAt": null,
          "settlementDate": null
        }
      },
      {
        "orderId": "RpP3_wtsiKe9btBvdendaHoBqOIY_Zb_xPkRfYaqCIvf2FXtMDv_mo7VnD7KB-ia",
        "symbol": "AAPL",
        "side": "SELL",
        "orderType": "LIMIT",
        "timeInForce": "DAY",
        "status": "PARTIAL_FILLED",
        "price": "185.5",
        "quantity": "5",
        "orderAmount": null,
        "currency": "USD",
        "orderedAt": "2026-03-29T10:00:00+09:00",
        "canceledAt": null,
        "execution": {
          "filledQuantity": "2",
          "averageFilledPrice": "185.25",
          "filledAmount": "370.5",
          "commission": "0.66",
          "tax": "0",
          "filledAt": "2026-03-29T10:00:05+09:00",
          "settlementDate": null
        }
      }
    ],
    "nextCursor": null,
    "hasNext": false
  }
}
```

## 주문 상세 조회

특정 주문의 상세 정보를 조회합니다. 모든 주문 상태(체결 완료, 취소, 거부 등)의 주문을 조회할 수 있습니다.

Rate Limits Group: `ORDER_HISTORY`

Path Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `orderId` | string | 필수 | 주문 식별자. 서버에서 발급한 opaque token 입니다. |

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `X-Tossinvest-Account` | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Example :

```shell
curl https://openapi.tossinvest.com/api/v1/orders/0d5QIHjmtksbsmM-hBRAgP-ExI8iodGm9fAR5txelPfnMM8XQ_swoJdwL5RpGWMo \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": {
    "orderId": "0d5QIHjmtksbsmM-hBRAgP-ExI8iodGm9fAR5txelPfnMM8XQ_swoJdwL5RpGWMo",
    "symbol": "005930",
    "side": "BUY",
    "orderType": "LIMIT",
    "timeInForce": "DAY",
    "status": "FILLED",
    "price": "70000",
    "quantity": "10",
    "orderAmount": null,
    "currency": "KRW",
    "orderedAt": "2026-03-28T09:30:00+09:00",
    "canceledAt": null,
    "execution": {
      "filledQuantity": "10",
      "averageFilledPrice": "70000",
      "filledAmount": "700000",
      "commission": "1400",
      "tax": "0",
      "filledAt": "2026-03-28T09:31:15+09:00",
      "settlementDate": "2026-03-30"
    }
  }
}
```
