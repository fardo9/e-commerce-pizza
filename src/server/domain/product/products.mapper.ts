import { Product } from './products.entity'

import { mapIngredientToDomain } from '@/src/server/domain/ingredients/ingredient.mapper'
import { PrismaProductWithIngredients } from '@/src/server/infrastructure/types/prisma-product.types'

export const mapProductToDomain = (product: PrismaProductWithIngredients): Product => ({
  id: product.id,
  name: product.name,
  imageUrl: product.imageUrl,
  categoryId: product.categoryId,
  createdAt: product.createdAt,
  updatedAt: product.updatedAt,
  ingredients: product.ingredients?.map(mapIngredientToDomain) ?? []
})
