# Auth

토스증권 Open API의 모든 요청에 필요한 액세스 토큰을 발급하는 그룹입니다. OAuth 2.0 Client Credentials Grant 방식으로 `client_id`·`client_secret`을 토큰으로 교환하며, 발급된 토큰은 이후 모든 API의 `Authorization: Bearer` 헤더에 사용됩니다. 이 그룹의 엔드포인트만 `Authorization` 헤더 없이 호출하며, 응답은 BFF 공통 envelope이 아닌 OAuth 2.0 표준 형식을 따릅니다.

## OAuth2 액세스 토큰 발급

OAuth 2.0 Client Credentials Grant 로 access token 을 발급합니다.

- 요청 본문은 `application/x-www-form-urlencoded` 으로 전송합니다.
- 발급된 token 은 다른 모든 API 의 `Authorization: Bearer {access_token}` 헤더에 사용합니다.
- 응답 형식은 BFF 공통 envelope 이 아닌 OAuth2 표준 형식을 따릅니다.
- refresh token 은 제공되지 않습니다. 만료 시 동일 엔드포인트로 재발급합니다.
- client 당 유효한 access token 은 1 개입니다. 재발급 시 이전에 발급된 token 은 즉시 무효화됩니다.

Rate Limits Group: `AUTH`

Body :

| 필드명 | 타입 | 필수 여부 | 예시 / 설명 |
| :--- | :--- | :--- | :--- |
| client_id | string | 필수 | 발급받은 클라이언트 ID |
| client_secret | string (password) | 필수 | 발급받은 클라이언트 시크릿. 노출되지 않도록 서버 측에서만 사용합니다. |
| grant_type | enum (const: `client_credentials`) | 필수 | 인증 방식. `client_credentials` 만 지원합니다. |

Example :

```shell
curl https://openapi.tossinvest.com/oauth2/token \
  --request POST \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=client_credentials' \
  --data-urlencode 'client_id=c_01HXYZABCDEFG123456789' \
  --data-urlencode 'client_secret=s_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

```json
{
  "access_token": "eyJraWQiOiIyMDI2LTA0LTAxLWtleSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjXzAxSFhZWiJ9...",
  "token_type": "Bearer",
  "expires_in": 86400
}
```
