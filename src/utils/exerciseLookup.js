import { EXERCISES, EXERCISE_MAP } from '../data/exercises'

export function getExerciseById(id) {
  return EXERCISE_MAP[id] || null
}

export function getExercisesByDay(dayIndex) {
  return EXERCISES.filter(ex => ex.dayIndices.includes(dayIndex))
}

export function getExercisesByMuscle(muscleId) {
  return EXERCISES.filter(
    ex => ex.primaryMuscles.includes(muscleId) || ex.secondaryMuscles.includes(muscleId)
  )
}

export function getUniqueExercises() {
  const seen = new Set()
  return EXERCISES.filter(ex => {
    if (seen.has(ex.formCoachId)) return false
    seen.add(ex.formCoachId)
    return true
  })
}

export const UNIQUE_EXERCISE_COUNT = getUniqueExercises().length
