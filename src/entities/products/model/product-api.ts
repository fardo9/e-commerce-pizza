import { ApiRoutes } from '@/src/shared/_api/constants'
import { apiClient } from '@/src/shared/_api/httpClient'
import { ProductDTO } from '@/src/shared/types/dto/product.dto'

export const searchProducts = async (query: string): Promise<ProductDTO[]> => {
  return apiClient.get(`/${ApiRoutes.SEARCH_PRODUCTS}?query=${encodeURIComponent(query)}`)
}
