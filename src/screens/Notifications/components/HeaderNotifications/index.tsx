import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import { goBackButtonStyles, headerNotificationsStyles } from './styles'

export function HeaderNotifications() {
  const navigation = useNavigation()

  return (
    <View className={headerNotificationsStyles()}>
      <TouchableOpacity
        className={goBackButtonStyles()}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size={18} />
      </TouchableOpacity>

      <Text fontSize="lg" fontFamily="heading">
        Notificações
      </Text>
    </View>
  )
}
