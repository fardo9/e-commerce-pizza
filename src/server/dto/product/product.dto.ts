import { IngredientDTO } from '../ingredients/ingredient.dto'
import { ProductItemDTO } from '../product-types/product-types.dto'

export type ProductDTO = {
  id: number
  name: string
  imageUrl: string
  categoryId: number
  createdAt: string
  updatedAt: string
  ingredients: IngredientDTO[]
  items: ProductItemDTO[]
}
