import { NavigationContainer } from '@react-navigation/native'
import { useUser } from '@hooks/useUser'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { Loading } from '@components/Loading'
import { View } from 'react-native'

export function Routes() {
  const { userLoggedIn, refetchUser, loadingUser } = useUser()

  return (
    <View
      style={{
        flex: 1,
      }}
      className="bg-gray900 flex"
    >
      <NavigationContainer>
        {loadingUser ? (
          <Loading />
        ) : userLoggedIn ? (
          <AppRoutes />
        ) : (
          <AuthRoutes validateUserLoggedIn={refetchUser} />
        )}
      </NavigationContainer>
    </View>
  )
}
