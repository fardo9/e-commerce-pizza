import { RefObject, useRef } from 'react'

export type SafeRef<T> = RefObject<T | null>

export function useCreateSafeRef<T>(): SafeRef<T> {
  return useRef<T>(null)
}
