import { NextResponse } from 'next/server'

import { IngredientService } from '@/src/server/domain/ingredients/ingredient.service'

export async function GET() {
  const service = new IngredientService()
  const ingredients = await service.getAll()

  return NextResponse.json(ingredients)
}
