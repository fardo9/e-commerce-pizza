import { CategoryRepository } from '@/src/server/infrastructure/repositories/category.repository'

export class CategoryService {
  constructor(private repository = new CategoryRepository()) {}

  async getAll() {
    return this.repository.findAll()
  }
}
