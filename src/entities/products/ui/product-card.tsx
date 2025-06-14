import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import { ProductUI } from '../model/types'

import { Button, Title } from '@/shared/components/ui'

export const ProductCard: FC<ProductUI> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`} scroll={false}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] relative">
          <Image src={imageUrl} alt={name} fill style={{ objectFit: 'contain' }} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients?.map(ingredient => ingredient.name).join(', ')}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} $</b>
          </span>

          <Button className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  )
}
