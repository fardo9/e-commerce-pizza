import { IngredientRepository } from '@/src/server/infrastructure/repositories/ingredient.repository'

export class IngredientService {
  constructor(private repository = new IngredientRepository()) {}

  async getAll() {
    return this.repository.getAll()
  }
}
