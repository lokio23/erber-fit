import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getUniqueExercises, UNIQUE_EXERCISE_COUNT } from '../utils/exerciseLookup'

export function useFormCoach() {
  const [progress, setProgress] = useLocalStorage('formCoachProgress', {})

  const markKnown = useCallback((exerciseId) => {
    setProgress(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        known: true,
        reviewCount: (prev[exerciseId]?.reviewCount || 0) + 1,
        lastReviewed: new Date().toISOString().slice(0, 10)
      }
    }))
  }, [setProgress])

  const markReview = useCallback((exerciseId) => {
    setProgress(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        known: false,
        reviewCount: (prev[exerciseId]?.reviewCount || 0) + 1,
        lastReviewed: new Date().toISOString().slice(0, 10)
      }
    }))
  }, [setProgress])

  const masteryCount = useMemo(() => {
    return Object.values(progress).filter(p => p.known).length
  }, [progress])

  const masteryPercent = useMemo(() => {
    return UNIQUE_EXERCISE_COUNT > 0 ? (masteryCount / UNIQUE_EXERCISE_COUNT) * 100 : 0
  }, [masteryCount])

  const reviewQueue = useMemo(() => {
    const unique = getUniqueExercises()
    return unique
      .filter(ex => !progress[ex.id]?.known)
      .sort((a, b) => {
        const aCount = progress[a.id]?.reviewCount ?? 0
        const bCount = progress[b.id]?.reviewCount ?? 0
        if (aCount !== bCount) return aCount - bCount
        const aDate = progress[a.id]?.lastReviewed ?? '1970-01-01'
        const bDate = progress[b.id]?.lastReviewed ?? '1970-01-01'
        return aDate.localeCompare(bDate)
      })
  }, [progress])

  const resetProgress = useCallback(() => {
    setProgress({})
  }, [setProgress])

  return {
    progress,
    markKnown,
    markReview,
    masteryCount,
    masteryPercent,
    reviewQueue,
    totalExercises: UNIQUE_EXERCISE_COUNT,
    resetProgress
  }
}
