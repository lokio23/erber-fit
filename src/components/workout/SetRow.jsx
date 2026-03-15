export default function SetRow({ setIndex, set, onUpdate, onToggle }) {
  const handleWeight = (val) => onUpdate('weight', val)
  const handleReps = (val) => onUpdate('reps', val)

  const stepWeight = (delta) => {
    const current = Number(set.weight) || 0
    handleWeight(Math.max(0, current + delta))
  }
  const stepReps = (delta) => {
    const current = Number(set.reps) || 0
    handleReps(Math.max(0, current + delta))
  }

  return (
    <div className={`flex items-center gap-2 py-2 px-2 rounded-lg transition-colors ${
      set.completed ? 'bg-accent-glow' : ''
    }`}>
      <span className="text-xs text-text-secondary w-8 text-center font-medium">
        S{setIndex + 1}
      </span>

      {/* Weight */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => stepWeight(-5)}
          className="w-7 h-7 rounded bg-surface-lighter text-text-secondary text-xs font-bold flex items-center justify-center active:bg-surface-light"
        >
          -5
        </button>
        <input
          type="text"
          inputMode="decimal"
          value={set.weight}
          onChange={(e) => handleWeight(e.target.value)}
          placeholder="lbs"
          className="w-14 h-8 bg-surface-light border border-surface-lighter rounded text-center text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
        />
        <button
          onClick={() => stepWeight(5)}
          className="w-7 h-7 rounded bg-surface-lighter text-text-secondary text-xs font-bold flex items-center justify-center active:bg-surface-light"
        >
          +5
        </button>
      </div>

      {/* Reps */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => stepReps(-1)}
          className="w-7 h-7 rounded bg-surface-lighter text-text-secondary text-xs font-bold flex items-center justify-center active:bg-surface-light"
        >
          -1
        </button>
        <input
          type="text"
          inputMode="numeric"
          value={set.reps}
          onChange={(e) => handleReps(e.target.value)}
          placeholder="reps"
          className="w-12 h-8 bg-surface-light border border-surface-lighter rounded text-center text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
        />
        <button
          onClick={() => stepReps(1)}
          className="w-7 h-7 rounded bg-surface-lighter text-text-secondary text-xs font-bold flex items-center justify-center active:bg-surface-light"
        >
          +1
        </button>
      </div>

      {/* Complete toggle */}
      <button
        onClick={onToggle}
        className={`w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors ${
          set.completed
            ? 'bg-accent text-black'
            : 'border border-surface-lighter text-text-secondary'
        }`}
      >
        {set.completed && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
    </div>
  )
}
