'use client'

import { FC } from 'react'

import { cn } from '@shared/lib/utils'
import { Title } from '@components/ui'

interface Items {
  name: string
}
export interface Props {
  title: string
  items: Items[]
  categoryId: number
  listClassName?: string
  className?: string
}

export const ProductsList: FC<Props> = ({ title, items, listClassName, categoryId, className }) => {
  console.log('categoryId', categoryId)
  return (
    <div className={className} id={title.toLocaleLowerCase()}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <>
            <p>Product #{i}</p>
          </>
        ))}
      </div>
    </div>
  )
}
