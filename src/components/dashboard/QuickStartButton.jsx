import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

export default function QuickStartButton() {
  const { currentDay, currentCycleDay } = useApp()
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/workout')}
      className="w-full bg-accent text-black rounded-xl p-5 text-left transition-all hover:brightness-110 active:scale-[0.98]"
    >
      <p className="text-xs font-bold tracking-widest uppercase opacity-70">Today&apos;s Workout</p>
      <p className="font-header text-3xl tracking-wide mt-1">
        DAY {currentCycleDay + 1} — {currentDay.name.toUpperCase()}
      </p>
      <p className="text-sm font-medium mt-1 opacity-80">{currentDay.subtitle}</p>
      <div className="mt-3 inline-flex items-center gap-2 bg-black/20 rounded-lg px-3 py-1.5 text-sm font-bold">
        START WORKOUT
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </button>
  )
}
