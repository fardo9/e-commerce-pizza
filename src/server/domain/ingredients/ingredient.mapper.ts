import { PrismaIngredient } from '../../infrastructure/types/prisma-ingredient.types'
import { Ingredient } from './ingredient.entity'

export const mapIngredientToDomain = (ingredient: PrismaIngredient): Ingredient => ({
  id: ingredient.id,
  name: ingredient.name,
  price: ingredient.price,
  imageUrl: ingredient.imageUrl,
  createdAt: ingredient.createdAt,
  updatedAt: ingredient.updatedAt
})
