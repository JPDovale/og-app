import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const userLogged = false

  return (
    <NavigationContainer>
      {userLogged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
