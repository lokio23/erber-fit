import { useState, useCallback, useMemo } from 'react'
import BodySvgFront from '../components/muscleMap/BodySvgFront'
import BodySvgBack from '../components/muscleMap/BodySvgBack'
import MuscleDetailPanel from '../components/muscleMap/MuscleDetailPanel'
import { muscleToExercises } from '../data/muscleExerciseMap'
import { useWorkoutLog } from '../hooks/useWorkoutLog'
import { getMuscleRecoveryStatus } from '../utils/muscleVolumeCalc'

export default function MuscleMap() {
  const [view, setView] = useState('front')
  const [mode, setMode] = useState('explore')
  const [selectedMuscle, setSelectedMuscle] = useState(null)
  const { log } = useWorkoutLog()

  const recovery = useMemo(() => getMuscleRecoveryStatus(log), [log])

  const handleMuscleClick = useCallback((muscleId) => {
    setSelectedMuscle(prev => prev === muscleId ? null : muscleId)
  }, [])

  const getMuscleColor = useCallback((muscleId) => {
    if (mode === 'recovery') {
      return recovery[muscleId]?.color || '#2a2a2a'
    }

    if (!selectedMuscle) return '#2a2a2a'
    if (muscleId === selectedMuscle) return '#39FF14'

    const selectedExercises = muscleToExercises[selectedMuscle] || []
    const thisMuscleExercises = muscleToExercises[muscleId] || []
    const shared = selectedExercises.some(se =>
      thisMuscleExercises.some(te => te.exerciseName === se.exerciseName)
    )
    if (shared) return '#1a8a0a'
    return '#2a2a2a'
  }, [selectedMuscle, mode, recovery])

  return (
    <div>
      <h1 className="font-header text-4xl tracking-wide text-text-primary mb-4">MUSCLE MAP</h1>
      <p className="text-xs text-text-secondary mb-4">
        {mode === 'explore' ? 'Tap a muscle group to see exercises' : 'Muscle recovery since last workout'}
      </p>

      {/* Mode toggle */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => { setMode('explore'); setSelectedMuscle(null) }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            mode === 'explore' ? 'bg-accent text-black' : 'bg-surface-lighter text-text-secondary'
          }`}
        >
          Explore
        </button>
        <button
          onClick={() => { setMode('recovery'); setSelectedMuscle(null) }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            mode === 'recovery' ? 'bg-accent text-black' : 'bg-surface-lighter text-text-secondary'
          }`}
        >
          Recovery
        </button>
      </div>

      {/* View toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => { setView('front'); setSelectedMuscle(null) }}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${
            view === 'front' ? 'bg-accent text-black' : 'bg-surface-light text-text-secondary'
          }`}
        >
          FRONT
        </button>
        <button
          onClick={() => { setView('back'); setSelectedMuscle(null) }}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${
            view === 'back' ? 'bg-accent text-black' : 'bg-surface-light text-text-secondary'
          }`}
        >
          BACK
        </button>
      </div>

      {/* SVG body */}
      <div className="bg-surface rounded-xl border border-surface-lighter p-4">
        {view === 'front' ? (
          <BodySvgFront
            selectedMuscle={selectedMuscle}
            onMuscleClick={handleMuscleClick}
            getMuscleColor={getMuscleColor}
          />
        ) : (
          <BodySvgBack
            selectedMuscle={selectedMuscle}
            onMuscleClick={handleMuscleClick}
            getMuscleColor={getMuscleColor}
          />
        )}
      </div>

      {/* Legend */}
      {mode === 'explore' ? (
        <div className="mt-3 flex items-center gap-4 justify-center text-[10px] text-text-secondary">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-accent" />
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-accent-dim" />
            <span>Related</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-surface-light" />
            <span>Inactive</span>
          </div>
        </div>
      ) : (
        <div className="mt-3 flex items-center gap-4 justify-center text-[10px] text-text-secondary">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-[#ff4444]" />
            <span>Just trained</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-[#FFD700]" />
            <span>Recovering</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-accent" />
            <span>Ready</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-surface-light" />
            <span>No data</span>
          </div>
        </div>
      )}

      <MuscleDetailPanel
        muscleId={selectedMuscle}
        isOpen={!!selectedMuscle}
        onClose={() => setSelectedMuscle(null)}
      />
    </div>
  )
}
