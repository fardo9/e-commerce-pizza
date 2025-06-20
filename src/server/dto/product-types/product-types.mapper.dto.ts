import { ProductItem } from '../../domain/product-types/item-types.entitiy'
import { ProductItemDTO } from './product-types.dto'

import { PizzaType } from '@/src/entities/products/model/constants'

export function mapProductItemToDTO(item: ProductItem): ProductItemDTO {
  return {
    id: item.id,
    productId: item.productId,
    size: item.size ?? null,
    pizzaType: Number(item.pizzaType) as PizzaType,
    price: item.price
  }
}
