# Account

사용자 본인의 계좌 목록을 조회하는 그룹입니다. 해지·휴면 등을 제외한 정상 상태의 계좌만 반환하며, 계좌가 없으면 빈 배열을 응답합니다. 응답에 포함된 `accountSeq`는 보유 주식·주문·매수 가능 금액 등 계좌정보가 필요한 모든 API의 `X-Tossinvest-Account` 헤더 값으로 사용되므로, 다른 계좌 관련 API를 호출하기 전 가장 먼저 호출하는 진입점에 해당합니다.

## 계좌 목록 조회

사용자의 계좌 목록을 조회합니다.

현재는 종합매매 (`BROKERAGE`) 계좌만 반환하며, 계좌가 없으면 빈 배열. 자녀계좌는 사용할 수 없습니다.
응답의 `accountSeq` 는 다른 모든 사용자 컨텍스트 API (보유 주식, 주문, 매수가능금액 등) 의 `X-Tossinvest-Account` 헤더에 사용합니다.
`accountType` enum 은 `BROKERAGE` / `OVERSEAS_DERIVATIVES` / `PENSION_SAVINGS` / `RESHORING_INVESTMENT` 가 정의되어 있으나 본 API 에서는 현재 `BROKERAGE` 만 노출됩니다. enum 의미는 `Account.accountType schema` 참조.

Rate Limits Group: `ACCOUNT`

Example :

```shell
curl https://openapi.tossinvest.com/api/v1/accounts \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

```json
{
  "result": [
    {
      "accountNo": "12345678901",
      "accountSeq": 1,
      "accountType": "BROKERAGE"
    }
  ]
}
```
