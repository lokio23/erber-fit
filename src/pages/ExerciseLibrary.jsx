import { useState, useMemo, useCallback } from 'react'
import { EXERCISES } from '../data/exercises'
import SearchBar from '../components/library/SearchBar'
import FilterChips from '../components/library/FilterChips'
import ExerciseListItem from '../components/library/ExerciseListItem'

export default function ExerciseLibrary() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDays, setActiveDays] = useState([])
  const [activeMuscles, setActiveMuscles] = useState([])

  const toggleDay = useCallback((dayIndex) => {
    setActiveDays(prev =>
      prev.includes(dayIndex) ? prev.filter(d => d !== dayIndex) : [...prev, dayIndex]
    )
  }, [])

  const toggleMuscle = useCallback((muscleId) => {
    setActiveMuscles(prev =>
      prev.includes(muscleId) ? prev.filter(m => m !== muscleId) : [...prev, muscleId]
    )
  }, [])

  const filteredExercises = useMemo(() => {
    let result = EXERCISES

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(ex => ex.name.toLowerCase().includes(q))
    }

    if (activeDays.length > 0) {
      result = result.filter(ex =>
        ex.dayIndices.some(d => activeDays.includes(d))
      )
    }

    if (activeMuscles.length > 0) {
      result = result.filter(ex =>
        [...ex.primaryMuscles, ...ex.secondaryMuscles].some(m =>
          activeMuscles.includes(m)
        )
      )
    }

    // Deduplicate by name
    const seen = new Set()
    return result.filter(ex => {
      if (seen.has(ex.name)) return false
      seen.add(ex.name)
      return true
    })
  }, [searchQuery, activeDays, activeMuscles])

  return (
    <div>
      <h1 className="font-header text-4xl tracking-wide text-text-primary mb-4">EXERCISE LIBRARY</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <FilterChips
        activeDays={activeDays}
        activeMuscles={activeMuscles}
        onToggleDay={toggleDay}
        onToggleMuscle={toggleMuscle}
      />
      <p className="text-xs text-text-secondary mb-3">{filteredExercises.length} exercises</p>
      <div className="space-y-3">
        {filteredExercises.map(ex => (
          <ExerciseListItem key={ex.id} exercise={ex} />
        ))}
      </div>
    </div>
  )
}
