import { PizzaSize, PizzaType } from '@/src/entities/products/model/constants'

export type ProductItem = {
  id: number
  price: number
  size: PizzaSize | null
  pizzaType: PizzaType | null
  productId: number
}
