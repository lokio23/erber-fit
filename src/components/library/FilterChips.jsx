import { DAYS } from '../../data/days'
import { MUSCLES } from '../../data/muscles'

export default function FilterChips({ activeDays, activeMuscles, onToggleDay, onToggleMuscle }) {
  return (
    <div className="space-y-2 mb-4">
      {/* Day filters */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {DAYS.map(day => (
          <button
            key={day.index}
            onClick={() => onToggleDay(day.index)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeDays.includes(day.index)
                ? 'bg-accent text-black'
                : 'bg-surface-light text-text-secondary'
            }`}
          >
            {day.name}
          </button>
        ))}
      </div>
      {/* Muscle filters */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {MUSCLES.map(muscle => (
          <button
            key={muscle.id}
            onClick={() => onToggleMuscle(muscle.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeMuscles.includes(muscle.id)
                ? 'bg-accent text-black'
                : 'bg-surface-light text-text-secondary'
            }`}
          >
            {muscle.name}
          </button>
        ))}
      </div>
    </div>
  )
}
