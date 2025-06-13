import { Product } from '@/src/server/domain/product/products.entity'
import { ProductsRepository } from '@/src/server/infrastructure/repositories/products.repository'

export class SearchProductUseCase {
  constructor(private productRepository = new ProductsRepository()) {}

  async execute(query: string): Promise<Product[]> {
    return await this.productRepository.search(query)
  }
}
