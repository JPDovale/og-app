import { ActivityIndicator, View } from 'react-native'
import { loadingContainerStyles } from './styles'

export function Loading() {
  return (
    <View className={loadingContainerStyles()}>
      <ActivityIndicator color="#481BA8" />
    </View>
  )
}
