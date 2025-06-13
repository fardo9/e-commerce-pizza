import { IngredientDTO } from '@/src/shared/types/dto/ingredient.dto'
import { ProductDTO } from '@/src/shared/types/dto/product.dto'

export type ProductUI = ProductDTO & {
  price: number
  ingredients: IngredientDTO[]
  className: string
}
