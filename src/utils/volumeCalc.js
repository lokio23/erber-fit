export function calcSetVolume(set) {
  if (!set.completed || !set.weight || !set.reps) return 0
  return set.weight * set.reps
}

export function calcExerciseSessionVolume(exerciseEntry) {
  return exerciseEntry.sets.reduce((sum, set) => sum + calcSetVolume(set), 0)
}

export function calcSessionTotalVolume(session) {
  return session.exercises.reduce(
    (sum, ex) => sum + calcExerciseSessionVolume(ex), 0
  )
}

export function getWeightProgressionData(workoutLog, exerciseId) {
  return workoutLog
    .filter(session => session.exercises.some(ex => ex.exerciseId === exerciseId))
    .map(session => {
      const entry = session.exercises.find(ex => ex.exerciseId === exerciseId)
      const completedSets = entry.sets.filter(s => s.completed && s.weight)
      const maxWeight = completedSets.length > 0
        ? Math.max(...completedSets.map(s => s.weight))
        : 0
      return { date: session.date, maxWeight }
    })
    .filter(d => d.maxWeight > 0)
}

export function getWeeklyVolumeData(workoutLog, exerciseId) {
  const weekMap = {}

  workoutLog.forEach(session => {
    const entry = session.exercises.find(ex => ex.exerciseId === exerciseId)
    if (!entry) return
    const volume = calcExerciseSessionVolume(entry)
    if (volume === 0) return

    // Simple week key based on date
    const d = new Date(session.date + 'T00:00:00')
    const day = d.getDay()
    const diff = d.getDate() - day + (day === 0 ? -6 : 1)
    const weekStart = new Date(d)
    weekStart.setDate(diff)
    const weekKey = weekStart.toISOString().slice(0, 10)

    if (!weekMap[weekKey]) weekMap[weekKey] = 0
    weekMap[weekKey] += volume
  })

  return Object.entries(weekMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([week, volume]) => {
      const d = new Date(week + 'T00:00:00')
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      return { week, weekLabel: label, volume }
    })
}

// Best weight per rep count for an exercise
export function getSetRecords(workoutLog, exerciseId) {
  const records = {} // { reps: { weight, date } }

  workoutLog.forEach(session => {
    const entry = session.exercises.find(ex => ex.exerciseId === exerciseId)
    if (!entry) return

    entry.sets.forEach(set => {
      if (!set.completed || !set.weight || !set.reps) return
      const reps = Number(set.reps)
      const weight = Number(set.weight)
      if (!records[reps] || weight > records[reps].weight) {
        records[reps] = { weight, date: session.date }
      }
    })
  })

  return Object.entries(records)
    .map(([reps, data]) => ({ reps: Number(reps), weight: data.weight, date: data.date }))
    .sort((a, b) => a.reps - b.reps)
}
