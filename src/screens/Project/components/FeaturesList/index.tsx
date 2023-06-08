import { ButtonRoot, ButtonIcon, ButtonLabel } from '@components/Button'
import { IProject } from '@hooks/useProject/types/IProject'
import { ScrollView, useToast } from 'native-base'
import {
  Books,
  Planet,
  MapTrifold,
  UserFocus,
  Buildings,
  Alien,
  Atom,
  Lightning,
  UsersFour,
  Translate,
  Bank,
  Clock,
} from 'phosphor-react-native'
import { ComponentProps } from 'react'

interface IFeaturesListProps extends ComponentProps<typeof ScrollView> {
  project: IProject
}

export function FeaturesList({ project, ...props }: IFeaturesListProps) {
  const toast = useToast()

  function handleTryNotImplanted() {
    const toastOpen = toast.isActive('unusable')

    if (!toastOpen) {
      toast.show({
        title: 'Não implantado',
        description:
          'Essa funcionalidade ainda não está disponível na nossa plataforma, mas estamos trabalhando nisso... Quem sabe na proxima atualização',
        bgColor: 'orange.500',
        placement: 'top',
        id: 'unusable',
      })
    }
  }

  return (
    <ScrollView
      w="full"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingEnd: 200 }}
      horizontal
      {...props}
    >
      {project.features.timeLines && (
        <ButtonRoot px={4} mr={2} size="sm">
          <ButtonIcon>
            <Clock size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>{project.collections.timeLine.itensLength}</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.books && (
        <ButtonRoot px={4} mr={2} size="sm">
          <ButtonIcon>
            <Books size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>{project.collections.book.itensLength}</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.planets && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <Planet size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.nations && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <MapTrifold size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.persons && (
        <ButtonRoot px={4} mr={2} size="sm">
          <ButtonIcon>
            <UserFocus size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>{project.collections.person.itensLength}</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.citys && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <Buildings size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.races && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <Alien size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.religions && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <Atom size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.powers && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <Lightning size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.familys && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <UsersFour size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.languages && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <Translate size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}

      {project.features.institutions && (
        <ButtonRoot
          px={4}
          mr={2}
          size="sm"
          disabled
          onPress={handleTryNotImplanted}
        >
          <ButtonIcon>
            <Bank size={18} color="#fff" />
          </ButtonIcon>
          <ButtonLabel>0</ButtonLabel>
        </ButtonRoot>
      )}
    </ScrollView>
  )
}
