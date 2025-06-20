'use client'

import { useProductByID } from '../queries/useProductByID'

import { ProductModal } from '@/src/features/product-modal/ui/product-modal'

export const ProductModalClient = ({ id }: { id: number }) => {
  const { product, isLoading } = useProductByID(id)

  return <ProductModal product={product ?? undefined} isLoading={isLoading} />
}
