import { NavigationContainer } from '@react-navigation/native'
import { useUser } from '@hooks/useUser'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { Loading } from '@components/Loading'

export function Routes() {
  const { userLoggedIn, refetchUser, loadingUser } = useUser()

  return (
    <NavigationContainer>
      {loadingUser ? (
        <Loading />
      ) : userLoggedIn ? (
        <AppRoutes />
      ) : (
        <AuthRoutes validateUserLoggedIn={refetchUser} />
      )}
    </NavigationContainer>
  )
}
