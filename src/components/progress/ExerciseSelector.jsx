import { DAYS } from '../../data/days'
import { EXERCISE_MAP } from '../../data/exercises'

export default function ExerciseSelector({ selectedId, onSelect }) {
  return (
    <div className="space-y-2 mb-5">
      {DAYS.map(day => (
        <div key={day.index}>
          <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-1.5">{day.name}</p>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {day.exerciseIds.map(id => {
              const ex = EXERCISE_MAP[id]
              if (!ex) return null
              const isActive = selectedId === id
              return (
                <button
                  key={id}
                  onClick={() => onSelect(id)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive ? 'bg-accent text-black' : 'bg-surface-light text-text-secondary'
                  }`}
                >
                  {ex.name}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
