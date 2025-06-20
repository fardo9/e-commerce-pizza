import { Ingredient } from '../ingredients/ingredient.entity'
import { ProductItem } from '../product-types/item-types.entitiy'

export interface Product {
  id: number
  name: string
  imageUrl: string
  categoryId: number
  createdAt: Date
  updatedAt: Date
  ingredients: Ingredient[]
  items: ProductItem[]
}
