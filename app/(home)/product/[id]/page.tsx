import Image from 'next/image'

import { GetProductByIdUseCase } from '@/src/server/application/useCases/getProductById.usecase'
import { Container } from '@/src/shared/components'
import { Title } from '@/src/shared/components/ui'

type Params = Promise<{ id: string }>

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params
  const useCase = new GetProductByIdUseCase()
  const product = await useCase.execute(Number(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <Container className="flex my-10">
      <div className="flex flex-1 relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          // width={100}
          // height={100}
          priority
          quality={100}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={product?.name ?? ''} size="lg" className="mb-4" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident expedita
          iusto? Vero sed asperiores error eum id rem, vel non consequatur nesciunt quis excepturi
          repudiandae iste enim obcaecati minus.
        </p>
      </div>
    </Container>
  )
}
