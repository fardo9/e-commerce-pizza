import type { Prisma } from '@prisma/client'

export type PrismaProductWithIngredients = Prisma.ProductGetPayload<{
  include: { ingredients: true; items: true }
}>
