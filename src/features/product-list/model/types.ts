import { Ingredient } from '@shared/types'

interface Items {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
}

export interface ProductListProps {
  title: string
  items: Items[]
  categoryId: number
  listClassName?: string
  className?: string
}
