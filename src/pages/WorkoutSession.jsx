import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useWorkout } from '../context/WorkoutContext'
import { useWorkoutLog } from '../hooks/useWorkoutLog'
import { usePersonalRecords } from '../hooks/usePersonalRecords'
import { useRestTimer } from '../hooks/useRestTimer'
import ExerciseCard from '../components/workout/ExerciseCard'
import RestTimer from '../components/workout/RestTimer'
import WorkoutCompleteModal from '../components/workout/WorkoutCompleteModal'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { getProgressionStatus, shouldIncreaseWeight, suggestedWeightIncrease } from '../utils/progressionCalc'
import { calcSessionTotalVolume } from '../utils/volumeCalc'
import { formatDuration } from '../utils/dateUtils'

export default function WorkoutSession() {
  const navigate = useNavigate()
  const { currentCycleDay, currentDay, advanceCycleDay } = useApp()
  const {
    workoutState,
    startWorkout,
    updateSet,
    toggleSetComplete,
    getCompletedSession,
    abandonWorkout
  } = useWorkout()
  const { saveSession, getLastSessionForDay } = useWorkoutLog()
  const { checkAndUpdatePRs } = usePersonalRecords()
  const restTimer = useRestTimer()

  const [showComplete, setShowComplete] = useState(false)
  const [completedSession, setCompletedSession] = useState(null)
  const [newPRs, setNewPRs] = useState([])
  const [elapsed, setElapsed] = useState('')
  const exerciseRefs = useRef([])

  // Elapsed timer
  useEffect(() => {
    if (!workoutState.isActive || !workoutState.startedAt) return
    const tick = () => setElapsed(formatDuration(workoutState.startedAt, new Date().toISOString()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [workoutState.isActive, workoutState.startedAt])

  // Get last session for challenge banner & progression
  const lastSession = useMemo(() => {
    if (!workoutState.isActive) return getLastSessionForDay(currentCycleDay)
    return getLastSessionForDay(workoutState.dayIndex)
  }, [workoutState.isActive, workoutState.dayIndex, currentCycleDay, getLastSessionForDay])

  const lastSessionVolume = useMemo(() => {
    return lastSession ? calcSessionTotalVolume(lastSession) : 0
  }, [lastSession])

  // Build a map of exerciseId -> last session's exercise entry
  const lastSessionMap = useMemo(() => {
    if (!lastSession) return {}
    const map = {}
    lastSession.exercises.forEach(ex => { map[ex.exerciseId] = ex })
    return map
  }, [lastSession])

  const handleStart = useCallback(() => {
    const last = getLastSessionForDay(currentCycleDay)
    const prefillWeights = {}
    if (last) {
      last.exercises.forEach(ex => {
        const increase = shouldIncreaseWeight(ex, ex.exerciseId)
        const bump = increase ? suggestedWeightIncrease(ex.exerciseId) : 0
        prefillWeights[ex.exerciseId] = ex.sets.map(s => {
          const w = s.weight || 0
          return w > 0 ? w + bump : ''
        })
      })
    }
    startWorkout(currentCycleDay, prefillWeights)
  }, [currentCycleDay, getLastSessionForDay, startWorkout])

  const handleComplete = useCallback(() => {
    const session = getCompletedSession()
    setCompletedSession(session)
    const prs = checkAndUpdatePRs(session)
    setNewPRs(prs)
    setShowComplete(true)
  }, [getCompletedSession, checkAndUpdatePRs])

  const handleSave = useCallback(() => {
    if (completedSession) {
      saveSession(completedSession)
      advanceCycleDay()
      abandonWorkout()
      setShowComplete(false)
      navigate('/')
    }
  }, [completedSession, saveSession, advanceCycleDay, abandonWorkout, navigate])

  const handleAbandon = useCallback(() => {
    if (window.confirm('Abandon this workout? Your progress will be lost.')) {
      abandonWorkout()
    }
  }, [abandonWorkout])

  // Auto-scroll to next exercise when all sets complete
  const handleToggleSet = useCallback((exerciseIndex, setIndex) => {
    toggleSetComplete(exerciseIndex, setIndex)

    // Check if this toggle completes all sets for this exercise
    const exercise = workoutState.exercises[exerciseIndex]
    if (!exercise) return
    const willBeComplete = exercise.sets.every((s, i) =>
      i === setIndex ? !s.completed : s.completed
    )
    if (willBeComplete && exerciseIndex < workoutState.exercises.length - 1) {
      setTimeout(() => {
        exerciseRefs.current[exerciseIndex + 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [toggleSetComplete, workoutState.exercises])

  // Not started state
  if (!workoutState.isActive) {
    return (
      <div>
        <h1 className="font-header text-4xl tracking-wide text-text-primary mb-5">WORKOUT</h1>
        <Card className="text-center py-8">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Today&apos;s Session</p>
          <p className="font-header text-3xl text-text-primary mb-1">
            DAY {currentCycleDay + 1} — {currentDay.name.toUpperCase()}
          </p>
          <p className="text-sm text-text-secondary mb-2">{currentDay.subtitle}</p>
          <p className="text-sm text-text-secondary mb-6">
            {currentDay.exerciseIds.length} exercises
          </p>
          <Button onClick={handleStart} className="text-base px-8 py-3">
            BEGIN WORKOUT
          </Button>
        </Card>
      </div>
    )
  }

  // Active workout
  const totalSets = workoutState.exercises.reduce((s, e) => s + e.sets.length, 0)
  const completedSets = workoutState.exercises.reduce(
    (s, e) => s + e.sets.filter(set => set.completed).length, 0
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="font-header text-3xl tracking-wide text-text-primary">
            {workoutState.dayName?.toUpperCase()}
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-xs text-text-secondary">{completedSets}/{totalSets} sets completed</p>
            {elapsed && (
              <p className="text-xs text-accent font-mono">{elapsed}</p>
            )}
          </div>
        </div>
        <button
          onClick={handleAbandon}
          className="text-xs text-danger hover:text-danger/80 transition-colors"
        >
          Abandon
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-surface-lighter rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${totalSets > 0 ? (completedSets / totalSets) * 100 : 0}%` }}
        />
      </div>

      {/* Challenge banner */}
      {lastSessionVolume > 0 && (
        <div className="bg-accent-glow border border-accent/20 rounded-lg px-3 py-2 mb-4 text-center">
          <p className="text-xs text-text-secondary">
            Last {workoutState.dayName}: <span className="text-accent font-bold">{lastSessionVolume.toLocaleString()} lbs</span>. Beat it!
          </p>
        </div>
      )}

      {/* Exercise cards */}
      <div className="space-y-4">
        {workoutState.exercises.map((exercise, ei) => (
          <div key={exercise.exerciseId} ref={el => exerciseRefs.current[ei] = el}>
            <ExerciseCard
              exerciseIndex={ei}
              exercise={exercise}
              onUpdateSet={updateSet}
              onToggleSet={handleToggleSet}
              onStartTimer={restTimer.startTimer}
              progressionStatus={getProgressionStatus(lastSessionMap[exercise.exerciseId], exercise.exerciseId)}
            />
          </div>
        ))}
      </div>

      {/* Complete button */}
      <div className="mt-6 mb-4">
        <Button
          onClick={handleComplete}
          disabled={completedSets === 0}
          className={`w-full text-base py-3 ${completedSets === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          COMPLETE WORKOUT
        </Button>
      </div>

      {/* Single shared RestTimer overlay */}
      {(restTimer.isRunning || restTimer.timeRemaining > 0) && (
        <RestTimer timer={restTimer} />
      )}

      <WorkoutCompleteModal
        isOpen={showComplete}
        onClose={() => setShowComplete(false)}
        session={completedSession}
        newPRs={newPRs}
        onSave={handleSave}
      />
    </div>
  )
}
