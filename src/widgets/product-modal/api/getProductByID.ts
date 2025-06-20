import { ProductDTO } from '@/src/server/dto/product/product.dto'
import { ApiRoutes } from '@/src/shared/api/constants'
import { apiClient } from '@/src/shared/api/httpClient'

export const getProductByID = async (id: number): Promise<ProductDTO[]> => {
  return apiClient.get(`/${ApiRoutes.PRODUCT_BY_ID}/${id}`)
}
