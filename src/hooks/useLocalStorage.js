import { useState, useCallback } from 'react'
import { getItem, setItem } from '../utils/storage'

export function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => getItem(key, defaultValue))

  const setValue = useCallback((value) => {
    const newValue = typeof value === 'function' ? value(storedValue) : value
    setStoredValue(newValue)
    setItem(key, newValue)
  }, [key, storedValue])

  return [storedValue, setValue]
}
