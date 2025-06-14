import { CategoryDTO } from '@/src/server/dto/category/category.dto'
import { ApiRoutes } from '@/src/shared/_api/constants'
import { apiClient } from '@/src/shared/_api/httpClient'

export const getAllCategories = async (): Promise<CategoryDTO[]> => {
  return apiClient.get<CategoryDTO[]>(`/${ApiRoutes.CATEGORY}`)
}
