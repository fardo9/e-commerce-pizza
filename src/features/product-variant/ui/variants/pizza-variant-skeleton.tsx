'use client'

import { Skeleton } from '@/src/shared/components/ui'

export const PizzaVariantSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/4" /> {/* Choose size */}
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/3" /> {/* Choose ingredients */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-7 w-36 rounded-full" />
          <Skeleton className="h-7 w-32 rounded-full" />
          <Skeleton className="h-7 w-44 rounded-full" />
          <Skeleton className="h-7 w-40 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-4 w-1/5" /> {/* Total Price */}
      <Skeleton className="h-10 w-full rounded-lg bg-orange-300" /> {/* Add to cart */}
    </div>
  )
}
