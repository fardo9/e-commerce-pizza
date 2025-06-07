'use client'

import { cn } from '@shared/lib/utils'
import { useCategoryStore } from '@shared/store/category'
import { IProps } from '@shared/types'
import { Skeleton } from '@components/ui'

import { CategoryLink } from '@/src/entities/category/ui/category-link'

interface Items {
  name: string
  id: number
}
interface Props extends IProps {
  items?: Items[]
  isLoading?: boolean
}

export default function CategoriesList({ className, items, isLoading }: Props) {
  const activeCategoryId = useCategoryStore(state => state.activeId)

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {isLoading ? (
        <div className="flex gap-2">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flex items-center font-bold text-primary h-11 rounded-2xl px-3">
              <Skeleton className="w-25 h-10 rounded-2xl" />
            </div>
          ))}
        </div>
      ) : (
        items?.map(({ name, id }: { name: string; id: number }) => (
          <CategoryLink key={id} name={name} isActive={activeCategoryId === id} />
        ))
      )}
    </div>
  )
}
