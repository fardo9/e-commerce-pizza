import { PizzaSize, PizzaType } from '@/src/entities/products/model/constants'

export type ProductItemDTO = {
  id: number
  price: number
  size: PizzaSize | null
  pizzaType: PizzaType | null
  productId: number
}
