import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useWorkoutLog() {
  const [log, setLog] = useLocalStorage('workoutLog', [])

  const saveSession = useCallback((session) => {
    setLog(prev => [...prev, session])
  }, [setLog])

  const getLastSession = useCallback(() => {
    return log.length > 0 ? log[log.length - 1] : null
  }, [log])

  const getLastSessionForDay = useCallback((dayIndex) => {
    for (let i = log.length - 1; i >= 0; i--) {
      if (log[i].dayIndex === dayIndex) return log[i]
    }
    return null
  }, [log])

  const getSessionsByExercise = useCallback((exerciseId) => {
    return log.filter(session =>
      session.exercises.some(ex => ex.exerciseId === exerciseId)
    )
  }, [log])

  const getSessionsInDateRange = useCallback((start, end) => {
    return log.filter(s => s.date >= start && s.date <= end)
  }, [log])

  return {
    log,
    saveSession,
    getLastSession,
    getLastSessionForDay,
    getSessionsByExercise,
    getSessionsInDateRange
  }
}
