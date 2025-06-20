'use client'

import { variantComponentMap } from '../lib/variantComponentMap'
import { ProductIngredientsSelector } from './product-ingredient-selector'
import { PizzaVariantSkeleton } from './variants/pizza-variant-skeleton'

import { useInitProductVariant } from '@/src/entities/products/libs/use-init-product-variant'
import { CategoryId } from '@/src/entities/products/model/constants'
import { useProductVariantStore } from '@/src/entities/products/model/use-product-variant-store'
import { ProductDTO } from '@/src/server/dto/product/product.dto'
import { Button } from '@/src/shared/components/ui/button'

export const ProductVariantSwitcher = ({ product }: { product: ProductDTO }) => {
  const VariantComponent = variantComponentMap[product.categoryId as CategoryId]

  const { isInitialized, getTotalPrice } = useProductVariantStore()

  useInitProductVariant(product)

  if (!isInitialized) return <PizzaVariantSkeleton />

  return (
    <div className="flex flex-col gap-5">
      {VariantComponent && <VariantComponent product={product} />}

      {product.ingredients.length > 0 && <ProductIngredientsSelector />}

      <div className="mt-4 text-sm text-gray-600">
        <strong>Total Price:</strong> {getTotalPrice() ? `${getTotalPrice()}₴` : '—'}
      </div>

      <Button className="mt-4 w-full">Add to cart</Button>
    </div>
  )
}
