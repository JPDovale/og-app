import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query'
import { IProject } from './IProject'

export type IRefetchProject = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
) => Promise<
  QueryObserverResult<
    | {
        project: IProject
      }
    | undefined,
    unknown
  >
>
