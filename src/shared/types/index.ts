import { Ingredient } from '@/src/server/domain/ingredients/ingredient.entity'

export interface IProps {
  className?: string
}

export type PizzaItem = {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
}
