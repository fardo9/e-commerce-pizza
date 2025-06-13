import { Ingredient } from '../ingredients/ingredient.entity'

export interface Product {
  id: number
  name: string
  imageUrl: string
  categoryId: number
  createdAt: Date
  updatedAt: Date
  ingredients: Ingredient[]
}
