import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'

import { ProductsFilterState } from './types/productsFilterState'

import { buildQueryParams } from '@/src/features/products-filter/model/query/buildQueryParams'

export const useProductsQuerySync = (filters: ProductsFilterState) => {
  const isMounted = useRef(false)
  const router = useRouter()

  useEffect(() => {
    if (isMounted.current) {
      const queryParams = {
        from: filters.priceRange.values[0],
        to: filters.priceRange.values[1],
        ingredients: Array.from(filters.selectedIngredients),
        types: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes)
      }

      const query = qs.stringify(buildQueryParams(queryParams), { arrayFormat: 'comma' })
      router.push(`?${query}`, { scroll: false })
    }
    isMounted.current = true
  }, [filters, router])
}
