import { useEffect, useState } from 'react'

/**
 * useDebounce hook
 * @param {T} value - The value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns DebounceProps{T} - The debounced value
 */

interface DebounceProps<T> {
  value: T
  delay: number
}

export const useDebounce = <T>({ value, delay }: DebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
