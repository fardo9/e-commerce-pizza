import { PrismaProductWithIngredients } from '../types/prisma-product.types'

import { prisma } from '@/prisma/prisma-client'
import { Product } from '@/src/server/domain/product/products.entity'
import { mapProductToDomain } from '@/src/server/domain/product/products.mapper'

export class ProductsRepository {
  async search(query: string): Promise<Product[]> {
    const products = (await prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive'
        }
      },
      take: 5,
      include: {
        ingredients: true
      }
    })) as PrismaProductWithIngredients[]

    return products.map(mapProductToDomain)
  }
}
