export function cookieParser(cookie: string) {
  const [, cok1, cok2] = cookie.split('@')

  const tokens = {
    refreshToken: cok1.split('=')[1].split(';')[0],
    token: cok2.split('=')[1].split(';')[0],
  }

  return tokens
}
