import { useUser } from '@hooks/useUser'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { BoxesPage } from '@screens/Boxes'
import { HomePage } from '@screens/Home'
import { ToDoPage } from '@screens/ToDo'
import { UserPage } from '@screens/User'
import { Avatar } from 'native-base'
import {
  ListChecks,
  Package,
  ProjectorScreenChart,
  UserCircle,
} from 'phosphor-react-native'

type IAppBottomTapRoutes = {
  home: undefined
  boxes: undefined
  toDo: undefined
  user: undefined
}

const BottomTap = createBottomTabNavigator<IAppBottomTapRoutes>()

export type IAppNavigationBottomTabRoutesProps =
  BottomTabNavigationProp<IAppBottomTapRoutes>

export function BottomRoutes() {
  const { user } = useUser()

  return (
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
            <ListChecks size={28} color={focused ? '#8D5DF1' : '#120720'} />
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
              <UserCircle size={28} color={focused ? '#8D5DF1' : '#120720'} />
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
  )
}
