import { useQuery } from '@tanstack/react-query'

import { getAllCategories } from './category-api'
import type { Category } from './types'

export const useCategories = () => {
  const { data, isLoading, isError } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 10
  })

  return { categories: data, isLoading, isError }
}
