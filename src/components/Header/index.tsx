import { Text } from '@components/Text'
import { useUser } from '@hooks/useUser'
import { useNavigation } from '@react-navigation/native'
import { IAppNavigationStackRoutesProps } from '@routes/app.routes'
import { BellSimple, Star } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import { headerStyles, notificationsButtonStyles } from './styles'

interface IHeaderProps {
  onScreen?: string
}

export function Header({ onScreen = 'MagiScrita' }: IHeaderProps) {
  const navigation = useNavigation<IAppNavigationStackRoutesProps>()

  const { user, userIsPro } = useUser()

  return (
    <View className={headerStyles()}>
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

      <TouchableOpacity
        className={notificationsButtonStyles({
          withNewNotifications:
            user?.account.notification.numberNew !== null &&
            user?.account.notification.numberNew !== undefined &&
            user?.account.notification.numberNew !== 0,
        })}
        onPress={() => navigation.navigate('notifications')}
      >
        <BellSimple size={18} />
      </TouchableOpacity>
    </View>
  )
}
