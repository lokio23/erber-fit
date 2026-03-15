import Modal from '../common/Modal'
import Badge from '../common/Badge'
import ExerciseIllustration from '../exerciseIllustrations'
import { MUSCLE_MAP } from '../../data/muscles'

export default function ExerciseImageModal({ isOpen, onClose, exercise }) {
  if (!exercise) return null
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={exercise.name.toUpperCase()}>
      <div className="flex justify-center py-4">
        <div className="bg-surface-light rounded-xl p-4 border border-surface-lighter">
          <ExerciseIllustration exerciseId={exercise.formCoachId} size="lg" />
        </div>
      </div>
      {exercise.primaryMuscles.length > 0 && (
        <div className="mb-3">
          <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-2">Primary</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {exercise.primaryMuscles.map(id => (
              <Badge key={id} variant="accent" label={MUSCLE_MAP[id]?.name || id} />
            ))}
          </div>
        </div>
      )}
      {exercise.secondaryMuscles.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-2">Secondary</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {exercise.secondaryMuscles.map(id => (
              <Badge key={id} variant="dim" label={MUSCLE_MAP[id]?.name || id} />
            ))}
          </div>
        </div>
      )}
    </Modal>
  )
}
