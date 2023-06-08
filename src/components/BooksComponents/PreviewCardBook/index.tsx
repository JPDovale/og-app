import { Info } from '@components/Info'
import { Text } from '@components/Text'
import { IBookPreview } from '@hooks/useBook/types/IBookPreview'
import { HStack, Image, Progress, Skeleton, View, VStack } from 'native-base'
import { ImageSquare } from 'phosphor-react-native'

interface IPreviewCardBookProps {
  book: IBookPreview
}

export function PreviewCardBook({ book }: IPreviewCardBookProps) {
  const progressPerCent = (book.infos.writtenWords / book.infos.words) * 100

  return (
    <HStack bg="gray.700" mb={6} rounded="md" shadow="4">
      <View
        w="32"
        h="48"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRightWidth={1}
        borderRightColor={book.frontCover.url ? 'transparent' : 'purple.900'}
      >
        {book.frontCover.url ? (
          <Image
            roundedBottomLeft="md"
            roundedTopLeft="md"
            alt={book.frontCover.alt}
            source={{
              uri: book.frontCover.url,
              cache: 'force-cache',
              width: 128,
              height: 192,
            }}
          />
        ) : (
          <ImageSquare size={32} />
        )}
      </View>

      <VStack py={2} px={3} w="4/6">
        <Info title="Nome" mb={2}>
          <Text fontSize="lg">{book.name.fullName}</Text>
        </Info>

        <Info title="Gênero literário" mb={2}>
          <Text fontSize="lg">{book.infos.literaryGenre}</Text>
        </Info>

        <Info
          title={
            'Progresso ' + `${book.infos.writtenWords} de ${book.infos.words}`
          }
          mb={2}
        >
          <Progress
            bg="gray.900"
            shadow="1"
            mt={1}
            colorScheme="purple"
            value={progressPerCent}
          />
        </Info>

        <Info title="ISBN" mb={2}>
          <Text fontSize="md">{book.infos.isbn}</Text>
        </Info>
      </VStack>
    </HStack>
  )
}

export function PreviewCardBookSkeleton() {
  return (
    <HStack bg="gray.700" mb={6} rounded="md" shadow="4">
      <Skeleton w="32" h="48" />

      <VStack py={2} px={3} w="4/6">
        <Skeleton rounded="md" h={2} w={10} mb={1} />
        <Skeleton rounded="md" h={4} mb={4} />

        <Skeleton rounded="md" h={2} w={20} mb={1} />
        <Skeleton rounded="md" h={4} mb={4} />

        <Skeleton rounded="md" h={2} w={24} mb={1} />
        <Skeleton rounded="md" h={4} mb={4} />

        <Skeleton rounded="md" h={2} w={10} mb={1} />
        <Skeleton rounded="md" h={4} mb={4} />
      </VStack>
    </HStack>
  )
}
