import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useWorkout } from '../context/WorkoutContext'
import { useWorkoutLog } from '../hooks/useWorkoutLog'
import { usePersonalRecords } from '../hooks/usePersonalRecords'
import ExerciseCard from '../components/workout/ExerciseCard'
import WorkoutCompleteModal from '../components/workout/WorkoutCompleteModal'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { EXERCISE_MAP } from '../data/exercises'

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

  const [showComplete, setShowComplete] = useState(false)
  const [completedSession, setCompletedSession] = useState(null)
  const [newPRs, setNewPRs] = useState([])

  const handleStart = useCallback(() => {
    // Build prefill weights from last session of same day
    const lastSession = getLastSessionForDay(currentCycleDay)
    const prefillWeights = {}
    if (lastSession) {
      lastSession.exercises.forEach(ex => {
        prefillWeights[ex.exerciseId] = ex.sets.map(s => s.weight || '')
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
          <p className="text-xs text-text-secondary">{completedSets}/{totalSets} sets completed</p>
        </div>
        <button
          onClick={handleAbandon}
          className="text-xs text-danger hover:text-danger/80 transition-colors"
        >
          Abandon
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-surface-lighter rounded-full mb-5 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${totalSets > 0 ? (completedSets / totalSets) * 100 : 0}%` }}
        />
      </div>

      {/* Exercise cards */}
      <div className="space-y-4">
        {workoutState.exercises.map((exercise, ei) => (
          <ExerciseCard
            key={exercise.exerciseId}
            exerciseIndex={ei}
            exercise={exercise}
            onUpdateSet={updateSet}
            onToggleSet={toggleSetComplete}
          />
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
