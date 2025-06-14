import { CategoryDTO } from '@/src/server/dto/category/category.dto'
import { mapCategoryToDTO } from '@/src/server/dto/category/category.mapper.dto'
import { CategoryRepository } from '@/src/server/infrastructure/repositories/category.repository'

export class GetCategoriesUseCase {
  constructor(private categoryRepository = new CategoryRepository()) {}

  async execute(): Promise<CategoryDTO[]> {
    const domainCategories = await this.categoryRepository.findAll()
    return domainCategories.map(mapCategoryToDTO)
  }
}
