import { Text } from '@components/Text'
import {
  avatarContainerStyles,
  infosStyles,
  userInfosContainer,
  userPageStyles,
} from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Avatar } from 'native-base'
import { useUser } from '@hooks/useUser'
import { ScrollView, View } from 'react-native'
import { Info } from '@components/Info'
import { dateParser } from '@utils/parsers/dateParser'
import { ButtonLabel, ButtonRoot } from '@components/Button'

export function UserPage() {
  const { user } = useUser()

  return (
    <SafeAreaView className={userPageStyles()}>
      <Header onScreen="Usuário" />

      <ScrollView
        className={userInfosContainer()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        <View className={avatarContainerStyles()}>
          <Avatar
            source={{
              uri: user?.infos.avatar.url,
            }}
            size="2xl"
          />

          <Text fontSize="2xl" fontFamily="textBold" className="uppercase">
            {user?.infos.username}
          </Text>
        </View>

        <View className={infosStyles()}>
          <Info title="Nome">
            <Text fontSize="lg">{user?.infos.name}</Text>
          </Info>

          <Info title="Nome de usuário">
            <Text fontSize="lg">{user?.infos.username}</Text>
          </Info>

          <Info title="Email">
            <Text fontSize="lg">{user?.infos.email}</Text>
          </Info>

          <Info title="Idade">
            <Text fontSize="lg">{user?.infos.age}</Text>
          </Info>

          <Info title="Gênero">
            <Text fontSize="lg">{user?.infos.sex}</Text>
          </Info>

          <Info title="Sua conta foi criada em">
            <Text fontSize="lg">{dateParser(user!.infos.createdAt)}</Text>
          </Info>

          <Info title="Você possui uma inscrição ativa">
            <Text fontSize="lg">
              Data de expiração:{' '}
              {user?.account.subscription?.expiresAt
                ? dateParser(user?.account.subscription?.expiresAt)
                : 'Nunca'}
            </Text>
          </Info>
        </View>

        <ButtonRoot size="sm">
          <ButtonLabel>Editar perfil</ButtonLabel>
        </ButtonRoot>
      </ScrollView>
    </SafeAreaView>
  )
}
