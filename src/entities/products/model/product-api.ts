import { ProductDTO } from '@/src/server/dto/product/product.dto'
import { ApiRoutes } from '@/src/shared/_api/constants'
import { apiClient } from '@/src/shared/_api/httpClient'

export const searchProducts = async (query: string): Promise<ProductDTO[]> => {
  return apiClient.get(`/${ApiRoutes.SEARCH_PRODUCTS}?query=${encodeURIComponent(query)}`)
}
