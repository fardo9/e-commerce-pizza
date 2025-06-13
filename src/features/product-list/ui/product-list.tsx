'use client'

import { FC } from 'react'

import { ProductListProps } from '../model/types'
import { useObserveCategory } from '../model/use-observe-category'

import { Title } from '@/shared/components/ui'
import { cn } from '@/shared/lib/utils'
import { ProductCard } from '@/src/entities/products'
import { useCreateSafeRef } from '@/src/shared/utils/createRef'

export const ProductsList: FC<ProductListProps> = ({
  title,
  items,
  listClassName,
  categoryId,
  className
}) => {
  const intersectionRef = useCreateSafeRef<HTMLDivElement>()

  useObserveCategory(intersectionRef, categoryId)

  return (
    <div className={className} id={title.toLocaleLowerCase()} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <div className="flex flex-col" key={i}>
            <ProductCard key={product.id} {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}
