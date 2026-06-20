# Order

실제 매매 주문을 처리하는 그룹입니다. 지정가·시장가 주문 생성, 미체결 주문의 가격·수량 정정, 주문 취소를 지원합니다. 계좌에 직접 영향을 주는 API이므로 액세스 토큰과 `X-Tossinvest-Account` 헤더가 모두 필요합니다.

## 주문 생성

매수 또는 매도 주문을 생성합니다.

수량 지정 방식 — `quantity`, `orderAmount` 중 정확히 하나를 사용:

- `quantity`: 주문 수량 (주 단위). 지정한 수량만큼 주문
- `orderAmount`: 주문 금액 (달러). 지정한 금액만큼 주문하며, 체결 수량은 시장가에 따라 결정. US MARKET 전용

금액 주문 (`orderAmount`): 정규장 시간에만 가능합니다. 정규장 외 시간에 호출 시 `422 amount-order-outside-regular-hours` 를 반환합니다.

Rate Limits Group: `ORDER`

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| X-Tossinvest-Account | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Body (수량 기반 주문. quantity 로 주문 수량을 지정.) :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `orderType` | enum | 필수 | **Values:** `LIMIT`, `MARKET` <br><br>호가 유형. <br>• `LIMIT`: 지정가<br>• `MARKET`: 시장가 |
| `quantity` | string (decimal) | 필수 | **Max Length:** 30, **Pattern:** `^\d+$` <br><br>주문 수량 (주 단위). 지정한 수량만큼 주문합니다. 정수만 가능합니다. (소수점 불가능. 소수점 주문 시 Amount-based variant 의 `orderAmount` 를 사용해야 합니다.) |
| `side` | enum | 필수 | **Values:** `BUY`, `SELL` <br><br>주문 방향 |
| `symbol` | string | 필수 | 종목 심볼. KRX: 6자리 숫자, US: 영문 티커 |
| `clientOrderId` | string | 선택 | **Max Length:** 36, **Pattern:** `^[a-zA-Z0-9\-_]+$` <br><br>클라이언트 지정 주문 식별자. 멱등성 키로 사용됩니다.<br>• **미전달:** 멱등성 미적용. 매 요청을 별개 주문으로 처리합니다.<br>• **전달:** 동일 값으로 재요청 시 이전 주문 결과를 그대로 재반환합니다. 최대 36자, 영숫자 및 `-`, `_` 허용. 멱등성 키는 10분간 유효하며, 이후 동일 값으로 재요청 시 새 주문으로 처리됩니다. |
| `confirmHighValueOrder` | boolean | 선택 | **Default:** `false` <br><br>착오주문 방지를 위한 주문 확인 플래그. 1억원 이상의 주문 시 `true`가 아니면 `400 confirm-high-value-required` 에러를 반환합니다. 사용자가 해당 주문의 금액을 인지하고 있음을 표시하기 위한 필드입니다. |
| `price` | string (decimal) | 조건부 필수 | **Max Length:** 30, **Pattern:** `^\d+(\.\d+)?$` <br><br>주문 가격. `orderType`이 `LIMIT` 일 때만 사용합니다.<br>• `LIMIT`: 필수. 미전달 시 `400 invalid-request`.<br>• `MARKET`: 전달 불가. 전달 시 `400 invalid-request`.<br>• **KR:** 정수 (원 단위). 호가 단위에 맞지 않으면 `400 invalid-request` 에러와 함께 올바른 호가 단위가 `data`에 포함됩니다.<br>• **US:** 소수점 (달러 단위). \$1 미만은 소수점 넷째 자리까지, \$1 이상은 소수점 둘째 자리까지 허용하며 그 이하 자릿수는 절삭합니다. |
| `timeInForce` | enum | 선택 | **Values:** `DAY`, `CLS`, **Default:** `DAY` <br><br>주문 유효 조건 (Time In Force). `orderType` 과 결합되어 주문 방식이 결정됩니다 (예: `LIMIT` + `CLS` = LOC).<br>• `DAY`: 당일 유효. 정규장 종료까지 미체결분은 자동 취소됩니다.<br>• `CLS`: 장 마감 주문. 현재 미국 주식 + `orderType=LIMIT` 조합만 지원합니다. |

