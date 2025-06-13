import { ApiRoutes } from '@/src/shared/_api/constants'
import { apiClient } from '@/src/shared/_api/httpClient'
import { CategoryDTO } from '@/src/shared/types/dto/category.dto'

export const getAllCategories = async (): Promise<CategoryDTO[]> => {
  return apiClient.get<CategoryDTO[]>(`/${ApiRoutes.CATEGORY}`)
}
