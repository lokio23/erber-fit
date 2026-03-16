import Card from '../common/Card'
import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { getPeriodComparison } from '../../utils/muscleVolumeCalc'

function StatRow({ label, current, previous, format = v => v }) {
  const pctChange = previous > 0
    ? ((current - previous) / previous * 100).toFixed(1)
    : null
  const isPositive = Number(pctChange) >= 0

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[10px] text-text-secondary uppercase tracking-wider">{label}</p>
        <p className="font-header text-xl text-text-primary">{format(current)}</p>
      </div>
      {pctChange !== null && (
        <span className={`text-sm font-bold ${isPositive ? 'text-accent' : 'text-danger'}`}>
          {isPositive ? '+' : ''}{pctChange}%
        </span>
      )}
    </div>
  )
}

function ComparisonCard({ title, current, previous }) {
  return (
    <Card className="mb-3">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">{title}</h3>
      <div className="space-y-3">
        <StatRow
          label="Volume"
          current={current.totalVolume}
          previous={previous.totalVolume}
          format={v => `${v.toLocaleString()} lbs`}
        />
        <StatRow
          label="Sessions"
          current={current.sessionCount}
          previous={previous.sessionCount}
        />
        <StatRow
          label="Total Sets"
          current={current.totalSets}
          previous={previous.totalSets}
        />
      </div>
    </Card>
  )
}

export default function PeriodComparison() {
  const { log } = useWorkoutLog()
  const comparison = getPeriodComparison(log)

  return (
    <div>
      <ComparisonCard
        title="THIS WEEK VS LAST WEEK"
        current={comparison.week.current}
        previous={comparison.week.previous}
      />
      <ComparisonCard
        title="THIS MONTH VS LAST MONTH"
        current={comparison.month.current}
        previous={comparison.month.previous}
      />
    </div>
  )
}
