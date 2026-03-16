import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { calcEstimated1RM } from '../utils/progressionCalc'

export function usePersonalRecords() {
  const [records, setRecords] = useLocalStorage('personalRecords', {})

  const getRecord = useCallback((exerciseId) => {
    return records[exerciseId] || null
  }, [records])

  const checkAndUpdatePRs = useCallback((session) => {
    const newPRs = []
    const updated = { ...records }

    session.exercises.forEach(exerciseEntry => {
      const completedSets = exerciseEntry.sets.filter(s => s.completed && s.weight && s.reps)
      if (completedSets.length === 0) return

      const maxWeight = Math.max(...completedSets.map(s => s.weight))
      const sessionVolume = completedSets.reduce((sum, s) => sum + s.weight * s.reps, 0)
      const bestE1RM = Math.max(...completedSets.map(s => calcEstimated1RM(s.weight, s.reps)))

      const existing = updated[exerciseEntry.exerciseId] || { maxWeight: 0, maxVolume: 0, estimatedMax: 0 }
      let changed = false

      if (maxWeight > existing.maxWeight) {
        existing.maxWeight = maxWeight
        existing.maxWeightDate = session.date
        changed = true
        newPRs.push({ exerciseId: exerciseEntry.exerciseId, type: 'weight', value: maxWeight })
      }
      if (sessionVolume > existing.maxVolume) {
        existing.maxVolume = sessionVolume
        existing.maxVolumeDate = session.date
        changed = true
        newPRs.push({ exerciseId: exerciseEntry.exerciseId, type: 'volume', value: sessionVolume })
      }
      if (bestE1RM > (existing.estimatedMax || 0)) {
        existing.estimatedMax = bestE1RM
        existing.estimatedMaxDate = session.date
        changed = true
      }
      if (changed) {
        updated[exerciseEntry.exerciseId] = { ...existing }
      }
    })

    setRecords(updated)
    return newPRs
  }, [records, setRecords])

  const checkSetPR = useCallback((exerciseId, weight, reps) => {
    if (!weight || !reps) return { isWeightPR: false, is1RMPR: false }
    const existing = records[exerciseId] || { maxWeight: 0, estimatedMax: 0 }
    const e1rm = calcEstimated1RM(weight, reps)
    return {
      isWeightPR: weight > existing.maxWeight,
      is1RMPR: e1rm > (existing.estimatedMax || 0)
    }
  }, [records])

  return { records, getRecord, checkAndUpdatePRs, checkSetPR }
}
