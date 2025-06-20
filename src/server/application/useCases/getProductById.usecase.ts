import { ProductDTO } from '../../dto/product/product.dto'
import { mapProductToDTO } from '../../dto/product/product.mapper.dto'
import { ProductsRepository } from '../../infrastructure/repositories/products.repository'

export class GetProductByIdUseCase {
  constructor(private productRepository = new ProductsRepository()) {}

  async execute(id: number): Promise<ProductDTO | null> {
    const domainProduct = await this.productRepository.findById(id)
    return domainProduct ? mapProductToDTO(domainProduct) : null
  }
}
