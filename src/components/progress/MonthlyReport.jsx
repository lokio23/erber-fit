import Card from '../common/Card'
import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { usePersonalRecords } from '../../hooks/usePersonalRecords'
import { getMonthlyReport, MUSCLE_TARGETS } from '../../utils/muscleVolumeCalc'

function Stat({ label, value, prevValue, format = v => v }) {
  const pct = prevValue > 0
    ? ((value - prevValue) / prevValue * 100).toFixed(0)
    : null
  const isPositive = Number(pct) >= 0

  return (
    <div className="text-center">
      <p className="font-header text-2xl text-text-primary">{format(value)}</p>
      <p className="text-[10px] text-text-secondary uppercase tracking-wider">{label}</p>
      {pct !== null && (
        <p className={`text-[10px] font-bold ${isPositive ? 'text-accent' : 'text-danger'}`}>
          {isPositive ? '+' : ''}{pct}%
        </p>
      )}
    </div>
  )
}

export default function MonthlyReport() {
  const { log } = useWorkoutLog()
  const { records } = usePersonalRecords()
  const report = getMonthlyReport(log, records)
  const { current, previous } = report

  const monthName = new Date().toLocaleDateString('en-US', { month: 'long' })
  const topMuscleName = current.topMuscle
    ? (MUSCLE_TARGETS[current.topMuscle.id]?.label || current.topMuscle.id)
    : null

  return (
    <Card className="mb-4" accent>
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-1">
        {monthName.toUpperCase()} REPORT
      </h3>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <Stat label="Workouts" value={current.workouts} prevValue={previous.workouts} />
        <Stat label="Volume" value={current.totalVolume} prevValue={previous.totalVolume} format={v => `${(v / 1000).toFixed(1)}k`} />
        <Stat label="PRs" value={current.prs} prevValue={previous.prs} />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Stat label="Sets" value={current.totalSets} prevValue={previous.totalSets} />
        <Stat
          label="Avg Duration"
          value={current.avgDurationMin}
          prevValue={previous.avgDurationMin}
          format={v => v > 0 ? `${v}m` : '—'}
        />
        <div className="text-center">
          <p className="font-header text-2xl text-text-primary">
            {topMuscleName || '—'}
          </p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Top Muscle</p>
        </div>
      </div>
    </Card>
  )
}
