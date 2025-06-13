import { NextRequest, NextResponse } from 'next/server'

import { SearchProductUseCase } from '@/src/server/application/useCases/searchProduct.usecase'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || ''

  const useCase = new SearchProductUseCase()
  const products = await useCase.execute(query)

  return NextResponse.json(products)
}
