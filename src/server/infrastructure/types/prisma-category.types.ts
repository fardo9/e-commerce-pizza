import { Prisma } from '@prisma/client'

export type PrismaCategoryWithProducts = Prisma.CategoryGetPayload<{
  include: { products: { include: { ingredients: true; items: true } } }
}>
