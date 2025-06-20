import { useQuery } from '@tanstack/react-query'

import { getProductByID } from '../api/getProductByID'

export const useProductByID = (id: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductByID(id)
    // staleTime: 1000 * 60 * 5
  })

  return { product: data, isLoading, isError, error }
}
