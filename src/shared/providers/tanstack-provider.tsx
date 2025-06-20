'use client'

import { ReactNode, useState } from 'react'
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const TanStackProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={[]}>
        {children}
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
