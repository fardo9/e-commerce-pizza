import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import { IProps } from '@shared/types'
import { Button, Title } from '@components/ui'

export interface Ingredient {
  id: number
  name: string
}

interface Props extends IProps {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
}

export const ProductCard: FC<Props> = ({ id, name, price, imageUrl, ingredients, className }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`} scroll={false}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients.map(ingredient => ingredient.name).join(', ')}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  )
}
