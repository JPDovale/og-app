import { Image, View } from 'native-base'
import { ImageSquare } from 'phosphor-react-native'

interface IProjectImageProps {
  url: string | undefined
  alt: string
}

export function ProjectImage({ alt, url }: IProjectImageProps) {
  return (
    <View
      w="full"
      h="64"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      my={4}
      rounded="md"
      borderWidth={1}
      bg="gray.900"
      borderColor={url ? 'transparent' : 'purple.900'}
      style={{
        elevation: 12,
      }}
    >
      {url ? (
        <Image
          alt={alt}
          rounded="md"
          source={{
            uri: url,
            width: 380,
            height: 380,
          }}
        />
      ) : (
        <ImageSquare size={40} />
      )}
    </View>
  )
}
