import { DEFAULT_PRICE_FROM, DEFAULT_PRICE_TO } from '../../../../shared/config/filter-options'
import { ProductsFilterQuery } from '../types/productsFilterQuery'

export const buildQueryParams = (filters: ProductsFilterQuery) => {
  const params: Record<string, any> = {}

  if (filters.from !== DEFAULT_PRICE_FROM) {
    params.from = filters.from
  }

  if (filters.to !== DEFAULT_PRICE_TO) {
    params.to = filters.to
  }

  if (filters.ingredients.length > 0) {
    params.ingredients = filters.ingredients
  }

  if (filters.types.length > 0) {
    params.types = filters.types
  }

  if (filters.sizes.length > 0) {
    params.sizes = filters.sizes
  }

  return params
}
