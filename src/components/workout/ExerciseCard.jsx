import { useState } from 'react'
import SetRow from './SetRow'
import FormTipAccordion from './FormTipAccordion'
import MuscleViewModal from './MuscleViewModal'
import Card from '../common/Card'
import { EXERCISE_MAP } from '../../data/exercises'

export default function ExerciseCard({ exerciseIndex, exercise, onUpdateSet, onToggleSet, onStartTimer, progressionStatus }) {
  const [showMuscles, setShowMuscles] = useState(false)
  const exerciseData = EXERCISE_MAP[exercise.exerciseId]
  const completedCount = exercise.sets.filter(s => s.completed).length
  const allDone = completedCount === exercise.sets.length

  const statusBadge = progressionStatus === 'weight-up'
    ? { label: 'WEIGHT UP ↑', color: 'bg-accent text-black' }
    : progressionStatus === 'push-reps'
    ? { label: 'PUSH REPS', color: 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/40' }
    : null

  return (
    <Card accent={allDone} className={allDone ? 'opacity-80' : ''}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold text-sm">#{exerciseIndex + 1}</span>
            <h3 className="font-header text-lg tracking-wide text-text-primary leading-tight">
              {exercise.exerciseName.toUpperCase()}
            </h3>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="text-xs text-text-secondary">
              Target: {exercise.targetSets} x {exercise.targetMinReps}
              {exercise.targetMaxReps !== exercise.targetMinReps ? `–${exercise.targetMaxReps}` : ''} reps
            </p>
            {statusBadge && (
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${statusBadge.color}`}>
                {statusBadge.label}
              </span>
            )}
          </div>
        </div>
        <span className="text-xs text-text-secondary bg-surface-lighter px-2 py-0.5 rounded-full">
          {completedCount}/{exercise.sets.length}
        </span>
      </div>

      {/* Sets */}
      <div className="space-y-1 mb-3">
        {exercise.sets.map((set, si) => (
          <SetRow
            key={si}
            setIndex={si}
            set={set}
            onUpdate={(field, value) => onUpdateSet(exerciseIndex, si, field, value)}
            onToggle={() => onToggleSet(exerciseIndex, si)}
          />
        ))}
      </div>

      {/* Actions row */}
      <div className="flex items-center gap-3 pt-2 border-t border-surface-lighter">
        <div className="flex gap-2">
          {[60, 90, 120].map(sec => (
            <button
              key={sec}
              onClick={() => onStartTimer(sec)}
              className="px-2.5 py-1 text-xs rounded bg-surface-lighter text-text-secondary hover:text-text-primary transition-colors"
            >
              {sec}s
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3">
          {exerciseData && (
            <FormTipAccordion
              formTips={exerciseData.formTips}
              avoidCues={exerciseData.avoidCues}
            />
          )}
          <button
            onClick={() => setShowMuscles(true)}
            className="text-xs text-text-secondary hover:text-accent transition-colors"
          >
            Muscles
          </button>
        </div>
      </div>

      {exerciseData && (
        <MuscleViewModal
          isOpen={showMuscles}
          onClose={() => setShowMuscles(false)}
          primaryMuscles={exerciseData.primaryMuscles}
          secondaryMuscles={exerciseData.secondaryMuscles}
        />
      )}
    </Card>
  )
}
