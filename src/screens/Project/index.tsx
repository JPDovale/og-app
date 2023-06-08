import { useProject } from '@hooks/useProject'
import { Card } from '@components/Card'
import { Center, HStack, ScrollView, useTheme, VStack } from 'native-base'
import { FeaturesList } from './components/FeaturesList'
import { ProjectImage } from './components/ProjectImage'
import { Text } from '@components/Text'
import { VictoryBar, VictoryChart, VictoryGroup } from 'victory-native'
import { Books, Clock, List } from 'phosphor-react-native'
import {
  PreviewCardBook,
  PreviewCardBookSkeleton,
} from '@components/BooksComponents/PreviewCardBook'
import {
  PreviewCardPerson,
  PreviewCardPersonSkeleton,
} from '@components/PersonsComponents/PreviewCardPerson'
import { IPersonPreview } from '@hooks/usePerson/types/IPersonPreview'
import { orderDatesOfTimelines } from '@utils/dates/orderDatesOfTimelines'
import { parserImportanceColorIndex } from '@utils/parsers/parserImportanceColorIndex'

interface IProjectPageProps {
  projectId: string
}

export function ProjectPage({ projectId }: IProjectPageProps) {
  const { project, loadingProject, mainTimeLine } = useProject({
    id: projectId,
  })

  const { colors } = useTheme()

  const booksToShowInPreview =
    project?.collections.book.itens?.slice(0, 3) ?? []
  const booksToShowInPreviewSkeleton = Array.from({
    length:
      project.collections.book.itensLength <= 3
        ? project.collections.book.itensLength
        : 3,
  })

  const availablePersons = project.collections.person.itens?.slice(0, 6) ?? []

  const personsToShowInPreview: IPersonPreview[][] = []
  const personsToShowInPreviewSkeleton = Array.from({
    length:
      project.collections.person.itensLength <= 6
        ? Math.ceil(project.collections.person.itensLength / 2)
        : 3,
  }).map((_, i) => Array.from({ length: 2 }))

  availablePersons.map((person, i) => {
    if (i % 2 === 0) {
      return personsToShowInPreview.push([person])
    } else {
      return personsToShowInPreview[personsToShowInPreview.length - 1].push(
        person,
      )
    }
  })

  const eventsInChronologicalOrder = orderDatesOfTimelines(
    mainTimeLine?.collections.timeEvent.itens ?? [],
  )
    .filter((event) => event.infos.importance > 5)
    .slice(0, 10)

  return (
    <ScrollView
      flex={1}
      bg="gray.900"
      p={3}
      contentContainerStyle={{ paddingBottom: 200 }}
      showsVerticalScrollIndicator={false}
    >
      <Card title={project?.name} alignItems="center" />
      <ProjectImage alt={project.image.alt} url={project.image.url} />

      <HStack
        w="full"
        alignItems="center"
        space={2}
        mb={2}
        bg="gray.800"
        py={1}
        px={2}
        rounded="sm"
      >
        <List size={22} weight="bold" />
        <Text fontSize="2xl" fontFamily="body" className="opacity-70">
          Modelos utilizados:
        </Text>
      </HStack>
      <FeaturesList project={project} mb={8} />

      {project.features.timeLines && (
        <>
          <HStack
            w="full"
            alignItems="center"
            space={2}
            mb={2}
            bg="gray.800"
            py={1}
            px={2}
            rounded="sm"
          >
            <Clock size={22} weight="bold" />
            <Text fontSize="2xl" fontFamily="body" className="opacity-70">
              Linhas de tempo do projeto:
            </Text>
          </HStack>

          <Center mb={6}>
            <VictoryChart
              domainPadding={50}
              padding={40}
              maxDomain={{
                y: 10,
              }}
            >
              <VictoryGroup offset={5}>
                {eventsInChronologicalOrder.map((event) => (
                  <VictoryBar
                    key={event.id}
                    data={[
                      {
                        y: event.infos.importance,
                        x: `${event.happened.year} ${event.happened.timeChrist}`,
                      },
                    ]}
                    barWidth={15}
                    style={{
                      data: {
                        fill: colors.primary[
                          parserImportanceColorIndex[event.infos.importance]
                        ],
                      },
                    }}
                  />
                ))}
              </VictoryGroup>
            </VictoryChart>
          </Center>
        </>
      )}

      {project.features.books && (
        <>
          <HStack
            w="full"
            alignItems="center"
            space={2}
            mb={2}
            bg="gray.800"
            py={1}
            px={2}
            rounded="sm"
          >
            <Books size={22} weight="bold" />
            <Text fontSize="2xl" fontFamily="body" className="opacity-70">
              Livros do projeto: {booksToShowInPreview.length}/
              {project.collections.book.itensLength}
            </Text>
          </HStack>

          {project.collections.book.itensLength > 0 ? (
            loadingProject ? (
              booksToShowInPreviewSkeleton.map((_, i) => (
                <PreviewCardBookSkeleton key={i} />
              ))
            ) : (
              booksToShowInPreview.map((book) => (
                <PreviewCardBook key={book.id} book={book} />
              ))
            )
          ) : (
            <VStack
              h="32"
              bg="gray.800"
              rounded="md"
              shadow="6"
              justifyContent="center"
              alignItems="center"
              mb={8}
            >
              <Text fontSize="lg">Você não criou nenhum livro ainda</Text>
            </VStack>
          )}
        </>
      )}

      {project.features.persons && (
        <>
          <HStack
            w="full"
            alignItems="center"
            space={2}
            mt={2}
            mb={2}
            bg="gray.800"
            py={1}
            px={2}
            rounded="sm"
          >
            <Books size={22} weight="bold" />
            <Text fontSize="2xl" fontFamily="body" className="opacity-70">
              Personagens do projeto: {availablePersons.length}/
              {project.collections.person.itensLength}
            </Text>
          </HStack>

          {project.collections.person.itensLength > 0 ? (
            loadingProject ? (
              personsToShowInPreviewSkeleton.map((list, i) => (
                <HStack space={4} key={JSON.stringify({ list, i })}>
                  {list.map((person, i) => (
                    <PreviewCardPersonSkeleton
                      key={JSON.stringify({ person, list, i })}
                    />
                  ))}
                </HStack>
              ))
            ) : (
              personsToShowInPreview.map((list, i) => (
                <HStack space={4} key={JSON.stringify({ list, i })}>
                  {list.map((person, i) => (
                    <PreviewCardPerson
                      key={JSON.stringify({ person, list, i })}
                      person={person}
                    />
                  ))}
                </HStack>
              ))
            )
          ) : (
            <VStack
              h="32"
              bg="gray.800"
              rounded="md"
              shadow="6"
              justifyContent="center"
              alignItems="center"
              mb={8}
            >
              <Text fontSize="lg">
                Você não criou nenhum personagem Ainda ainda
              </Text>
            </VStack>
          )}
        </>
      )}
    </ScrollView>
  )
}
