import {
  notificationCardStyles,
  notificationsContainerStyles,
  notificationsPageStyles,
} from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderNotifications } from './components/HeaderNotifications'
import { FlatList } from 'react-native'
import { useUser } from '@hooks/useUser'
import { View } from 'native-base'
import { Text } from '@components/Text'
import { dateParser } from '@utils/parsers/dateParser'
import lodash from 'lodash'

export function NotificationsPage() {
  const { user } = useUser()

  const notifications = user?.account.notification.notifications ?? []
  const notificationInHourOrd = lodash
    .sortBy(notifications, (notification) => notification.created_at)
    .reverse()

  return (
    <SafeAreaView className={notificationsPageStyles()}>
      <HeaderNotifications />

      <FlatList
        className={notificationsContainerStyles()}
        keyExtractor={(notification) => notification.id}
        data={notificationInHourOrd}
        renderItem={(notification) => (
          <View className={notificationCardStyles()} style={{ elevation: 4 }}>
            <Text fontSize="2xl" fontFamily="bodyBold">
              {notification.item.title}
            </Text>

            <Text fontFamily="body" fontSize="sm" className="mb-2">
              {dateParser(notification.item.created_at)}
            </Text>

            <Text fontFamily="body">{notification.item.content}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text fontSize="lg" fontFamily="text">
            Você não tem notificações
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            paddingBottom: 200,
          },
          notificationInHourOrd.length === 0 && {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      />
    </SafeAreaView>
  )
}
