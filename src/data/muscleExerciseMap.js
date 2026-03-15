import { EXERCISES } from './exercises'

// Build at import time — runs once
export const muscleToExercises = {}

EXERCISES.forEach(exercise => {
  exercise.primaryMuscles.forEach(muscleId => {
    if (!muscleToExercises[muscleId]) muscleToExercises[muscleId] = []
    const alreadyListed = muscleToExercises[muscleId].some(
      entry => entry.exerciseName === exercise.name && entry.isPrimary
    )
    if (!alreadyListed) {
      muscleToExercises[muscleId].push({
        exerciseId: exercise.id,
        exerciseName: exercise.name,
        isPrimary: true,
        dayIndices: exercise.dayIndices
      })
    }
  })

  exercise.secondaryMuscles.forEach(muscleId => {
    if (!muscleToExercises[muscleId]) muscleToExercises[muscleId] = []
    const alreadyListed = muscleToExercises[muscleId].some(
      entry => entry.exerciseName === exercise.name && !entry.isPrimary
    )
    if (!alreadyListed) {
      muscleToExercises[muscleId].push({
        exerciseId: exercise.id,
        exerciseName: exercise.name,
        isPrimary: false,
        dayIndices: exercise.dayIndices
      })
    }
  })
})
