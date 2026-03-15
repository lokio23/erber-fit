import { useEffect } from 'react'
import Modal from '../common/Modal'
import Button from '../common/Button'
import Badge from '../common/Badge'
import { calcSessionTotalVolume } from '../../utils/volumeCalc'
import { formatDuration } from '../../utils/dateUtils'
import { EXERCISE_MAP } from '../../data/exercises'
import { fireConfetti } from '../../utils/confetti'

export default function WorkoutCompleteModal({ isOpen, onClose, session, newPRs = [], onSave }) {
  useEffect(() => {
    if (isOpen && newPRs.length > 0) {
      fireConfetti()
    }
  }, [isOpen, newPRs.length])

  if (!session) return null

  const totalSets = session.exercises.reduce(
    (sum, ex) => sum + ex.sets.filter(s => s.completed).length, 0
  )
  const totalVolume = calcSessionTotalVolume(session)
  const duration = formatDuration(session.startedAt, session.completedAt)

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="WORKOUT COMPLETE">
      <div className="space-y-5">
        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center bg-surface-light rounded-lg p-3">
            <p className="font-header text-2xl text-accent">{totalSets}</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider">Sets</p>
          </div>
          <div className="text-center bg-surface-light rounded-lg p-3">
            <p className="font-header text-2xl text-accent">{totalVolume.toLocaleString()}</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider">Volume</p>
          </div>
          <div className="text-center bg-surface-light rounded-lg p-3">
            <p className="font-header text-2xl text-accent">{duration}</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider">Duration</p>
          </div>
        </div>

        {/* New PRs */}
        {newPRs.length > 0 && (
          <div className="bg-accent-glow border border-accent/30 rounded-lg p-3">
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">New Personal Records!</p>
            <div className="space-y-1.5">
              {newPRs.map((pr, i) => {
                const exName = EXERCISE_MAP[pr.exerciseId]?.name || pr.exerciseId
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Badge variant="accent" label={pr.type === 'weight' ? 'MAX WEIGHT' : 'MAX VOLUME'} />
                    <span className="text-sm text-text-primary">{exName}</span>
                    <span className="text-sm text-accent font-bold ml-auto">
                      {pr.type === 'weight' ? `${pr.value} lbs` : `${pr.value.toLocaleString()} vol`}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <Button onClick={onSave} className="w-full text-base py-3">
          SAVE & FINISH
        </Button>
      </div>
    </Modal>
  )
}
