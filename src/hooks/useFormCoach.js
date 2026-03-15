import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getUniqueExercises, UNIQUE_EXERCISE_COUNT } from '../utils/exerciseLookup'

export function useFormCoach() {
  const [progress, setProgress] = useLocalStorage('formCoachProgress', {})

  const markKnown = useCallback((exercise) => {
    const key = exercise.formCoachId || exercise.id
    setProgress(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        known: true,
        reviewCount: (prev[key]?.reviewCount || 0) + 1,
        lastReviewed: new Date().toISOString().slice(0, 10)
      }
    }))
  }, [setProgress])

  const markReview = useCallback((exercise) => {
    const key = exercise.formCoachId || exercise.id
    setProgress(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        known: false,
        reviewCount: (prev[key]?.reviewCount || 0) + 1,
        lastReviewed: new Date().toISOString().slice(0, 10)
      }
    }))
  }, [setProgress])

  const masteryCount = useMemo(() => {
    const unique = getUniqueExercises()
    return unique.filter(ex => progress[ex.formCoachId || ex.id]?.known).length
  }, [progress])

  const masteryPercent = useMemo(() => {
    return UNIQUE_EXERCISE_COUNT > 0 ? (masteryCount / UNIQUE_EXERCISE_COUNT) * 100 : 0
  }, [masteryCount])

  const reviewQueue = useMemo(() => {
    const unique = getUniqueExercises()
    return unique
      .filter(ex => !progress[ex.formCoachId || ex.id]?.known)
      .sort((a, b) => {
        const aKey = a.formCoachId || a.id
        const bKey = b.formCoachId || b.id
        const aCount = progress[aKey]?.reviewCount ?? 0
        const bCount = progress[bKey]?.reviewCount ?? 0
        if (aCount !== bCount) return aCount - bCount
        const aDate = progress[aKey]?.lastReviewed ?? '1970-01-01'
        const bDate = progress[bKey]?.lastReviewed ?? '1970-01-01'
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
