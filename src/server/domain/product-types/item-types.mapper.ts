import { ProductItem } from './item-types.entitiy'

import { PizzaType } from '@/src/entities/products/model/constants'
import { ProductItemDTO } from '@/src/server/dto/product-types/product-types.dto'

export function mapProductItemToDomain(item: ProductItem): ProductItemDTO {
  return {
    id: item.id,
    price: item.price,
    size: item.size ?? null,
    pizzaType: Number(item.pizzaType) as PizzaType,
    productId: item.productId
  }
}
