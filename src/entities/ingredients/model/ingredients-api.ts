import { IngredientDTO } from '@/src/server/dto/ingredients/ingredient.dto'
import { ApiRoutes } from '@/src/shared/api/constants'
import { apiClient } from '@/src/shared/api/httpClient'

export const getIngredients = async (): Promise<IngredientDTO[]> => {
  return apiClient.get<IngredientDTO[]>(`/${ApiRoutes.INGREDIENTS}`)
}
