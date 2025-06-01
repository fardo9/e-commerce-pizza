import { cn } from '@shared/lib/utils'
import { IProps } from '@shared/types'
import { Skeleton } from '@components/ui'
import { CategoryLink } from '@entities/category/ui/CategoryLink'

interface Props extends IProps {
  items?: any[]
  activeID?: number | null
  isLoading?: boolean
}

export const CategoriesList: React.FC<Props> = ({ className, items, isLoading, activeID }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {isLoading ? (
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center font-bold h-11 rounded-2xl px-5">
              <Skeleton className="w-25 h-10 rounded-2xl" />
            </div>
          ))}
        </div>
      ) : (
        items?.map(({ name, id }: { name: string; id: number }) => (
          <CategoryLink key={id} id={id} name={name} isActive={activeID === id} />
        ))
      )}
    </div>
  )
}
