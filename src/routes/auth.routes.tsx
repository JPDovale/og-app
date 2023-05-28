import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { LoginPage } from '@screens/Login'
import { RegisterPage } from '@screens/Register'

type IAuthRoutes = {
  login: undefined
  register: undefined
}

export type IAuthNavigatorRoutesProps = NativeStackNavigationProp<IAuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<IAuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login" component={LoginPage} />
      <Screen name="register" component={RegisterPage} />
    </Navigator>
  )
}
