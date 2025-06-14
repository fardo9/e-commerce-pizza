import { mapIngredientToDTO } from '../ingredients/ingredient.mapper.dto'
import { ProductDTO } from './product.dto'

import { Product } from '@/src/server/domain/product/products.entity'

export const mapProductToDTO = (product: Product): ProductDTO => ({
  id: product.id,
  name: product.name,
  imageUrl: product.imageUrl,
  categoryId: product.categoryId,
  createdAt: product.createdAt.toISOString(),
  updatedAt: product.updatedAt.toISOString(),
  ingredients: product.ingredients.map(mapIngredientToDTO)
})
