import { useEffect } from 'react'

export const useDebug = (label: string, value: unknown, active: boolean = true) => {
  useEffect(() => {
    if (active) {
      console.log(`[DEBUG] ${label}:`, value)
    }
  }, [value, active, label])
}
