import { useQuery } from '@tanstack/react-query'
import GetClassificationApi from '../services/get-classification-api'

export const useGetClassificationApi = () => {
  const { data, error, isLoading } = useQuery(['classification'], () =>
    GetClassificationApi()
  )

  return { data, error, isLoading }
}
