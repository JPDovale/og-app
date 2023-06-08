import { Text } from '@components/Text'
import { Center, View } from 'native-base'

export function OnBuildingPage() {
  return (
    <View flex={1} alignItems="center">
      <Center flex={1} justifyItems="center">
        <Text fontSize="2xl" fontFamily="heading">
          Em construção
        </Text>
      </Center>
    </View>
  )
}
