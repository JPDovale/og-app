import { Text } from '@components/Text'
import { homePageStyles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export function ToDoPage() {
  return (
    <SafeAreaView className={homePageStyles()}>
      <Text fontFamily="heading">ToDo!</Text>
    </SafeAreaView>
  )
}
