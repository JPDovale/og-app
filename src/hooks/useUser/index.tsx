import { api, APIConfig } from '@api/index'
import { IResponse } from '@api/responses/IResponse'
import { IUserResponse } from '@api/responses/IUserResponse'
import { useConnection } from '@hooks/useConnection'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { useQuery } from 'react-query'

export function useUser() {
  const { User } = useLocalStorage()
  const { fetchConnection } = useConnection()

  const { data, isLoading, refetch } = useQuery(
    'user',
    async () => {
      const tokens = await User.getUsersTokens()
      let response: IResponse<IUserResponse> | null
      const connection = await fetchConnection()

      if (tokens) {
        APIConfig.defaults.headers.cookies = JSON.stringify(tokens)
      }

      if (connection.isConnected) {
        response = await api.get<IUserResponse>('/users')

        if (!response.ok) {
          const refresh = await api.post('/sessions/refresh')

          if (refresh.ok) {
            response = await api.get('/users')
          }
        }
      } else {
        const userSavedInLocalStorage = await User.getUser()

        response = userSavedInLocalStorage
          ? {
              headers: null,
              ok: true,
              data: {
                user: userSavedInLocalStorage,
              },
            }
          : null
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

  if (user) {
    User.saveUser(user)
  }

  return { user, userLoggedIn, loadingUser, userIsPro, refetchUser }
}
