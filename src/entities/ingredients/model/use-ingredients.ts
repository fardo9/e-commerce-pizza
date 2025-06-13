import { useQuery } from '@tanstack/react-query'

import { getIngredients } from './ingredients-api'
import { Ingredient } from './types'

export const useIngredients = () => {
  const { data, isLoading, isError, error } = useQuery<Ingredient[]>({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
    staleTime: 1000 * 60 * 10
  })

  return { ingredients: data, isLoadingIngredients: isLoading, isError, error }
}
