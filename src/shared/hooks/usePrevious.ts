import { useEffect, useRef } from 'react'

export type UsePreviousReturn<T> = T | undefined

export function usePrevious<T>(value: T): UsePreviousReturn<T | undefined> {
  const ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
