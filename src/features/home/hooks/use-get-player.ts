import { useQuery } from '@tanstack/react-query'
import GetPlayersApi from '../services/get-players-api'

export const useGetPlayersApi = () => {
  const { data, error, isLoading } = useQuery(['players'], () =>
    GetPlayersApi()
  )

  return { data, error, isLoading }
}
