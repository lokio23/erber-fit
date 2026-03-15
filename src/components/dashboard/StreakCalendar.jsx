import { useStreak } from '../../hooks/useStreak'
import Card from '../common/Card'

const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export default function StreakCalendar() {
  const { currentStreak, last7Days } = useStreak()

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-header text-lg tracking-wide text-text-secondary">STREAK</h3>
        {currentStreak > 0 && (
          <span className="text-accent font-bold text-sm">{currentStreak} day{currentStreak !== 1 ? 's' : ''}</span>
        )}
      </div>
      <div className="flex justify-between items-center gap-1">
        {last7Days.map((day, i) => {
          const d = new Date(day.date + 'T00:00:00')
          const dayLabel = DAY_LABELS[d.getDay() === 0 ? 6 : d.getDay() - 1]
          const isToday = i === last7Days.length - 1

          return (
            <div key={day.date} className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  day.active
                    ? 'bg-accent text-black'
                    : isToday
                    ? 'border-2 border-accent text-accent'
                    : 'border border-surface-lighter text-text-secondary'
                }`}
              >
                {d.getDate()}
              </div>
              <span className="text-[9px] text-text-secondary">{dayLabel}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
