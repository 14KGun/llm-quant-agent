# Stock Info

종목명·시장·통화·상장 상태·발행주식수 등 종목의 기본 참조 정보와 매수 유의사항을 제공하는 그룹입니다. 정리매매·단기과열·투자경고/위험·VI 발동·신주인수권 같은 매수 시 주의가 필요한 정보도 조회할 수 있습니다. 응답은 영업일 단위(또는 그 이상)로 갱신되는 데이터이므로 짧은 주기로 폴링하지 말고 화면·세션 진입 시점에 한 번 캐시해 사용하기를 권장합니다.

## 종목 기본 정보 조회

종목의 기본 정보를 조회합니다. symbols 를 콤마로 구분하여 최대 200건 까지 다건 조회를 지원합니다. 종목명, 시장, 통화, 상장 상태, 거래정지 여부 등 트레이딩에서 필요한 참조 데이터를 제공합니다.

Rate Limits Group: `STOCK`

Query Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| symbols | string | 필수 | **Pattern:** `^[A-Za-z0-9.,\-]+$` <br><br>종목 심볼. 콤마로 구분하여 최대 200건. 예: `005930` 또는 `005930,AAPL`. 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |

Example :

```shell
curl 'https://openapi.tossinvest.com/api/v1/stocks?symbols=005930%2CAAPL' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": [
    {
      "symbol": "005930",
      "name": "삼성전자",
      "englishName": "SamsungElec",
      "isinCode": "KR7005930003",
      "market": "KOSPI",
      "securityType": "STOCK",
      "isCommonShare": true,
      "status": "ACTIVE",
      "currency": "KRW",
      "listDate": "1975-06-11",
      "delistDate": null,
      "sharesOutstanding": "5919637922",
      "leverageFactor": null,
      "koreanMarketDetail": {
        "liquidationTrading": false,
        "nxtSupported": true,
        "krxTradingSuspended": false,
        "nxtTradingSuspended": false
      }
    },
    {
      "symbol": "AAPL",
      "name": "애플",
      "englishName": "APPLE INC",
      "isinCode": "US0378331005",
      "market": "NASDAQ",
      "securityType": "STOCK",
      "isCommonShare": true,
      "status": "ACTIVE",
      "currency": "USD",
      "listDate": "1980-12-12",
      "delistDate": null,
      "sharesOutstanding": "14702703000",
      "leverageFactor": null,
      "koreanMarketDetail": null
    }
  ]
}
```

## 매수 유의사항 조회

종목의 매수 유의사항 및 변동성 완화(VI) 발동 정보를 조회합니다.

포함 종류: 정리매매(`LIQUIDATION_TRADING`), 단기과열종목(`OVERHEATED`), 투자경고(`INVESTMENT_WARNING`), 투자위험(`INVESTMENT_RISK`), VI 정적/동적/혼합(`VI_STATIC` / `VI_DYNAMIC` / `VI_STATIC_AND_DYNAMIC`), 신주인수권(`STOCK_WARRANTS`). 전체 enum 은 `StockWarning.warningType` 참조.

"활성"의 시간 기준: 응답 시점 기준으로 `startDate <= 오늘 <= endDate` 인 항목 (또는 `endDate` 가 `null` 인 진행 중 항목).

응답 정렬: `startDate` 내림차순 (최근 발동된 항목부터). `startDate` 가 동일한 경우 정렬 순서는 보장되지 않습니다.

데이터 적시성: VI 발동/해제는 거래소 이벤트 발생 후 수 초 내 반영됩니다. 정리매매·단기과열·투자경고/위험 지정은 거래소 공시 기준 일배치로 반영됩니다.

미존재 vs 빈 배열:

- 종목 자체가 없으면 `404 stock-not-found`.
- 종목은 있으나 활성 유의사항이 없으면 `200 OK` + `result: []`.

Rate Limits Group: `STOCK`

Path Parameters :

| 필드명 | 타입 | 필수 여부 | 제약 조건 / 설명 |
| :--- | :--- | :--- | :--- |
| symbol | string | 필수 | **Pattern:** `^[A-Za-z0-9.\-]+$` <br><br>종목 심볼. KRX: 6자리 숫자 (예: `005930`), US: 영문 티커 (예: `AAPL`). 영문 대/소문자, 숫자, '.', '-' 만 허용한다. |

Example :

```shell
curl https://openapi.tossinvest.com/api/v1/stocks/005930/warnings \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": [
    {
      "warningType": "OVERHEATED",
      "exchange": "KRX",
      "startDate": "2026-03-20",
      "endDate": "2026-03-27"
    },
    {
      "warningType": "VI_STATIC",
      "exchange": "KRX",
      "startDate": "2026-03-26",
      "endDate": null
    }
  ]
}
```
