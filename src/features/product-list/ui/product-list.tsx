'use client'

import { FC, useRef } from 'react'

import { cn } from '@shared/lib/utils'
import { Title } from '@components/ui'
import { ProductCard } from '@entities/product'

import { ProductListProps } from '../model/types'
import { useObserveCategory } from '../model/use-observe-category'

export const ProductsList: FC<ProductListProps> = ({ title, items, listClassName, categoryId, className }) => {
  const intersectionRef = useRef<HTMLDivElement>(null)

  useObserveCategory(intersectionRef, categoryId, title)

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
