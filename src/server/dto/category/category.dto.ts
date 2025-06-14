import { ProductDTO } from '../product/product.dto'

export type CategoryDTO = {
  id: number
  name: string
  products: ProductDTO[]
  createdAt: string
  updatedAt: string
}
