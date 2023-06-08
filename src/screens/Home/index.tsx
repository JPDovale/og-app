import { Text } from '@components/Text'
import {
  homePageContentStyles,
  homePageStyles,
  previewProjectsContainerStyles,
} from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { HStack, View } from 'native-base'
import { ScrollView } from 'react-native'
import { useProjects } from '@hooks/useProjects'
import {
  PreviewProjectCard,
  PreviewProjectCardSkeleton,
} from '@components/ProjectsComponents/PreviewProjectCard'
import { IProjectPreview } from '@hooks/useProjects/types/IProjectPreview'
import { ButtonIcon, ButtonLabel, ButtonRoot } from '@components/Button'
import { FilePlus } from 'phosphor-react-native'
import { Card } from '@components/Card'

export function HomePage() {
  const { projects, loadingProjects } = useProjects()
  const projectList: IProjectPreview[][] = []
  const projectLoadingList = Array.from({ length: 3 }).map((_, i) =>
    Array.from({ length: 2 }),
  )

  projects.map((project, i) => {
    if (i % 2 === 0) {
      return projectList.push([project])
    } else {
      return projectList[projectList.length - 1].push(project)
    }
  })

  return (
    <SafeAreaView className={homePageStyles()}>
      <Header />

      <ScrollView
        className={homePageContentStyles()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        <Card
          description=" Bem-vindo ao MagiScrita! Desbloqueie sua imaginação e embarque em
            uma jornada mágica rumo à escrita criativa."
        />

        <ButtonRoot size="xs" mt={4}>
          <ButtonIcon>
            <FilePlus size={14} color="#fff" weight="fill" />
          </ButtonIcon>

          <ButtonLabel>Criar projeto</ButtonLabel>
        </ButtonRoot>

        <Text fontFamily="heading" className="mt-4">
          Projetos:
        </Text>

        <View className={previewProjectsContainerStyles()}>
          {loadingProjects
            ? projectLoadingList.map((list, i) => (
                <HStack space={4} key={JSON.stringify({ list, i })}>
                  {list.map((project, i) => (
                    <PreviewProjectCardSkeleton
                      key={JSON.stringify({ project, list, i })}
                    />
                  ))}
                </HStack>
              ))
            : projectList.map((list) => (
                <HStack space={4} key={JSON.stringify(list)}>
                  {list.map((project) => (
                    <PreviewProjectCard key={project.id} project={project} />
                  ))}
                </HStack>
              ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
