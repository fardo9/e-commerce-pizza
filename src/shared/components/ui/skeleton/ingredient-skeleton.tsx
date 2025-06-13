import { Skeleton } from '@/src/shared/components/ui'

export const IngredientSkeleton = ({ count = 5 }: { count?: number }) => (
  <div className="flex flex-col gap-4">
    <Skeleton className="mb-5 h-10 rounded-md" />
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex items-center gap-3">
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-5 w-[180px] rounded-md" />
      </div>
    ))}
  </div>
)
