import { api } from '@api/index'
import { IProjectResponse } from '@api/responses/IProjectResponse'
import { useProjects } from '@hooks/useProjects'
import { useQuery } from 'react-query'
import { IProject } from './types/IProject'

interface IUseProjectProps {
  id: string | undefined
}

export function useProject({ id }: IUseProjectProps) {
  const { data, isLoading, refetch } = useQuery(
    `project-${id}`,
    async () => {
      if (!id) return

      let response = await api.get<IProjectResponse>(`/projects/${id}`)

      if (response.error?.title === 'Login failed') {
        const refresh = await api.post('/sessions/refresh')

        if (refresh.ok) {
          response = await api.get<IProjectResponse>(`/projects/${id}`)
        }
      }

      const project = response.data?.project as IProject

      return { project }
    },
    {
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  )

  const { findProject } = useProjects()

  const project = (data?.project ?? findProject(String(id)) ?? null) as IProject
  const loadingProject = isLoading
  const refetchProject = refetch

  const mainTimeLine = project?.collections.timeLine.itens?.find(
    (timeLine) => !timeLine.infos.isAlternative,
  )
  const todoFirst = project?.collections.timeLine.itens?.find(
    (timeline) => timeline.infos.type === 'to_do',
  )

  return { project, loadingProject, mainTimeLine, todoFirst, refetchProject }
}
