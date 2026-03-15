import { useState, useCallback, useRef } from 'react'
import { getItem, setItem } from '../utils/storage'

export function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => getItem(key, defaultValue))
  const latestValueRef = useRef(storedValue)
  latestValueRef.current = storedValue

  const setValue = useCallback((value) => {
    const newValue = typeof value === 'function' ? value(latestValueRef.current) : value
    latestValueRef.current = newValue
    setStoredValue(newValue)
    setItem(key, newValue)
  }, [key])

  return [storedValue, setValue]
}
