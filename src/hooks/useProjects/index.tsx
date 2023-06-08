import { api } from '@api/index'
import { IProjectsPreviewResponse } from '@api/responses/IProjectsPreviewResponse'
import { useQuery } from 'react-query'
import { IProjectPreview } from './types/IProjectPreview'

export function useProjects() {
  const { data, isLoading, refetch } = useQuery(
    'projects',
    async () => {
      let response = await api.get<IProjectsPreviewResponse>('/projects')

      if (response.error?.title === 'Login failed') {
        const refresh = await api.post('/sessions/refresh')

        if (refresh.ok) {
          response = await api.get<IProjectsPreviewResponse>('/projects')
        }
      }

      const projects = response.data?.projects as IProjectPreview[]

      return { projects }
    },
    {
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  )

  const projects = data?.projects ?? []
  const loadingProjects = isLoading
  const refetchProjects = refetch

  function findProject(id: string) {
    return projects.find((project) => project.id === id)
  }

  return { projects, loadingProjects, refetchProjects, findProject }
}
