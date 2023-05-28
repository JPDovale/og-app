import { Text } from '@components/Text'
import { homePageStyles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export function HomePage() {
  return (
    <SafeAreaView className={homePageStyles()}>
      <Text fontFamily="heading">OG APP!</Text>
    </SafeAreaView>
  )
}
