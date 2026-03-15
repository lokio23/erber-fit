import { useMemo } from 'react'
import { useWorkoutLog } from './useWorkoutLog'
import { formatDateISO, getLast7Days } from '../utils/dateUtils'

export function useStreak() {
  const { log } = useWorkoutLog()

  return useMemo(() => {
    const sessionDates = new Set(log.map(s => s.date))

    // Current streak
    let streak = 0
    const today = new Date()
    const checkDate = new Date(today)

    if (!sessionDates.has(formatDateISO(checkDate))) {
      checkDate.setDate(checkDate.getDate() - 1)
    }

    while (sessionDates.has(formatDateISO(checkDate))) {
      streak++
      checkDate.setDate(checkDate.getDate() - 1)
    }

    // Last 7 days activity
    const last7 = getLast7Days()
    const last7Days = last7.map(dateStr => ({
      date: dateStr,
      active: sessionDates.has(dateStr)
    }))

    return { currentStreak: streak, last7Days }
  }, [log])
}
