import { useMemo } from 'react'
import { useWorkoutLog } from './useWorkoutLog'
import { formatDateISO, getLast7Days } from '../utils/dateUtils'

export function useStreak() {
  const { log } = useWorkoutLog()

  return useMemo(() => {
    const sessionDates = new Set(log.map(s => s.date))

    // Last 7 days activity
    const last7 = getLast7Days()
    const last7Days = last7.map(dateStr => ({
      date: dateStr,
      active: sessionDates.has(dateStr)
    }))

    // Count workouts this week (last 7 days)
    const thisWeekCount = last7Days.filter(d => d.active).length

    // Count consecutive weeks with 3+ sessions
    let weekStreak = 0
    const today = new Date()
    const checkWeekStart = new Date(today)
    // Go to start of current week (Monday)
    const dow = checkWeekStart.getDay()
    checkWeekStart.setDate(checkWeekStart.getDate() - (dow === 0 ? 6 : dow - 1))
    checkWeekStart.setHours(0, 0, 0, 0)

    // Check current week first (only count if 3+ sessions so far)
    let weekCursor = new Date(checkWeekStart)
    while (true) {
      const weekEnd = new Date(weekCursor)
      weekEnd.setDate(weekEnd.getDate() + 7)
      const weekSessions = log.filter(s => {
        return s.date >= formatDateISO(weekCursor) && s.date < formatDateISO(weekEnd)
      }).length
      if (weekSessions >= 3) {
        weekStreak++
        weekCursor.setDate(weekCursor.getDate() - 7)
      } else {
        break
      }
    }

    return { thisWeekCount, weekStreak, last7Days }
  }, [log])
}
