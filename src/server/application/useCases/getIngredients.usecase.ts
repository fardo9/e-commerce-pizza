import { Ingredient } from '@/src/server/domain/ingredients/ingredient.entity'
import { IngredientRepository } from '@/src/server/infrastructure/repositories/ingredient.repository'

export class GetIngredientsUseCase {
  constructor(private ingredientRepository = new IngredientRepository()) {}

  async execute(): Promise<Ingredient[]> {
    return await this.ingredientRepository.getAll()
  }
}
