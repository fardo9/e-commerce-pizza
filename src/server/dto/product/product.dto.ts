import { IngredientDTO } from '../ingredients/ingredient.dto'

export type ProductDTO = {
  id: number
  name: string
  imageUrl: string
  categoryId: number
  createdAt: string
  updatedAt: string
  ingredients: IngredientDTO[]
}
