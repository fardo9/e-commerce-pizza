import { ProductsRepository } from '@/src/server/infrastructure/repositories/products.repository'

export class ProductService {
  constructor(private repository = new ProductsRepository()) {}

  async search(query: string) {
    return this.repository.search(query)
  }
}
