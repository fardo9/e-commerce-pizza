import { ProductDTO } from '@/src/server/dto/product/product.dto'

export interface ProductUI extends ProductDTO {
  price?: number
  className?: string
}
