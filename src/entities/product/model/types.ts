import { Ingredient, IProps } from '@shared/types'

export interface ProductCardProps extends IProps {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
}
