import { useApp } from '../../context/AppContext'
import { EXERCISE_MAP } from '../../data/exercises'
import Card from '../common/Card'

export default function TodayWorkoutCard() {
  const { currentDay } = useApp()

  return (
    <Card>
      <h3 className="font-header text-lg tracking-wide text-text-secondary mb-3">EXERCISES</h3>
      <div className="space-y-2">
        {currentDay.exerciseIds.map((id, i) => {
          const ex = EXERCISE_MAP[id]
          return (
            <div key={id} className="flex items-baseline gap-2 text-sm">
              <span className="text-accent font-bold w-5 text-right">{i + 1}.</span>
              <span className="text-text-primary">{ex.name}</span>
              <span className="text-text-secondary ml-auto text-xs whitespace-nowrap">
                {ex.sets}x{ex.minReps}{ex.maxReps !== ex.minReps ? `–${ex.maxReps}` : ''}
              </span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
