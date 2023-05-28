import { Text } from '@components/Text'
import { homePageStyles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export function UserPage() {
  return (
    <SafeAreaView className={homePageStyles()}>
      <Text fontFamily="heading">User!</Text>
    </SafeAreaView>
  )
}
