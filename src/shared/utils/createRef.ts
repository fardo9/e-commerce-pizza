import { RefObject, useRef } from 'react'

export type SafeRef<T> = RefObject<T>

export function useCreateSafeRef<T>(): SafeRef<T> {
  return useRef<T>(null as unknown as T)
}
