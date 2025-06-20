'use client'

import { useEffect } from 'react'

import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes
} from '@/src/entities/products/model/constants'
import { useProductVariantStore } from '@/src/entities/products/model/use-product-variant-store'
import { ProductDTO } from '@/src/server/dto/product/product.dto'
import { Title } from '@/src/shared/components/ui'
import { GroupVariants } from '@/src/shared/components/ui/group-variants/group-variants'

export const PizzaVariantSelector = ({ product }: { product: ProductDTO }) => {
  const {
    selectedType,
    selectedSize,
    setSelectedType,
    setSelectedSize,
    setIngredients,
    setItems,
    getSizeVariantsWithDisabled
  } = useProductVariantStore()

  useEffect(() => {
    setItems(product?.items)
    setIngredients(product?.ingredients)
  }, [product.items, setItems])

  const availableTypes = pizzaTypes.filter(type =>
    product.items.some(i => i.pizzaType === type.value)
  )

  const sizeVariants = getSizeVariantsWithDisabled(pizzaSizes)

  return (
    <div>
      <Title text="Choose type" size="sm" />
      <GroupVariants
        items={availableTypes}
        value={selectedType}
        onClick={val => setSelectedType(val as PizzaType)}
      />

      <Title text="Choose size" size="sm" className="mt-5" />
      <GroupVariants
        items={sizeVariants}
        value={selectedSize}
        onClick={val => setSelectedSize(val as PizzaSize)}
        className="mt-2"
      />
    </div>
  )
}
