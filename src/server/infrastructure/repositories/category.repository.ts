import { PrismaCategoryWithProducts } from '../types/prisma-category.types'

import { prisma } from '@/prisma/prisma-client'
import { Category } from '@/src/server/domain/category/category.entity'
import { mapCategoryToDomain } from '@/src/server/domain/category/category.mapper'

export class CategoryRepository {
  async findAll(): Promise<Category[]> {
    const categories = (await prisma.category.findMany({
      include: {
        products: {
          include: { ingredients: true, items: true }
        }
      }
    })) as PrismaCategoryWithProducts[]

    return categories.map(mapCategoryToDomain)
  }
}
