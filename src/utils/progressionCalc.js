import { EXERCISE_MAP } from '../data/exercises'

/**
 * Double progression: increase reps within range first, only add weight
 * when all sets hit the top of the rep range.
 */

export function shouldIncreaseWeight(lastExerciseEntry, exerciseId) {
  const exercise = EXERCISE_MAP[exerciseId]
  if (!exercise || !lastExerciseEntry) return false

  const completedSets = lastExerciseEntry.sets.filter(s => s.completed && s.reps > 0)
  if (completedSets.length === 0) return false

  // All completed sets hit the top of the rep range
  return completedSets.every(s => s.reps >= exercise.maxReps)
}

export function suggestedWeightIncrease(exerciseId) {
  const exercise = EXERCISE_MAP[exerciseId]
  if (!exercise) return 5

  // Isolation exercises (single primary muscle, small movements) = 2.5 lb
  // Compound exercises (multiple primary muscles or large movements) = 5 lb
  const isIsolation = exercise.primaryMuscles.length === 1 &&
    exercise.secondaryMuscles.length <= 1
  return isIsolation ? 2.5 : 5
}

export function getProgressionStatus(lastExerciseEntry, exerciseId) {
  if (!lastExerciseEntry) return null

  const exercise = EXERCISE_MAP[exerciseId]
  if (!exercise) return null

  const completedSets = lastExerciseEntry.sets.filter(s => s.completed && s.reps > 0)
  if (completedSets.length === 0) return null

  const allMaxed = completedSets.every(s => s.reps >= exercise.maxReps)
  const someMaxed = completedSets.some(s => s.reps >= exercise.maxReps)

  if (allMaxed) return 'weight-up'
  if (someMaxed) return 'push-reps'
  return null
}

export function calcEstimated1RM(weight, reps) {
  if (!weight || !reps || reps <= 0) return 0
  if (reps === 1) return weight
  // Epley formula
  return Math.round(weight * (1 + reps / 30))
}
