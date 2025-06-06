import { type PropsWithChildren } from 'react'

import { cn } from '@shared/lib/utils'
import type { IProps } from '@shared/types'

export function Container({ className, children }: PropsWithChildren<IProps>) {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
}
