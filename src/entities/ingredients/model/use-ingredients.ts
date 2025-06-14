import { useQuery } from '@tanstack/react-query'

import { getIngredients } from './ingredients-api'

import { IngredientDTO } from '@/src/server/dto/ingredients/ingredient.dto'

export const useIngredients = () => {
  const { data, isLoading, isError, error } = useQuery<IngredientDTO[]>({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
    staleTime: 1000 * 60 * 10
  })

  return { ingredients: data, isLoadingIngredients: isLoading, isError, error }
}
