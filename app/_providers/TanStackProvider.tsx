'use client'

import { ReactNode, useRef } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const TanStackProvider = ({ children }: { children: ReactNode }) => {
  console.log(',process.env.NODE_ENV', process.env.NODE_ENV)
  const queryClientRef = useRef<QueryClient | null>(null)
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 0,
          refetchInterval: 0
        }
      }
    })
  }

  return (
    <QueryClientProvider client={queryClientRef.current!}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}

export default TanStackProvider
