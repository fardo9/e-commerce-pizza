import { useQuery } from '@tanstack/react-query'

import { searchProducts } from './product-api'

export const useProductSearch = (query: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['search-products', query],
    queryFn: () => searchProducts(query),
    enabled
  })
}
