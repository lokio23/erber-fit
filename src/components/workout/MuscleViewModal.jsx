import Modal from '../common/Modal'
import Badge from '../common/Badge'
import { MUSCLE_MAP } from '../../data/muscles'

export default function MuscleViewModal({ isOpen, onClose, primaryMuscles = [], secondaryMuscles = [] }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="TARGET MUSCLES">
      {primaryMuscles.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-2">Primary</p>
          <div className="flex flex-wrap gap-2">
            {primaryMuscles.map(id => (
              <Badge key={id} variant="accent" label={MUSCLE_MAP[id]?.name || id} />
            ))}
          </div>
        </div>
      )}
      {secondaryMuscles.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-2">Secondary</p>
          <div className="flex flex-wrap gap-2">
            {secondaryMuscles.map(id => (
              <Badge key={id} variant="dim" label={MUSCLE_MAP[id]?.name || id} />
            ))}
          </div>
        </div>
      )}
    </Modal>
  )
}
