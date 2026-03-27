import { useState } from 'react'

export default function WarmUpBanner({ warmups = [] }) {
  const [checked, setChecked] = useState(() => warmups.map(() => false))
  const [isOpen, setIsOpen] = useState(true)

  const allDone = checked.every(Boolean)
  const doneCount = checked.filter(Boolean).length

  const toggle = (i) => {
    setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  if (!warmups.length) return null

  return (
    <div className={`rounded-xl border ${allDone ? 'border-accent/30 bg-accent/5' : 'border-accent/50 bg-accent/10'} mb-4 overflow-hidden transition-colors`}>
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-accent text-lg">🔥</span>
          <span className="font-header text-sm tracking-wide text-accent">WARM UP</span>
          <span className="text-[10px] text-text-secondary">~5-10 min</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-secondary">{doneCount}/{warmups.length}</span>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className={`text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Collapsible content */}
      <div className={`grid transition-all duration-300 ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-3 space-y-2">
            {warmups.map((item, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); toggle(i) }}
                className="w-full flex items-center gap-3 py-1.5 text-left"
              >
                {/* Checkbox */}
                <div className={`w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors ${
                  checked[i]
                    ? 'bg-accent border-accent'
                    : 'border-text-secondary/40 bg-transparent'
                }`}>
                  {checked[i] && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                {/* Label */}
                <span className={`text-sm flex-1 transition-colors ${
                  checked[i] ? 'text-text-secondary line-through' : 'text-text-primary'
                }`}>
                  {item.name}
                </span>
                <span className={`text-xs transition-colors ${
                  checked[i] ? 'text-text-secondary/50' : 'text-text-secondary'
                }`}>
                  {item.detail}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
