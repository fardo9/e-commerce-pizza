import { GetProductByIdUseCase } from '@/src/server/application/useCases/getProductById.usecase'
import { Params } from '@/src/shared/types'

export async function GET(_req: Request, { params }: { params: Params }) {
  const { id } = await params

  const product = await new GetProductByIdUseCase().execute(Number(id))

  if (!product) return new Response('Not found', { status: 404 })

  return Response.json(product)
}
