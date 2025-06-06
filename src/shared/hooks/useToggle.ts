import { useCallback, useState } from 'react'

export interface UseToggleReturn {
  value: boolean
  toggle: () => void
}
export function useToggle(initialValue = false): UseToggleReturn {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggle = useCallback(() => setValue(prev => !prev), [])
  return { value, toggle }
}
