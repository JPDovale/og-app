import { IRefetchUser } from '@hooks/useUser/types/IRefetchUser'
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

interface IAuthRoutesProps {
  validateUserLoggedIn: IRefetchUser
}

export function AuthRoutes({ validateUserLoggedIn }: IAuthRoutesProps) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login">
        {() => <LoginPage validateUserLoggedIn={validateUserLoggedIn} />}
      </Screen>
      <Screen name="register" component={RegisterPage} />
    </Navigator>
  )
}
