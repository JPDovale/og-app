import { Info } from '@components/Info'
import { Text } from '@components/Text'
import { IPersonPreview } from '@hooks/usePerson/types/IPersonPreview'
import { Image, Skeleton, View, VStack } from 'native-base'
import { ImageSquare } from 'phosphor-react-native'

interface IPreviewCardPersonProps {
  person: IPersonPreview
}

export function PreviewCardPerson({ person }: IPreviewCardPersonProps) {
  return (
    <VStack bg="gray.700" mb="6" rounded="md" w="48%" shadow="6">
      <View
        w="full"
        h="56"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderBottomWidth={1}
        borderBottomColor={person.image.url ? 'transparent' : 'purple.900'}
      >
        {person.image.url ? (
          <Image
            roundedTopRight="md"
            roundedTopLeft="md"
            alt={person.image.alt}
            source={{
              uri: person.image.url,
              cache: 'force-cache',
              width: 224,
              height: 224,
            }}
          />
        ) : (
          <ImageSquare size={32} />
        )}
      </View>

      <VStack py={2} px={3} w="full">
        <Info title="Nome" mb={2}>
          <Text fontSize="lg">{person.name.full}</Text>
        </Info>

        <Info title="Idade" mb={0}>
          <Text fontSize="lg">{person.age.number}</Text>
        </Info>
      </VStack>
    </VStack>
  )
}

export function PreviewCardPersonSkeleton() {
  return (
    <VStack bg="gray.700" mb="6" rounded="md" w="48%">
      <Skeleton w="full" h="56" />

      <VStack py={2} px={3} w="full">
        <Skeleton rounded="md" h={2} w={10} mb={1} />
        <Skeleton rounded="md" h={4} mb={4} />

        <Skeleton rounded="md" h={2} w={10} mb={1} />
        <Skeleton rounded="md" h={4} mb={3} />
      </VStack>
    </VStack>
  )
}
