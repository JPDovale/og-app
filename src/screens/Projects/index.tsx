import { Text } from '@components/Text'
import { homePageStyles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'

export function ProjectsPage() {
  return (
    <SafeAreaView className={homePageStyles()}>
      <Header />
      <Text fontFamily="heading">Projects</Text>
    </SafeAreaView>
  )
}
