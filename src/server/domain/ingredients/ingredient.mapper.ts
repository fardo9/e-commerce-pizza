import { Ingredient } from './ingredient.entity'

export const mapIngredientToDomain = (ingredient: any): Ingredient => ({
  id: ingredient.id,
  name: ingredient.name,
  price: ingredient.price,
  imageUrl: ingredient.imageUrl,
  createdAt: ingredient.createdAt,
  updatedAt: ingredient.updatedAt
})
