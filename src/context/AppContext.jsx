import { createContext, useContext, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { DAYS } from '../data/days'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [currentCycleDay, setCurrentCycleDay] = useLocalStorage('currentCycleDay', 0)

  const advanceCycleDay = useCallback(() => {
    setCurrentCycleDay(prev => (prev + 1) % 4)
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
