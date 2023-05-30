import { api, APIConfig } from '@api/index'
import { IUserResponse } from '@api/responses/IUserResponse'
import { getTokens } from '@storage/user/functions/getTokens'
import { useQuery } from 'react-query'

export function useUser() {
  const { data, isLoading, refetch } = useQuery(
    'user',
    async () => {
      const tokens = await getTokens()
      if (tokens) {
        APIConfig.defaults.headers.cookies = JSON.stringify(tokens)
      }

      let response = await api.get<IUserResponse>('/users')

      if (!response.ok) {
        const refresh = await api.post('/sessions/refresh')

        if (refresh.ok) {
          response = await api.get('/users')
        }
      }

      const user = response?.data?.user ?? null

      return { user }
    },
    {
      staleTime: 1000 * 60 * 60 * 24, // 1 day
    },
  )

  const user = data?.user ?? null
  const userLoggedIn = !!user
  const refetchUser = refetch
  const loadingUser = isLoading
  const userIsPro =
    user?.account.subscription &&
    (user?.account.subscription.status === 'active' ||
      user?.account.subscription.expiresAt === null)

  return { user, userLoggedIn, loadingUser, userIsPro, refetchUser }
}
