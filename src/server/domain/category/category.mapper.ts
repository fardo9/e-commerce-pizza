import { mapProductToDomain } from '../product/products.mapper'
import { Category } from './category.entity'

import { PrismaCategoryWithProducts } from '@/src/server/infrastructure/types/prisma-category.types'

export const mapCategoryToDomain = (category: PrismaCategoryWithProducts): Category => ({
  id: category.id,
  name: category.name,
  products: category.products?.map(mapProductToDomain) ?? [],
  createdAt: category.createdAt,
  updatedAt: category.updatedAt
})
