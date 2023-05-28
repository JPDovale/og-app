/* eslint-disable prefer-const */
import * as Cinzel from '@expo-google-fonts/cinzel'
import * as UncialAntiqua from '@expo-google-fonts/uncial-antiqua'
import * as MarkaziText from '@expo-google-fonts/markazi-text'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Routes } from '@routes/index'

export default function App() {
  const { Cinzel_400Regular, Cinzel_700Bold } = Cinzel
  let [CinzelLoaded] = Cinzel.useFonts({
    Cinzel_400Regular,
    Cinzel_700Bold,
  })

  const { UncialAntiqua_400Regular } = UncialAntiqua
  let [UncialAntiquaLoaded] = UncialAntiqua.useFonts({
    UncialAntiqua_400Regular,
  })

  const { MarkaziText_400Regular, MarkaziText_700Bold } = MarkaziText
  let [MarkaziTextLoaded] = MarkaziText.useFonts({
    MarkaziText_400Regular,
    MarkaziText_700Bold,
  })

  const loadingFonts =
    !CinzelLoaded || !UncialAntiquaLoaded || !MarkaziTextLoaded

  return (
    <SafeAreaProvider>
      {loadingFonts ? <Loading /> : <Routes />}

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaProvider>
  )
}
