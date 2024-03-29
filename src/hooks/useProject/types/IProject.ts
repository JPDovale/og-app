import { IBookPreview } from '@hooks/useBook/types/IBookPreview'
import { IPersonPreview } from '@hooks/usePerson/types/IPersonPreview'
import { IFeatures } from '@hooks/useProjects/types/IFeatures'
import { IUserInProject } from '@hooks/useProjects/types/IProjectPreview'
import { ITimeLine } from '@hooks/useTimeLine/types/ITimeLine'
import { IComment } from './IComment'

export interface ICreatorProject {
  id: string
  avatar: {
    alt: string
    url: string | undefined
  }
  email: string
  name: string
  username: string
}

export type IProjectType = 'book' | 'rpg' | 'roadMap' | 'gameplay'

export interface IProject {
  id: string
  name: string
  private: boolean
  password: string | null
  type: IProjectType
  createdAt: Date
  updatedAt: Date
  features: IFeatures
  creator: ICreatorProject
  users: IUserInProject[]
  initialDate: {
    timestamp: number
    fullDate: string
    timeChrist: 'A.C.' | 'D.C.'
    year: string
  }
  image: {
    alt: string
    url: string | undefined
  }
  plot: {
    onePhrase: string | null
    premise: string | null
    storyteller: string | null
    literaryGenre: string | null
    subgenre: string | null
    ambient: string | null
    countTime: string | null
    historicalFact: string | null
    details: string | null
    summary: string | null
    urlText: string | null
    structure: {
      act1: string | null
      act2: string | null
      act3: string | null
    }
  }
  collections: {
    book: {
      itensLength: number
      itens: IBookPreview[]
    }
    person: {
      itensLength: number
      itens: IPersonPreview[]
    }
    timeLine: {
      itensLength: number
      itens: ITimeLine[]
    }
    comments: {
      itensLength: number
      itens: IComment[]
    }
  }
}
