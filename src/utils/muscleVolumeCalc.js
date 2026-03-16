import { EXERCISE_MAP } from '../data/exercises'
import { MUSCLES } from '../data/muscles'
import { getWeekStart, formatDateISO, formatDateShort } from './dateUtils'
import { calcSessionTotalVolume } from './volumeCalc'

// Weekly set targets per muscle from the program (MAV ranges)
export const MUSCLE_TARGETS = {
  chest: { target: 10, label: 'Chest' },
  lats: { target: 11, label: 'Lats' },
  quads: { target: 10, label: 'Quads' },
  hamstrings: { target: 7, label: 'Hamstrings' },
  glutes: { target: 14, label: 'Glutes' },
  calves: { target: 14, label: 'Calves' },
  abs: { target: 18, label: 'Abs' },
  obliques: { target: 9, label: 'Obliques' },
  'side-delts': { target: 7, label: 'Side Delts' },
  'rear-delts': { target: 6, label: 'Rear Delts' },
  triceps: { target: 6, label: 'Triceps' },
  biceps: { target: 6, label: 'Biceps' },
  'traps-rhomboids': { target: 3, label: 'Traps' },
  'front-delts': { target: 0, label: 'Front Delts' },
  forearms: { target: 0, label: 'Forearms' }
}

export const PUSH_MUSCLES = ['chest', 'front-delts', 'side-delts', 'triceps']
export const PULL_MUSCLES = ['lats', 'rear-delts', 'biceps', 'traps-rhomboids']
export const UPPER_MUSCLES = [...PUSH_MUSCLES, ...PULL_MUSCLES]
export const LOWER_MUSCLES = ['quads', 'hamstrings', 'glutes', 'calves']

// Count completed sets per primary muscle for a given week
export function getMuscleSetsForWeek(workoutLog, weekStartISO) {
  const muscleSets = {}

  workoutLog.forEach(session => {
    if (getWeekStart(session.date) !== weekStartISO) return

    session.exercises.forEach(entry => {
      const exercise = EXERCISE_MAP[entry.exerciseId]
      if (!exercise) return

      const completedSets = entry.sets.filter(s => s.completed).length

      exercise.primaryMuscles.forEach(muscleId => {
        muscleSets[muscleId] = (muscleSets[muscleId] || 0) + completedSets
      })
    })
  })

  return muscleSets
}

// Sum weight*reps per primary muscle for a given week
export function getMuscleVolumeForWeek(workoutLog, weekStartISO) {
  const muscleVolume = {}

  workoutLog.forEach(session => {
    if (getWeekStart(session.date) !== weekStartISO) return

    session.exercises.forEach(entry => {
      const exercise = EXERCISE_MAP[entry.exerciseId]
      if (!exercise) return

      const volume = entry.sets
        .filter(s => s.completed && s.weight && s.reps)
        .reduce((sum, s) => sum + s.weight * s.reps, 0)

      exercise.primaryMuscles.forEach(muscleId => {
        muscleVolume[muscleId] = (muscleVolume[muscleId] || 0) + volume
      })
    })
  })

  return muscleVolume
}

// Weekly sets per muscle across all weeks (for multi-line chart)
export function getMuscleSetsOverTime(workoutLog, muscleIds) {
  const weekMap = {}

  workoutLog.forEach(session => {
    const weekStart = getWeekStart(session.date)
    if (!weekMap[weekStart]) weekMap[weekStart] = {}

    session.exercises.forEach(entry => {
      const exercise = EXERCISE_MAP[entry.exerciseId]
      if (!exercise) return

      const completedSets = entry.sets.filter(s => s.completed).length

      exercise.primaryMuscles.forEach(muscleId => {
        if (muscleIds.includes(muscleId)) {
          weekMap[weekStart][muscleId] = (weekMap[weekStart][muscleId] || 0) + completedSets
        }
      })
    })
  })

  return Object.entries(weekMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([weekStart, muscles]) => ({
      weekStart,
      weekLabel: formatDateShort(weekStart),
      ...Object.fromEntries(muscleIds.map(id => [id, muscles[id] || 0]))
    }))
}

// Total volume across ALL exercises per week
export function getTotalWeeklyVolume(workoutLog) {
  const weekMap = {}

  workoutLog.forEach(session => {
    const weekStart = getWeekStart(session.date)
    const vol = calcSessionTotalVolume(session)
    weekMap[weekStart] = (weekMap[weekStart] || 0) + vol
  })

  return Object.entries(weekMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([weekStart, volume]) => ({
      weekStart,
      weekLabel: formatDateShort(weekStart),
      volume
    }))
}