Body (금액 기반 주문 (US MARKET 전용). orderAmount 로 주문 금액을 지정.) :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `orderAmount` | string (decimal) | 필수 | **Max Length:** 30, **Pattern:** `^\d+(\.\d+)?$` <br><br>주문 금액 (달러). 지정한 금액만큼 주문합니다. 체결 수량은 체결 시점의 시장가에 따라 결정됩니다.<br>• **Quantity-based 와의 차이:** quantity는 수량을 확정하고 비용이 변동하며, `orderAmount`는 금액을 확정하고 수량이 변동합니다.<br>• **운영 시간:** 정규장 시간에만 접수 가능합니다. 정규장 시간 외 요청 시 `422 amount-order-outside-regular-hours` 에러를 반환합니다. |
| `orderType` | enum (const: `MARKET`) | 필수 | **Values:** `MARKET` <br><br>호가 유형. 금액 기반 주문은 `MARKET` 만 허용합니다. |
| `side` | enum | 필수 | **Values:** `BUY`, `SELL` <br><br>주문 방향 |
| `symbol` | string | 필수 | US 종목 심볼 (영문 티커). 금액 기반 주문은 US MARKET 전용입니다. |
| `clientOrderId` | string | 선택 | **Max Length:** 36, **Pattern:** `^[a-zA-Z0-9\-_]+$` <br><br>클라이언트 지정 주문 식별자. 멱등성 키로 사용됩니다.<br>• **미전달:** 멱등성 미적용. 매 요청을 별개 주문으로 처리합니다.<br>• **전달:** 동일 값으로 재요청 시 이전 주문 결과를 그대로 재반환합니다. 최대 36자, 영숫자 및 `-`, `_` 허용. 멱등성 키는 10분간 유효하며, 이후 동일 값으로 재요청 시 새 주문으로 처리됩니다. |
| `confirmHighValueOrder` | boolean | 선택 | **Default:** `false` <br><br>착오주문 방지를 위한 주문 확인 플래그. 1억원 이상의 주문 시 `true`가 아니면 `400 confirm-high-value-required` 에러를 반환합니다. 사용자가 해당 주문의 금액을 인지하고 있음을 표시하기 위한 필드입니다. |

Example :

국내주식 지정가 매수

```shell
curl https://openapi.tossinvest.com/api/v1/orders \
  --request POST \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --data '{
  "clientOrderId": "my-order-001",
  "symbol": "005930",
  "side": "BUY",
  "orderType": "LIMIT",
  "quantity": "10",
  "price": "70000"
}'
```

해외주식 소수점 시장가 매수 (금액)
```shell
curl https://openapi.tossinvest.com/api/v1/orders \
  --request POST \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --data '{
  "symbol": "AAPL",
  "side": "BUY",
  "orderType": "MARKET",
  "orderAmount": "100.5"
}'
```

해외주식 종가 지정가 매수 (LOC = LIMIT + CLS)
```shell
curl https://openapi.tossinvest.com/api/v1/orders \
  --request POST \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --data '{
  "symbol": "AAPL",
  "side": "BUY",
  "orderType": "LIMIT",
  "timeInForce": "CLS",
  "quantity": "10",
  "price": "185.5"
}'
```

```json
{
  "result": {
    "orderId": "0d5QIHjmtksbsmM-hBRAgP-ExI8iodGm9fAR5txelPfnMM8XQ_swoJdwL5RpGWMo",
    "clientOrderId": "my-order-001"
  }
}
```

## 주문 정정​

Copy link
기존 주문의 가격 또는 수량을 정정합니다.

