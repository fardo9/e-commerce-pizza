'use client'

import Image from 'next/image'
import Link from 'next/link'

import { SkeletonInput } from './skeleton-input'

import { useProductSearch } from '@/src/entities/products/model/use-products-search'
import { SearchInput } from '@/src/shared/components/ui/search-input/search-input'
import { useDebounce } from '@/src/shared/hooks/useDebounce'
import { useSearchInput } from '@/src/shared/hooks/useSearchInput'

export function SearchProduct() {
  const { ref, focused, setFocused, searchQuery, setSearchQuery } = useSearchInput()

  const debouncedQuery = useDebounce({ value: searchQuery, delay: 500 })

  const { data, isLoading } = useProductSearch(debouncedQuery, focused || !!searchQuery)

  const handleLinkClick = () => {
    setFocused(false)
  }

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <SearchInput
        refContainer={ref}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onFocus={() => setFocused(true)}
      >
        <div
          className="absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30"
          style={{ visibility: focused ? 'visible' : 'hidden', opacity: focused ? 1 : 0 }}
        >
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => <SkeletonInput key={index} />)
          ) : (
            <>
              {data && data.length > 0 ? (
                data.map(product => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                    onClick={handleLinkClick}
                  >
                    <Image
                      className="rounded-sm h-8 w-8"
                      src={product.imageUrl || '/assets/images/default-pizza.png'}
                      alt={product.name}
                    />
                    {product.name}
                  </Link>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-500">Product not found</div>
              )}
            </>
          )}
        </div>
      </SearchInput>
    </>
  )
}
