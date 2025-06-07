import { NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'

export async function GET() {
  const category = await prisma.category.findMany({
    include: {
      products: {
        include: { ingredients: true, items: true }
      }
    }
  })

  return NextResponse.json(category)
}
