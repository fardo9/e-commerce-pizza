import { cn } from '@shared/lib/utils'
import { IProps } from '@shared/types'

export default function Container({ className, children }: React.PropsWithChildren<IProps>) {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
}
