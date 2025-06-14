'use client'

import { ProductsList } from './product-list'
import { ProductsListSkeleton } from './product-list-skeleton'

import { useCategories } from '@/src/entities/category'
import { DEFAULT_SKELETON_COUNT } from '@/src/shared/constants/ui'
import { cn } from '@/src/shared/lib/utils'

export default function ProductListContainer() {
  const { categories, isLoading } = useCategories()

  if (isLoading) {
    return (
      <div className="flex flex-col gap-16">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProductsListSkeleton key={i} />
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-16">
      {isLoading ? (
        Array.from({ length: DEFAULT_SKELETON_COUNT }).map((_, i) => (
          <ProductsListSkeleton key={i} />
        ))
      ) : categories && categories.length > 0 ? (
        categories.map((category, index) => (
          <ProductsList
            key={category.id}
            title={category.name}
            items={category.products}
            categoryId={category.id}
            className={cn(index !== 0 && 'mt-16')}
          />
        ))
      ) : (
        <div className="text-center text-gray-400 py-10">No categories available</div>
      )}
    </div>
  )
}
