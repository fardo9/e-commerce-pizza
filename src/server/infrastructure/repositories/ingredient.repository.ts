import { prisma } from '@/prisma/prisma-client'
import { Ingredient } from '@/src/server/domain/ingredients/ingredient.entity'
import { mapIngredientToDomain } from '@/src/server/domain/ingredients/ingredient.mapper'

export class IngredientRepository {
  async getAll(): Promise<Ingredient[]> {
    const ingredients = await prisma.ingredient.findMany()
    return ingredients.map(mapIngredientToDomain)
  }
}
