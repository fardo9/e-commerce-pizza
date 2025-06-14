import { useQuery } from '@tanstack/react-query'

import { getAllCategories } from './category-api'

import { CategoryDTO } from '@/src/server/dto/category/category.dto'

export const categoriesKeys = {
  all: ['categories'] as const
}

export const useCategories = () => {
  const { data, isLoading, isError } = useQuery<CategoryDTO[]>({
    queryKey: categoriesKeys.all,
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 10
  })

  return { categories: data, isLoading, isError }
}
