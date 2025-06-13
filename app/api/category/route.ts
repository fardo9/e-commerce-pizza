import { NextResponse } from 'next/server'

import { GetCategoriesUseCase } from '@/src/server/application/useCases/getCategories.usecase'

export async function GET() {
  const useCase = new GetCategoriesUseCase()
  const categories = await useCase.execute()

  return NextResponse.json(categories)
}
