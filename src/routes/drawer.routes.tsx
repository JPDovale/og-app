import { ButtonIcon, ButtonRoot } from '@components/Button'
import { Text } from '@components/Text'
import { useProject } from '@hooks/useProject'
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import { useNavigation, useRoute } from '@react-navigation/native'
import { OnBuildingPage } from '@screens/OnBuilding'
import { ProjectPage } from '@screens/Project'
import { routerNameParser } from '@utils/parsers/routerNameParser'
import { useTheme } from 'native-base'
import {
  Alien,
  Atom,
  Bank,
  BookOpen,
  Books,
  Buildings,
  Clock,
  Gear,
  House,
  Lightning,
  MapTrifold,
  Pencil,
  Planet,
  Translate,
  UserFocus,
  UsersFour,
  X,
} from 'phosphor-react-native'
import { IAppNavigationStackRoutesProps } from './app.routes'

type IAppDrawerRoutes = {
  project: undefined
  edit: undefined
  timeLines: undefined
  timeline: undefined
  plot: undefined
  books: undefined
  book: undefined
  planets: undefined
  planet: undefined
  nations: undefined
  nation: undefined
  persons: undefined
  person: undefined
  citys: undefined
  city: undefined
  races: undefined
  race: undefined
  religions: undefined
  religion: undefined
  powers: undefined
  power: undefined
  familys: undefined
  family: undefined
  languages: undefined
  language: undefined
  institutions: undefined
  institution: undefined
  settings: undefined
}

const Drawer = createDrawerNavigator<IAppDrawerRoutes>()

export type IAppNavigationDrawerRoutesProps =
  DrawerNavigationProp<IAppDrawerRoutes>

interface IDrawerRoutesParams {
  projectId: string
}

export function DrawerRoutes() {
  const iconSize = 16

  const navigator = useNavigation<IAppNavigationStackRoutesProps>()
  const router = useRoute()
  const { projectId } = router.params as IDrawerRoutesParams

  const { project } = useProject({ id: projectId })

  const { colors } = useTheme()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentContainerStyle: {
          paddingBottom: 80,
        },
        drawerActiveBackgroundColor: colors.purple[900],
        drawerInactiveBackgroundColor: colors.gray[900],
        drawerActiveTintColor: colors.white,
        headerRight: () => (
          <ButtonRoot
            mr={4}
            size="xs"
            p="1.5"
            onPress={() => navigator.navigate('app')}
          >
            <ButtonIcon>
              <X size={14} color={colors.white} />
            </ButtonIcon>
          </ButtonRoot>
        ),
        overlayColor: '#00000050',
        headerTintColor: colors.purple[700],
        headerTitleAlign: 'center',
        headerTitle: ({ children }) => (
          <Text fontFamily="heading" fontSize="sm">
            {routerNameParser[children].toUpperCase()}
          </Text>
        ),
        headerStyle: {
          shadowColor: 'rgba(0,0,0,50)',
          elevation: 12,
          backgroundColor: colors.gray[900],
          borderBottomWidth: 1,
          borderBottomColor: colors.purple[900],
        },
        drawerItemStyle: {
          shadowColor: colors.black,
          elevation: 6,
        },
      }}
    >
      <Drawer.Screen
        name="project"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              fontFamily="textBold"
              fontSize="xxs"
              colorInvert={focused}
              style={{
                marginLeft: -20,
              }}
            >
              PROJETO
            </Text>
          ),
          drawerIcon: ({ color, focused }) => (
            <House
              color={color}
              size={iconSize}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      >
        {() => <ProjectPage projectId={projectId} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="edit"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              fontFamily="textBold"
              fontSize="xxs"
              colorInvert={focused}
              style={{
                marginLeft: -20,
              }}
            >
              EDITAR
            </Text>
          ),
          drawerIcon: ({ color, focused }) => (
            <Pencil
              color={color}
              size={iconSize}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
        component={OnBuildingPage}
      />

      {project.features.timeLines && (
        <Drawer.Screen
          name="timeLines"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                LINHAS DE TEMPO
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Clock
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.books && (
        <Drawer.Screen
          name="books"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                LIVROS
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Books
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.plot && (
        <Drawer.Screen
          name="plot"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                PLOT
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <BookOpen
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.planets && (
        <Drawer.Screen
          name="planets"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                PLANETAS
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Planet
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.nations && (
        <Drawer.Screen
          name="nations"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                NAÇÕES
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <MapTrifold
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.persons && (
        <Drawer.Screen
          name="persons"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                PERSONAGENS
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <UserFocus
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.citys && (
        <Drawer.Screen
          name="citys"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                CIDADES
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Buildings
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.races && (
        <Drawer.Screen
          name="races"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                RAÇAS
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Alien
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.religions && (
        <Drawer.Screen
          name="religions"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                RELIGIÕES
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Atom
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.powers && (
        <Drawer.Screen
          name="powers"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                PODERES
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Lightning
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.familys && (
        <Drawer.Screen
          name="familys"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                FAMÍLIAS
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <UsersFour
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.languages && (
        <Drawer.Screen
          name="languages"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                LINGUAGENS
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Translate
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      {project.features.institutions && (
        <Drawer.Screen
          name="institutions"
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                fontFamily="textBold"
                fontSize="xxs"
                colorInvert={focused}
                style={{
                  marginLeft: -20,
                }}
              >
                INSTITUIÇÕES
              </Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <Bank
                color={color}
                size={iconSize}
                weight={focused ? 'fill' : 'regular'}
              />
            ),
          }}
          component={OnBuildingPage}
        />
      )}

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              fontFamily="textBold"
              fontSize="xxs"
              colorInvert={focused}
              style={{
                marginLeft: -20,
              }}
            >
              CONFIGURAÇÕES
            </Text>
          ),
          drawerIcon: ({ color, focused }) => (
            <Gear
              color={color}
              size={iconSize}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
        component={OnBuildingPage}
      />
    </Drawer.Navigator>
  )
}
