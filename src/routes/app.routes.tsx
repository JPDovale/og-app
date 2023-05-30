import { useUser } from '@hooks/useUser'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { BoxesPage } from '@screens/Boxes'
import { HomePage } from '@screens/Home'
import { NotificationsPage } from '@screens/Notifications'
import { ToDoPage } from '@screens/ToDo'
import { UserPage } from '@screens/User'
import { Avatar } from 'native-base'
import {
  ListChecks,
  Package,
  ProjectorScreenChart,
  UserCircle,
} from 'phosphor-react-native'

type IAppStackRoutes = {
  app: undefined
  notifications: undefined
}

type IAppBottomTapRoutes = {
  home: undefined
  boxes: undefined
  toDo: undefined
  user: undefined
}

export type IAppNavigationBottomTabRoutesProps =
  BottomTabNavigationProp<IAppBottomTapRoutes>
export type IAppNavigationStackRoutesProps =
  NativeStackNavigationProp<IAppStackRoutes>

const BottomTap = createBottomTabNavigator<IAppBottomTapRoutes>()
const Stack = createNativeStackNavigator<IAppStackRoutes>()

export function AppRoutes() {
  const { user } = useUser()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="app">
        {() => (
          <BottomTap.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                height: 60,
                paddingBottom: 10,
                paddingTop: 10,
              },
            }}
          >
            <BottomTap.Screen
              name="home"
              component={HomePage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <ProjectorScreenChart
                    size={28}
                    color={focused ? '#8D5DF1' : '#120720'}
                  />
                ),
                tabBarLabelStyle: {
                  fontFamily: 'MarkaziText_700Bold',
                  textTransform: 'uppercase',
                  color: '#120720',
                  fontSize: 12,
                },
                tabBarLabel: 'Projetos',
              }}
            />

            <BottomTap.Screen
              name="boxes"
              component={BoxesPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Package size={28} color={focused ? '#8D5DF1' : '#120720'} />
                ),
                tabBarLabelStyle: {
                  fontFamily: 'MarkaziText_700Bold',
                  textTransform: 'uppercase',
                  color: '#120720',
                  fontSize: 12,
                },
                tabBarLabel: 'Boxes',
              }}
            />

            <BottomTap.Screen
              name="toDo"
              component={ToDoPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <ListChecks
                    size={28}
                    color={focused ? '#8D5DF1' : '#120720'}
                  />
                ),
                tabBarLabelStyle: {
                  fontFamily: 'MarkaziText_700Bold',
                  textTransform: 'uppercase',
                  color: '#120720',
                  fontSize: 12,
                },
                tabBarLabel: 'To-Do',
              }}
            />

            <BottomTap.Screen
              name="user"
              component={UserPage}
              options={{
                tabBarIcon: ({ focused }) =>
                  user?.infos.avatar.url ? (
                    <Avatar
                      source={{
                        uri: user.infos.avatar.url,
                      }}
                      size="sm"
                    />
                  ) : (
                    <UserCircle
                      size={28}
                      color={focused ? '#8D5DF1' : '#120720'}
                    />
                  ),
                tabBarLabelStyle: {
                  fontFamily: 'MarkaziText_700Bold',
                  textTransform: 'uppercase',
                  color: '#120720',
                  fontSize: 12,
                },
                tabBarLabel: 'Usuário',
              }}
            />
          </BottomTap.Navigator>
        )}
      </Stack.Screen>

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
