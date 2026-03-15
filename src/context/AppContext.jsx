import { createContext, useContext, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { DAYS } from '../data/days'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [rawCycleDay, setCurrentCycleDay] = useLocalStorage('currentCycleDay', 0)

  // Validate: clamp to 0-3 range
  const currentCycleDay = typeof rawCycleDay === 'number' && rawCycleDay >= 0 && rawCycleDay < 4
    ? rawCycleDay
    : 0

  const advanceCycleDay = useCallback(() => {
    setCurrentCycleDay(prev => {
      const valid = typeof prev === 'number' && prev >= 0 && prev < 4 ? prev : 0
      return (valid + 1) % 4
    })
  }, [setCurrentCycleDay])

  const currentDay = DAYS[currentCycleDay]

  return (
    <AppContext.Provider value={{ currentCycleDay, currentDay, advanceCycleDay }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