// This week vs last week + this month vs last month
export function getPeriodComparison(workoutLog) {
  const today = new Date()
  const todayISO = formatDateISO(today)
  const thisWeekStart = getWeekStart(todayISO)

  const lastWeekDate = new Date(today)
  lastWeekDate.setDate(lastWeekDate.getDate() - 7)
  const lastWeekStart = getWeekStart(formatDateISO(lastWeekDate))

  const thisMonthStart = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-01`
  const lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastMonthStart = formatDateISO(lastMonthDate)
  const lastMonthEnd = formatDateISO(new Date(today.getFullYear(), today.getMonth(), 0))

  function calcStats(sessions) {
    return {
      totalVolume: sessions.reduce((sum, s) => sum + calcSessionTotalVolume(s), 0),
      sessionCount: sessions.length,
      totalSets: sessions.reduce((sum, s) =>
        sum + s.exercises.reduce((eSum, ex) =>
          eSum + ex.sets.filter(set => set.completed).length, 0), 0),
    }
  }

  return {
    week: {
      current: calcStats(workoutLog.filter(s => getWeekStart(s.date) === thisWeekStart)),
      previous: calcStats(workoutLog.filter(s => getWeekStart(s.date) === lastWeekStart)),
    },
    month: {
      current: calcStats(workoutLog.filter(s => s.date >= thisMonthStart && s.date <= todayISO)),
      previous: calcStats(workoutLog.filter(s => s.date >= lastMonthStart && s.date <= lastMonthEnd)),
    }
  }
}

// Muscle recovery status: days since each muscle was last trained
export function getMuscleRecoveryStatus(workoutLog) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const recovery = {}

  // Initialize all muscles
  MUSCLES.forEach(m => {
    recovery[m.id] = { daysSinceTrained: null, color: '#2a2a2a' }
  })

  // Iterate backwards to find most recent session per muscle
  const lastTrained = {}
  for (let i = workoutLog.length - 1; i >= 0; i--) {
    const session = workoutLog[i]
    session.exercises.forEach(entry => {
      const exercise = EXERCISE_MAP[entry.exerciseId]
      if (!exercise) return
      const hasSets = entry.sets.some(s => s.completed)
      if (!hasSets) return
      exercise.primaryMuscles.forEach(muscleId => {
        if (!lastTrained[muscleId]) lastTrained[muscleId] = session.date
      })
    })
  }

  Object.entries(lastTrained).forEach(([muscleId, dateStr]) => {
    const d = new Date(dateStr + 'T00:00:00')
    const days = Math.round((today - d) / (1000 * 60 * 60 * 24))
    let color = '#39FF14'  // 4+ days = fresh/ready
    if (days <= 1) color = '#ff4444'       // just trained
    else if (days <= 3) color = '#FFD700'  // recovering
    recovery[muscleId] = { daysSinceTrained: days, color }
  })

  return recovery
}

// Monthly report: aggregate stats for current and previous month
export function getMonthlyReport(workoutLog, personalRecords) {
  const today = new Date()
  const todayISO = formatDateISO(today)

  const thisMonthStart = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-01`
  const lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastMonthStart = formatDateISO(lastMonthDate)
  const lastMonthEnd = formatDateISO(new Date(today.getFullYear(), today.getMonth(), 0))

  const thisMonthSessions = workoutLog.filter(s => s.date >= thisMonthStart && s.date <= todayISO)
  const lastMonthSessions = workoutLog.filter(s => s.date >= lastMonthStart && s.date <= lastMonthEnd)

  function calcMonthStats(sessions) {
    const totalVolume = sessions.reduce((sum, s) => sum + calcSessionTotalVolume(s), 0)
    const totalSets = sessions.reduce((sum, s) =>
      sum + s.exercises.reduce((eSum, ex) =>
        eSum + ex.sets.filter(set => set.completed).length, 0), 0)

    // Average duration
    let totalMs = 0
    let durationCount = 0
    sessions.forEach(s => {
      if (s.startedAt && s.completedAt) {
        totalMs += new Date(s.completedAt) - new Date(s.startedAt)
        durationCount++
      }
    })
    const avgDurationMin = durationCount > 0 ? Math.round(totalMs / durationCount / 60000) : 0

    // Most trained muscle
    const muscleSets = {}
    sessions.forEach(session => {
      session.exercises.forEach(entry => {
        const exercise = EXERCISE_MAP[entry.exerciseId]
        if (!exercise) return
        const completed = entry.sets.filter(s => s.completed).length
        exercise.primaryMuscles.forEach(id => {
          muscleSets[id] = (muscleSets[id] || 0) + completed
        })
      })
    })
    const topMuscle = Object.entries(muscleSets).sort((a, b) => b[1] - a[1])[0]

    return {
      workouts: sessions.length,
      totalVolume,
      totalSets,
      avgDurationMin,
      topMuscle: topMuscle ? { id: topMuscle[0], sets: topMuscle[1] } : null
    }
  }

  // Count PRs this month
  let thisMonthPRs = 0
  if (personalRecords) {
    Object.values(personalRecords).forEach(rec => {
      if (rec.maxWeightDate && rec.maxWeightDate >= thisMonthStart && rec.maxWeightDate <= todayISO) thisMonthPRs++
      if (rec.maxVolumeDate && rec.maxVolumeDate >= thisMonthStart && rec.maxVolumeDate <= todayISO) thisMonthPRs++
    })
  }

  let lastMonthPRs = 0
  if (personalRecords) {
    Object.values(personalRecords).forEach(rec => {
      if (rec.maxWeightDate && rec.maxWeightDate >= lastMonthStart && rec.maxWeightDate <= lastMonthEnd) lastMonthPRs++
      if (rec.maxVolumeDate && rec.maxVolumeDate >= lastMonthStart && rec.maxVolumeDate <= lastMonthEnd) lastMonthPRs++
    })
  }

  return {
    current: { ...calcMonthStats(thisMonthSessions), prs: thisMonthPRs },
    previous: { ...calcMonthStats(lastMonthSessions), prs: lastMonthPRs }
  }
}
