import { Info } from '@components/Info'
import { Text } from '@components/Text'
import { IProjectPreview } from '@hooks/useProjects/types/IProjectPreview'
import { useNavigation } from '@react-navigation/native'
import { IAppNavigationStackRoutesProps } from '@routes/app.routes'
import { getDate } from '@utils/dates/getDate'
import { Skeleton } from 'native-base'
import { ImageSquare } from 'phosphor-react-native'

import { TouchableOpacity, View, Image } from 'react-native'
import {
  imageContainerStyles,
  previewInfosStyles,
  previewProjectCardContainerStyles,
} from './styles'

interface IPreviewProjectCardProps {
  project: IProjectPreview
}

export function PreviewProjectCard({ project }: IPreviewProjectCardProps) {
  const navigator = useNavigation<IAppNavigationStackRoutesProps>()

  function handleOpenProject() {
    navigator.navigate('entryProject', {
      projectId: project.id,
    })
  }

  return (
    <TouchableOpacity
      className={previewProjectCardContainerStyles()}
      style={{
        elevation: 6,
      }}
      onPress={handleOpenProject}
    >
      <View className={imageContainerStyles()}>
        {project.image.url ? (
          <Image
            alt={project.image.alt}
            source={{
              uri: project.image.url,
              height: 380,
              width: 380,
              cache: 'force-cache',
            }}
          />
        ) : (
          <ImageSquare size={30} />
        )}
      </View>

      <View className={previewInfosStyles()}>
        <Info title="Nome" size="xs" pb={1}>
          <Text fontSize="sm">{project.name}</Text>
        </Info>

        <Info title="Criador" size="xs" pb={1}>
          <Text fontSize="sm">{project.creator.username}</Text>
        </Info>

        <Info title="Criado em" size="xs">
          <Text fontSize="sm">{getDate(project.createdAt)}</Text>
        </Info>
      </View>
    </TouchableOpacity>
  )
}

export function PreviewProjectCardSkeleton() {
  return (
    <View
      className={previewProjectCardContainerStyles()}
      style={{
        elevation: 6,
      }}
    >
      <Skeleton h={24} />
      <Skeleton.Text p="2.5" />
    </View>
  )
}