- KR 주식: `quantity` 필수. 양의 정수만 허용합니다.
- US 주식: `quantity` 제공 불가. 가격 변경만 지원합니다. `quantity` 제공 시 `400 us-modify-quantity-not-supported` 에러를 반환합니다.

Rate Limits Group: `ORDER`

Path Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `orderId` | string | 필수 | 주문 식별자. 서버에서 발급한 opaque token 입니다. |

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `X-Tossinvest-Account` | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Body :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `orderType` | enum | 필수 | **Values:** `LIMIT`, `MARKET` <br><br>변경할 호가 유형.<br>• `LIMIT`: 지정가<br>• `MARKET`: 시장가 |
| `confirmHighValueOrder` | boolean | 선택 | **Default:** `false` <br><br>착오주문 방지를 위한 주문 확인 플래그. <br>• 1억원 이상의 주문 시 `true`가 아니면 `400 confirm-high-value-required` 에러를 반환합니다. <br>• 30억원 이상의 주문은 본 플래그와 무관하게 `422 max-order-amount-exceeded` 에러를 반환합니다. |
| `price` | string (decimal) | 조건부 필수 | **Max Length:** 30, **Pattern:** `^\d+(\.\d+)?$` <br><br>변경할 가격. `orderType`이 `LIMIT` 일 때만 사용합니다.<br>• `LIMIT`: 필수. 미전달 시 `400 invalid-request`.<br>• `MARKET`: 전달 불가. 전달 시 `400 invalid-request`.<br>• **KR:** 정수 (원 단위). 호가 단위에 맞지 않으면 `400 invalid-request` 에러를 반환합니다.<br>• **US:** 소수점 (달러 단위). \$1 미만은 소수점 넷째 자리까지, \$1 이상은 소수점 둘째 자리까지 허용하며 그 이하 자릿수는 절삭합니다. |
| `quantity` | string (decimal) | 조건부 필수 | **Max Length:** 30, **Pattern:** `^\d+$` <br><br>변경할 수량.<br>• **KR 주식:** 필수. 양의 정수만 허용합니다 (미전달/0/음수/소수점은 `400 invalid-request`).<br>• **US 주식:** 전달 불가. 제공 시 `400 us-modify-quantity-not-supported` 에러를 반환합니다. |

Example :

```shell
curl https://openapi.tossinvest.com/api/v1/orders/0d5QIHjmtksbsmM-hBRAgP-ExI8iodGm9fAR5txelPfnMM8XQ_swoJdwL5RpGWMo/modify \
  --request POST \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --data '{
  "orderType": "LIMIT",
  "quantity": "15",
  "price": "71000"
}'
```

```json
{
  "result": {
    "orderId": "5nfzdqmzfnAw3LFXWHPRy0UNi7y_WZlphJh5hRIsi25-NIfm_GtQgXima5QD2hUz"
  }
}
```

## 주문 취소

기존 주문을 취소합니다. 이미 체결된 주문은 취소할 수 없습니다.

Rate Limits Group: `ORDER`

Path Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `orderId` | string | 필수 | 주문 식별자. 서버에서 발급한 opaque token 입니다. |

Headers :

| 헤더명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| `X-Tossinvest-Account` | integer (int64) | 필수 | API 요청 시 사용할 계좌의 `accountSeq`. `GET /api/v1/accounts` 응답의 `accountSeq` 값을 사용합니다. |

Body :

Empty object

Example :

```shell
curl https://openapi.tossinvest.com/api/v1/orders/0d5QIHjmtksbsmM-hBRAgP-ExI8iodGm9fAR5txelPfnMM8XQ_swoJdwL5RpGWMo/cancel \
  --request POST \
  --header 'X-Tossinvest-Account: 1' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --data '{}'
```

```json
{
  "result": {
    "orderId": "Kx9mTqR2vLwE7oPn3YhBjCf1dAsU6gZi8rNk4bWcXeJtMlSyDuQaHp5oVzI0FvRw"
  }
}
```
