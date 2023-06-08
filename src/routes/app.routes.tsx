import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { NotificationsPage } from '@screens/Notifications'
import { BottomRoutes } from './bottom.routes'
import { DrawerRoutes } from './drawer.routes'

type IAppStackRoutes = {
  app: undefined
  notifications: undefined
  entryProject: {
    projectId: string
  }
}

export type IAppNavigationStackRoutesProps =
  NativeStackNavigationProp<IAppStackRoutes>

const Stack = createNativeStackNavigator<IAppStackRoutes>()

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="app" component={BottomRoutes} />

      <Stack.Screen
        name="entryProject"
        component={DrawerRoutes}
        options={{
          animation: 'slide_from_bottom',
        }}
      />

      <Stack.Screen
        name="notifications"
        component={NotificationsPage}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  )
}
