import { IngredientDTO } from './ingredient.dto'

import { Ingredient } from '@/src/server/domain/ingredients/ingredient.entity'

export const mapIngredientToDTO = (ingredient: Ingredient): IngredientDTO => ({
  id: ingredient.id,
  name: ingredient.name,
  price: ingredient.price,
  imageUrl: ingredient.imageUrl,
  createdAt: ingredient.createdAt.toISOString(),
  updatedAt: ingredient.updatedAt.toISOString()
})
