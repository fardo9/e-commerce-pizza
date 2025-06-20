'use client'

import { useState } from 'react'

import { CoffeeType, coffeeTypes } from '@/src/entities/products/model/constants'
import { ProductDTO } from '@/src/server/dto/product/product.dto'
import { GroupVariants } from '@/src/shared/components/ui/group-variants/group-variants'

interface Props {
  product: ProductDTO
}

export const CoffeeVariantSelector: React.FC<Props> = ({ product }) => {
  const [selectedType, setSelectedType] = useState<CoffeeType>(CoffeeType.Espresso)

  return <GroupVariants items={coffeeTypes} value={selectedType} onClick={setSelectedType} />
}
