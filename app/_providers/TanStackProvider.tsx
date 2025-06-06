'use client'

import { ReactNode, useState } from 'react'
import { dehydrate, HydrationBoundary, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { getQueryClient } from '@/src/shared/lib/react-query'

interface Props {
  children: ReactNode
}

export const TanStackProvider = ({ children }: Props) => {
  const [queryClient] = useState(getQueryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
