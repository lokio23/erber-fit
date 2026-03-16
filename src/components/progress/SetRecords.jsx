import Card from '../common/Card'
import { getSetRecords } from '../../utils/volumeCalc'
import { formatDateShort } from '../../utils/dateUtils'

export default function SetRecords({ exerciseId, log }) {
  const records = getSetRecords(log, exerciseId)

  if (records.length === 0) return null

  const maxWeight = Math.max(...records.map(r => r.weight))

  return (
    <Card className="mb-4">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">SET RECORDS</h3>
      <div className="space-y-0">
        <div className="flex items-center text-[10px] text-text-secondary uppercase tracking-wider pb-2 border-b border-surface-lighter">
          <span className="w-16">Reps</span>
          <span className="flex-1">Best Weight</span>
          <span className="w-20 text-right">Date</span>
        </div>
        {records.map(record => (
          <div
            key={record.reps}
            className={`flex items-center py-2 border-b border-surface-lighter/50 ${
              record.weight === maxWeight ? 'text-accent' : 'text-text-primary'
            }`}
          >
            <span className="w-16 font-header text-lg">{record.reps}</span>
            <span className="flex-1 font-header text-lg">
              {record.weight} <span className="text-xs text-text-secondary font-normal">lbs</span>
            </span>
            <span className="w-20 text-right text-xs text-text-secondary">
              {formatDateShort(record.date)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
