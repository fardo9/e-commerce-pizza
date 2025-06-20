import { GetProductByIdUseCase } from '@/src/server/application/useCases/getProductById.usecase'
import { Params } from '@/src/shared/types'
import { ProductClient } from '@/src/widgets/product-client/ui/product-client'

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params
  const useCase = new GetProductByIdUseCase()
  const product = await useCase.execute(Number(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductClient product={product} />
}
