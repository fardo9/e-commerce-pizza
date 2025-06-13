import { Product } from '../product/products.entity'

export interface Category {
  id: number
  name: string
  products: Product[]
  createdAt: Date
  updatedAt: Date
}
