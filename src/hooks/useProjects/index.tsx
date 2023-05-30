import { api } from '@api/index'
import { useQuery } from 'react-query'

export function useProjects() {
  const { data, isLoading, refetch, isFetching } = useQuery(
    'projects',
    async () => {
      let response = await api.get('/projects')

      console.log(response)

      if (response.error?.title === 'Login failed') {
        const refresh = await api.post('/sessions/refresh')

        if (refresh.ok) {
          response = await api.get('/projects')
        }
      }

      const projects = response.projects as IProjectPreview[]

      return { projects }
    },
    {
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  )

  return { data, isLoading, refetch, isFetching }
}
