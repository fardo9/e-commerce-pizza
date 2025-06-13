import { Ingredient } from './types'

import { ApiRoutes } from '@/src/shared/_api/constants'
import { apiClient } from '@/src/shared/_api/httpClient'

export const getIngredients = async (): Promise<Ingredient[]> => {
  return apiClient.get<Ingredient[]>(`/${ApiRoutes.INGREDIENTS}`)
}
