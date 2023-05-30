import { Text } from '@components/Text'
import { homeCardStyles, homePageContentStyles, homePageStyles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { View } from 'native-base'
import { ScrollView } from 'react-native'
import { useProjects } from '@hooks/useProjects'

export function HomePage() {
  return (
    <SafeAreaView className={homePageStyles()}>
      <Header />

      <ScrollView className={homePageContentStyles()}>
        <View className={homeCardStyles()} style={{ elevation: 12 }}>
          <Text fontFamily="bodyBold">
            Bem-vindo ao MagiScrita! Desbloqueie sua imaginação e embarque em
            uma jornada mágica rumo à escrita criativa.
          </Text>
        </View>

        <Text fontFamily="heading">Projetos</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
