import { useQuery } from '@tanstack/react-query'
import GetApi from '../services/get-api'

export const useGetApi = () => {
  const { data, error, isLoading } = useQuery(['games'], () => GetApi())

  return { data, error, isLoading }
}

