import axios from 'axios'
import { CookieJar } from 'tough-cookie'
import { wrapper } from 'axios-cookiejar-support'
import { IResponse } from './responses/IResponse'

const cookieJar = new CookieJar()

const APIConfig = axios.create({
  baseURL: 'http://192.168.1.10:3030/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'On-Application': '@og-App',
  },
  jar: cookieJar,
})

wrapper(APIConfig)

APIConfig.interceptors.response.use(
  (res) => ({ ...res.data, headers: res.headers }),
  (error) => {
    if (error.response && error.response.data) {
      return Promise.resolve(error.response.data)
    } else {
      const error = {
        data: {
          ok: false,
          error: {
            title:
              'Erro ao se comunicar com o servidor. Tente novamente mais tarde',
            message:
              'Erro ao se comunicar com o servidor. Tente novamente mais tarde',
          },
        },
      }

      return Promise.resolve(error)
    }
  },
)

const api = {
  get: <TypeOfResponse>(url: string) =>
    APIConfig.get<any, IResponse<TypeOfResponse>>(url),

  post: <TypeOfResponse>(url: string, data?: any) =>
    APIConfig.post<any, IResponse<TypeOfResponse>>(url, data),

  put: <TypeOfResponse>(url: string, data?: any) =>
    APIConfig.put<any, IResponse<TypeOfResponse>>(url, data),

  delete: <TypeOfResponse>(url: string) =>
    APIConfig.delete<any, IResponse<TypeOfResponse>>(url),
}

export { api, APIConfig }
