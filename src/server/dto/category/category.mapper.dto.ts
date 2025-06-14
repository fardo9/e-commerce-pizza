import { mapProductToDTO } from '../product/product.mapper.dto'
import { CategoryDTO } from './category.dto'

import { Category } from '@/src/server/domain/category/category.entity'

export const mapCategoryToDTO = (category: Category): CategoryDTO => ({
  id: category.id,
  name: category.name,
  products: category.products.map(mapProductToDTO),
  createdAt: category.createdAt.toISOString(),
  updatedAt: category.updatedAt.toISOString()
})
