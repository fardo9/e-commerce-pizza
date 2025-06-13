import { Product } from '@/src/server/domain/product/products.entity'

export type CategoryDTO = {
  id: number
  name: string
  products: Product[]
  createdAt: string
  updatedAt: string
}
