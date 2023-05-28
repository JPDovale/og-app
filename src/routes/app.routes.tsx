import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { BoxesPage } from '@screens/Boxes'
import { HomePage } from '@screens/Home'
import { ToDoPage } from '@screens/ToDo'
import { UserPage } from '@screens/User'
import {
  ListChecks,
  Package,
  ProjectorScreenChart,
  UserCircle,
} from 'phosphor-react-native'

type IAppRoutes = {
  home: undefined
  boxes: undefined
  toDo: undefined
  user: undefined
}

export type IAppNavigationRoutesProps = BottomTabNavigationProp<IAppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<IAppRoutes>()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Screen
        name="home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProjectorScreenChart color={focused ? '#8D5DF1' : '#120720'} />
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

      <Screen
        name="boxes"
        component={BoxesPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Package color={focused ? '#8D5DF1' : '#120720'} />
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

      <Screen
        name="toDo"
        component={ToDoPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <ListChecks color={focused ? '#8D5DF1' : '#120720'} />
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

      <Screen
        name="user"
        component={UserPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <UserCircle color={focused ? '#8D5DF1' : '#120720'} />
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
    </Navigator>
  )
}
