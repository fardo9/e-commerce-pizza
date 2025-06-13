import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'

import { useProductsFilter } from './useProductsFilter'

export const useProductsQuerySync = (filters: ReturnType<typeof useProductsFilter>) => {
  const isMounted = useRef(false)
  const router = useRouter()

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        priceFrom: filters.priceRange.values[0],
        priceTo: filters.priceRange.values[1],
        ingredients: Array.from(filters.selectedIngredients),
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes)
      }

      console.log('FILTER PARAMS:', params)

      const query = qs.stringify(params, { arrayFormat: 'comma' })
      router.push(`?${query}`, { scroll: false })
    }
    isMounted.current = true
  }, [filters, router])
}
