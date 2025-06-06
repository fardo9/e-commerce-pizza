import { useEffect, useState } from 'react'

export interface UseLocalStorageReturn<T> {
  value: T
  setValue: (val: T) => void
  saveValue: (val: T) => void
  removeValue: () => void
}

// TODO: add toasts for inform localstorage is remove/save
export function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageReturn<T> {
  const [value, setValueState] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch (error) {
      console.error('Error reading from localStorage', error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error writing to localStorage', error)
    }
  }, [key, value])

  const setValue = (val: T) => {
    setValueState(val)
  }

  const saveValue = (val: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(val))
    } catch (error) {
      console.error('Error writing to localStorage (load)', error)
    }
    setValueState(val)
  }

  const removeValue = () => {
    try {
      localStorage.removeItem(key)
      setValueState(initialValue)
    } catch (error) {
      console.error('Error writing to localStorage (load)', error)
    }
  }

  return { value, setValue, saveValue, removeValue }
}
