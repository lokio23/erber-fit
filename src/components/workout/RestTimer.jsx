export default function RestTimer({ timer }) {
  const { timeRemaining, stopTimer, progress } = timer

  const radius = 28
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference * (1 - progress)

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-surface border border-accent/30 rounded-2xl p-4 flex items-center gap-4 shadow-lg shadow-black/50">
      <div className="relative w-16 h-16">
        <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
          <circle cx="32" cy="32" r={radius} fill="none" stroke="#2a2a2a" strokeWidth="4" />
          <circle
            cx="32" cy="32" r={radius}
            fill="none" stroke="#39FF14" strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-header text-xl text-accent">
          {timeRemaining}
        </span>
      </div>
      <div>
        <p className="text-xs text-text-secondary">REST TIMER</p>
        <button
          onClick={stopTimer}
          className="text-xs text-danger mt-1 hover:text-danger/80"
        >
          Skip
        </button>
      </div>
    </div>
  )
}
