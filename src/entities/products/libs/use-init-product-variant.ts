'use client'

import { useEffect } from 'react'

import { useProductVariantStore } from '../model/use-product-variant-store'

import { ProductDTO } from '@/src/server/dto/product/product.dto'

export function useInitProductVariant(product: ProductDTO) {
  const { isInitialized, setItems, setIngredients, markInitialized } = useProductVariantStore()

  useEffect(() => {
    if (!isInitialized) {
      setItems(product.items)
      setIngredients(product.ingredients)
      markInitialized()
    }
  }, [isInitialized, product])
}
