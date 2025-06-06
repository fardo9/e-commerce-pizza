'use client'

import { useQuery } from '@tanstack/react-query'

import { getAllIngredients } from './ingredients-api'

import { Ingredient } from '@/src/shared/types'

export const useIngredients = () => {
  const { data, isLoading, isError, error } = useQuery<Ingredient[]>({
    queryKey: ['ingredients'],
    queryFn: getAllIngredients,
    staleTime: 1000 * 60 * 10
  })

  return { ingredients: data, isLoadingIngredients: isLoading, isError, error }
}
