import {x, passport} from '@imtbl/sdk';

export default new passport.Passport({
  baseConfig: new x.ImmutableConfiguration({ environment: x.Environment.SANDBOX }),
  clientId: 'ZXqVQREW1YvBA17Xvcfbw7C3jz9LPLNG',
  scope: 'openid offline_access profile email transact',
  audience: 'platform_api',
  redirectUri: `http://localhost:3000/login/callback?whitelabel-id=${process.env.NEXT_PUBLIC_WHITELABEL_ID}`,
  logoutRedirectUri: `http://localhost:3000/logout/callback?whitelabel-id=${process.env.NEXT_PUBLIC_WHITELABEL_ID}`
});