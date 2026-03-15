import { MUSCLE_MAP } from '../../data/muscles'
import { muscleToExercises } from '../../data/muscleExerciseMap'
import { DAYS } from '../../data/days'
import Badge from '../common/Badge'
import Modal from '../common/Modal'

export default function MuscleDetailPanel({ muscleId, isOpen, onClose }) {
  if (!muscleId) return null

  const muscle = MUSCLE_MAP[muscleId]
  const exercises = muscleToExercises[muscleId] || []
  const primary = exercises.filter(e => e.isPrimary)
  const secondary = exercises.filter(e => !e.isPrimary)

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={muscle?.name?.toUpperCase()}>
      {muscle?.description && (
        <p className="text-sm text-text-secondary mb-4">{muscle.description}</p>
      )}

      {primary.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider text-accent font-bold mb-2">Primary Exercises</p>
          <div className="space-y-2">
            {primary.map(ex => (
              <div key={ex.exerciseId} className="flex items-center justify-between bg-surface-light rounded-lg px-3 py-2">
                <span className="text-sm text-text-primary">{ex.exerciseName}</span>
                <div className="flex gap-1">
                  {ex.dayIndices.map(di => (
                    <Badge key={di} variant="accent" label={DAYS[di]?.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {secondary.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-2">Secondary Exercises</p>
          <div className="space-y-2">
            {secondary.map(ex => (
              <div key={ex.exerciseId} className="flex items-center justify-between bg-surface-light rounded-lg px-3 py-2">
                <span className="text-sm text-text-secondary">{ex.exerciseName}</span>
                <div className="flex gap-1">
                  {ex.dayIndices.map(di => (
                    <Badge key={di} variant="neutral" label={DAYS[di]?.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Modal>
  )
}
