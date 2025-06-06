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

export type Ingredient = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  imageUrl: string
  price: number
}
