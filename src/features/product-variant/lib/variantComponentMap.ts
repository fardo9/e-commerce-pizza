import { CoffeeVariantSelector } from '../ui/variants/coffee-variant-selector'
import { PizzaVariantSelector } from '../ui/variants/pizza-variant-selector'

import { CategoryId } from '@/src/entities/products/model/constants'
import { ProductDTO } from '@/src/server/dto/product/product.dto'

export const variantComponentMap: Partial<Record<CategoryId, React.FC<{ product: ProductDTO }>>> = {
  [CategoryId.Pizza]: PizzaVariantSelector,
  [CategoryId.Coffee]: CoffeeVariantSelector
}
