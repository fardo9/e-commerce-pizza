import { useCallback, useState } from 'react'

export function useControlledInput<T>(initial: T) {
  const [value, setValue] = useState(initial)
  const [touched, setTouched] = useState(false)

  const onChange = useCallback((val: T) => {
    setTouched(true)
    setValue(val)
  }, [])

  return {
    value,
    setValue: onChange,
    touched,
    reset: () => {
      setValue(initial)
      setTouched(false)
    }
  }
}
