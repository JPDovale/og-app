import { Text } from '@components/Text'
import { useUser } from '@hooks/useUser'
import { useNavigation } from '@react-navigation/native'
import { IAppNavigationStackRoutesProps } from '@routes/app.routes'
import { Button, View } from 'native-base'
import { BellSimple, Star } from 'phosphor-react-native'
import { ComponentProps } from 'react'

interface IHeaderProps extends ComponentProps<typeof View> {
  onScreen?: string
  disableNotificationsButton?: boolean
}

export function Header({
  onScreen = 'MagiScrita',
  disableNotificationsButton = false,
}: IHeaderProps) {
  const navigation = useNavigation<IAppNavigationStackRoutesProps>()

  const { user, userIsPro } = useUser()

  const withNewNotifications =
    user?.account.notification.numberNew !== null &&
    user?.account.notification.numberNew !== undefined &&
    user?.account.notification.numberNew !== 0

  return (
    <View
      w="full"
      p={3}
      display="flex"
      flexDir="row"
      borderBottomColor="purple.600"
      borderBottomWidth="1"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text className="items-center" fontSize="lg" fontFamily="heading">
        {userIsPro && (
          <Star
            weight="fill"
            color="#f97700"
            style={{
              shadowColor: '#000',
              elevation: 1,
            }}
            size={16}
          />
        )}{' '}
        {onScreen}
      </Text>

      {!disableNotificationsButton && (
        <Button
          _pressed={{
            bg: withNewNotifications ? 'amber.900' : 'transparent',
          }}
          p={1}
          rounded="full"
          bg={withNewNotifications ? 'purple.800' : 'transparent'}
          opacity={withNewNotifications ? 100 : 50}
          onPress={() => navigation.navigate('notifications')}
        >
          <BellSimple size={18} />
        </Button>
      )}
    </View>
  )
}
