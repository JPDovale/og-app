import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query'
import { IProjectPreview } from './IProjectPreview'

export type IRefetchProjects = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
) => Promise<
  QueryObserverResult<
    {
      projects: IProjectPreview[]
    },
    unknown
  >
>
