import axios from 'axios'
// import { CookieJar } from 'tough-cookie'
// import { wrapper } from 'axios-cookiejar-support'

// const cookieJar = new CookieJar()

export const api = axios.create({
  baseURL: 'http://192.168.1.9:3030/api',
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // jar: cookieJar,
})

// wrapper(api)
