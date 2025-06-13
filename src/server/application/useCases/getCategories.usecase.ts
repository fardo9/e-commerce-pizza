import { Category } from '@/src/server/domain/category/category.entity'
import { CategoryRepository } from '@/src/server/infrastructure/repositories/category.repository'

export class GetCategoriesUseCase {
  constructor(private categoryRepository = new CategoryRepository()) {}

  async execute(): Promise<Category[]> {
    return await this.categoryRepository.findAll()
  }
}
