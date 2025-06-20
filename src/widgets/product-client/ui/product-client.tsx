'use client'

import { ProductImageSkeleton } from './product-image-skeleton'

import { PizzaSize } from '@/src/entities/products/model/constants'
import { useProductVariantStore } from '@/src/entities/products/model/use-product-variant-store'
import { ProductVariantSwitcher } from '@/src/features/product-variant/ui/product-variant-switcher'
import { ProductDTO } from '@/src/server/dto/product/product.dto'
import { Container } from '@/src/shared/components'
import { ProductImage, Title } from '@/src/shared/components/ui'

export function ProductClient({ product }: { product: ProductDTO }) {
  const { selectedSize, isInitialized } = useProductVariantStore()

  return (
    <Container className="flex my-10">
      <div className="flex flex-1">
        {!isInitialized ? (
          <ProductImageSkeleton />
        ) : (
          <ProductImage
            imageUrl={product.imageUrl}
            alt={product.name}
            size={selectedSize as PizzaSize}
          />
        )}
      </div>
      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={product?.name ?? ''} size="lg" className="mb-4" />
        <ProductVariantSwitcher product={product} />
      </div>
    </Container>
  )
}
