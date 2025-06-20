'use client'

import { Skeleton } from '@/src/shared/components/ui'

export const ProductImageSkeleton = () => {
  return (
    <div className="flex items-center justify-center flex-1 relative w-full">
      <Skeleton className="w-[400px] h-[400px] rounded-full bg-gray-200" />
    </div>
  )
}
