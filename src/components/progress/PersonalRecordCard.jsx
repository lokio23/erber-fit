import Card from '../common/Card'
import { formatDateShort } from '../../utils/dateUtils'

export default function PersonalRecordCard({ record, exerciseName }) {
  if (!record) {
    return (
      <Card className="mb-4">
        <h3 className="font-header text-base tracking-wide text-text-secondary mb-2">PERSONAL RECORDS</h3>
        <p className="text-sm text-text-secondary text-center py-4">No records yet — start lifting!</p>
      </Card>
    )
  }

  return (
    <Card accent className="mb-4">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">PERSONAL RECORDS</h3>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-surface-light rounded-lg p-3 text-center">
          <p className="font-header text-2xl text-accent">{record.maxWeight}</p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Max Weight</p>
          {record.maxWeightDate && (
            <p className="text-[10px] text-text-secondary mt-1">{formatDateShort(record.maxWeightDate)}</p>
          )}
        </div>
        <div className="bg-surface-light rounded-lg p-3 text-center">
          <p className="font-header text-2xl text-accent">{record.maxVolume?.toLocaleString()}</p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Max Volume</p>
          {record.maxVolumeDate && (
            <p className="text-[10px] text-text-secondary mt-1">{formatDateShort(record.maxVolumeDate)}</p>
          )}
        </div>
        <div className="bg-surface-light rounded-lg p-3 text-center">
          <p className="font-header text-2xl text-accent">{record.estimatedMax || '—'}</p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Est. 1RM</p>
          {record.estimatedMaxDate && (
            <p className="text-[10px] text-text-secondary mt-1">{formatDateShort(record.estimatedMaxDate)}</p>
          )}
        </div>
      </div>
    </Card>
  )
}
