import Card from '../common/Card'
import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { calcSessionTotalVolume } from '../../utils/volumeCalc'
import { getWeekStart, formatDateISO } from '../../utils/dateUtils'

export default function WeeklyVolumeSummary() {
  const { log } = useWorkoutLog()

  const today = new Date()
  const thisWeekStart = getWeekStart(formatDateISO(today))
  const lastWeekDate = new Date(today)
  lastWeekDate.setDate(lastWeekDate.getDate() - 7)
  const lastWeekStart = getWeekStart(formatDateISO(lastWeekDate))

  let thisWeekVol = 0
  let lastWeekVol = 0

  log.forEach(session => {
    const weekStart = getWeekStart(session.date)
    const vol = calcSessionTotalVolume(session)
    if (weekStart === thisWeekStart) thisWeekVol += vol
    else if (weekStart === lastWeekStart) lastWeekVol += vol
  })

  const diff = lastWeekVol > 0
    ? ((thisWeekVol - lastWeekVol) / lastWeekVol * 100).toFixed(1)
    : null

  return (
    <Card className="mb-4">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">WEEKLY VOLUME</h3>
      <div className="flex items-baseline justify-between">
        <div>
          <p className="font-header text-3xl text-accent">{thisWeekVol.toLocaleString()}</p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">This Week (lbs)</p>
        </div>
        {diff !== null && (
          <div className="text-right">
            <p className={`text-sm font-bold ${Number(diff) >= 0 ? 'text-accent' : 'text-danger'}`}>
              {Number(diff) >= 0 ? '+' : ''}{diff}%
            </p>
            <p className="text-[10px] text-text-secondary">vs last week</p>
          </div>
        )}
      </div>
    </Card>
  )
}
