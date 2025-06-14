import { Skeleton } from '@/components/ui'
import { cn } from '@/src/shared/lib/utils'

interface ProductsListSkeletonProps {
  className?: string
  listClassName?: string
}

export const ProductsListSkeleton = ({ className, listClassName }: ProductsListSkeletonProps) => {
  return (
    <div className={className}>
      <Skeleton className="h-10 w-30 mb-5 rounded-md" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <Skeleton className="w-full h-56 rounded-xl" />
            <Skeleton className="h-6 w-3/4 rounded-md" />
            <div>
              <Skeleton className="h-3 w-3/4 rounded-md" />
              <Skeleton className="mt-1 h-3 w-3/4 rounded-md" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-5 w-15 rounded-md" />
              <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
