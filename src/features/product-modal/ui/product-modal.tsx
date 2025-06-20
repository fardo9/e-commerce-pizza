'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { ProductVariantSwitcher } from '../../product-variant'
import { ProductSkeleton } from './product-modal-skeleton'

import { PizzaSize } from '@/src/entities/products/model/constants'
import { useProductVariantStore } from '@/src/entities/products/model/use-product-variant-store'
import { Dialog, DialogContent, ProductImage } from '@/src/shared/components/ui'
import { IProps } from '@/src/shared/types'

interface IProductModalProps extends IProps {
  product: any | undefined
  isLoading?: boolean
  onOpenChange?: () => void
}

export const ProductModal: React.FC<IProductModalProps> = ({ product, isLoading }) => {
  const router = useRouter()

  const { selectedSize, setItems } = useProductVariantStore()

  useEffect(() => {
    setItems(product?.items)
  }, [product?.items, setItems])

  return (
    <Dialog open={!!product || isLoading} onOpenChange={() => router.back()}>
      {isLoading || !product ? (
        <ProductSkeleton />
      ) : (
        <DialogContent
          aria-label={product.name}
          className="w-full mx-8 max-w-[760px] p-0 lg:px-8 py-6 sm:w-[480px] md:w-[780px] md:mx-10"
        >
          <div className="flex flex-col md:flex-row rounded-lg">
            lol
            <div className="w-full h-full flex items-center justify-center p-8 md:w-1/2">
              <ProductImage
                imageUrl={product.imageUrl}
                alt={product.name}
                size={selectedSize as PizzaSize}
              />
            </div>
            <div className="w-full bg-[#FCFCFC] p-8 flex flex-col justify-between rounded-lg md:w-1/2">
              <ProductVariantSwitcher product={product} />
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
