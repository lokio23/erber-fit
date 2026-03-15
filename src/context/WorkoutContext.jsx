import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'
import { DAYS } from '../data/days'
import { EXERCISE_MAP } from '../data/exercises'
import { getItem, setItem, removeItem } from '../utils/storage'

const WorkoutContext = createContext()

const STORAGE_KEY = 'activeWorkout'

const initialState = {
  isActive: false,
  dayIndex: null,
  dayName: null,
  startedAt: null,
  exercises: []
}

function workoutReducer(state, action) {
  switch (action.type) {
    case 'START_WORKOUT': {
      const { dayIndex, prefillWeights } = action.payload
      const day = DAYS[dayIndex]
      return {
        isActive: true,
        dayIndex,
        dayName: day.name,
        startedAt: new Date().toISOString(),
        exercises: day.exerciseIds.map(id => {
          const ex = EXERCISE_MAP[id]
          return {
            exerciseId: ex.id,
            exerciseName: ex.name,
            targetSets: ex.sets,
            targetMinReps: ex.minReps,
            targetMaxReps: ex.maxReps,
            sets: Array.from({ length: ex.sets }, (_, i) => ({
              weight: prefillWeights?.[ex.id]?.[i] ?? '',
              reps: '',
              completed: false
            }))
          }
        })
      }
    }

    case 'UPDATE_SET': {
      const { exerciseIndex, setIndex, field, value } = action.payload
      const exercises = state.exercises.map((ex, ei) => {
        if (ei !== exerciseIndex) return ex
        return {
          ...ex,
          sets: ex.sets.map((set, si) => {
            if (si !== setIndex) return set
            return { ...set, [field]: value }
          })
        }
      })
      return { ...state, exercises }
    }

    case 'TOGGLE_SET_COMPLETE': {
      const { exerciseIndex, setIndex } = action.payload
      const exercises = state.exercises.map((ex, ei) => {
        if (ei !== exerciseIndex) return ex
        return {
          ...ex,
          sets: ex.sets.map((set, si) => {
            if (si !== setIndex) return set
            return { ...set, completed: !set.completed }
          })
        }
      })
      return { ...state, exercises }
    }

    case 'ABANDON_WORKOUT':
      return { ...initialState }

    default:
      return state
  }
}

export function WorkoutProvider({ children }) {
  const [workoutState, dispatch] = useReducer(workoutReducer, initialState, () => {
    const saved = getItem(STORAGE_KEY, null)
    return saved && saved.isActive ? saved : initialState
  })

  // Persist active workout on every state change
  useEffect(() => {
    if (workoutState.isActive) {
      setItem(STORAGE_KEY, workoutState)
    } else {
      removeItem(STORAGE_KEY)
    }
  }, [workoutState])

  const startWorkout = useCallback((dayIndex, prefillWeights = {}) => {
    dispatch({ type: 'START_WORKOUT', payload: { dayIndex, prefillWeights } })
  }, [])

  const updateSet = useCallback((exerciseIndex, setIndex, field, value) => {
    dispatch({ type: 'UPDATE_SET', payload: { exerciseIndex, setIndex, field, value } })
  }, [])

  const toggleSetComplete = useCallback((exerciseIndex, setIndex) => {
    dispatch({ type: 'TOGGLE_SET_COMPLETE', payload: { exerciseIndex, setIndex } })
  }, [])

  const getCompletedSession = useCallback(() => {
    return {
      id: 'session_' + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      dayIndex: workoutState.dayIndex,
      dayName: workoutState.dayName,
      startedAt: workoutState.startedAt,
      completedAt: new Date().toISOString(),
      exercises: workoutState.exercises.map(ex => ({
        exerciseId: ex.exerciseId,
        sets: ex.sets.map(s => ({
          weight: Number(s.weight) || 0,
          reps: Number(s.reps) || 0,
          completed: s.completed
        }))
      }))
    }
  }, [workoutState])

  const abandonWorkout = useCallback(() => {
    dispatch({ type: 'ABANDON_WORKOUT' })
  }, [])

  return (
    <WorkoutContext.Provider value={{
      workoutState,
      startWorkout,
      updateSet,
      toggleSetComplete,
      getCompletedSession,
      abandonWorkout
    }}>
      {children}
    </WorkoutContext.Provider>
  )
}

export function useWorkout() {
  const context = useContext(WorkoutContext)
  if (!context) throw new Error('useWorkout must be used within WorkoutProvider')
  return context
}
