import { useQuery } from '@tanstack/react-query'

import { getAllCategories } from './category-api'

import { CategoryDTO } from '@/src/shared/types/dto/category.dto'

export const useCategories = () => {
  const { data, isLoading, isError } = useQuery<CategoryDTO[]>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 10
  })

  return { categories: data, isLoading, isError }
}
