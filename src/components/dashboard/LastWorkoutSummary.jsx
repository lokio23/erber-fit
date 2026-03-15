import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { getRelativeDate, formatDuration } from '../../utils/dateUtils'
import { calcSessionTotalVolume } from '../../utils/volumeCalc'
import Card from '../common/Card'
import EmptyState from '../common/EmptyState'

export default function LastWorkoutSummary() {
  const { getLastSession } = useWorkoutLog()
  const last = getLastSession()

  if (!last) {
    return (
      <Card>
        <h3 className="font-header text-lg tracking-wide text-text-secondary mb-2">LAST WORKOUT</h3>
        <EmptyState message="Complete your first workout to see stats here" />
      </Card>
    )
  }

  const completedSets = last.exercises.reduce(
    (sum, ex) => sum + ex.sets.filter(s => s.completed).length, 0
  )
  const totalVolume = calcSessionTotalVolume(last)
  const duration = formatDuration(last.startedAt, last.completedAt)

  return (
    <Card>
      <h3 className="font-header text-lg tracking-wide text-text-secondary mb-3">LAST WORKOUT</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-text-primary font-medium">{last.dayName}</span>
        <span className="text-text-secondary text-xs">{getRelativeDate(last.date)}</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center">
          <p className="font-header text-xl text-accent">{completedSets}</p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Sets</p>
        </div>
        <div className="text-center">
          <p className="font-header text-xl text-accent">{totalVolume.toLocaleString()}</p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Volume (lbs)</p>
        </div>
        <div className="text-center">
          <p className="font-header text-xl text-accent">{duration}</p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Duration</p>
        </div>
      </div>
    </Card>
  )
}
