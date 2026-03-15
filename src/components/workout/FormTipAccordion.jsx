import { useState } from 'react'

export default function FormTipAccordion({ formTips, avoidCues }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors py-1"
      >
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`transition-transform ${isOpen ? 'rotate-90' : ''}`}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        Form Tips
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-2 pb-1 space-y-1.5">
            {formTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <span className="text-accent font-bold mt-0.5">{i + 1}.</span>
                <span className="text-text-primary">{tip}</span>
              </div>
            ))}
            {avoidCues.length > 0 && (
              <div className="mt-2 pt-2 border-t border-surface-lighter">
                <p className="text-[10px] uppercase tracking-wider text-danger font-bold mb-1">Avoid</p>
                {avoidCues.map((cue, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className="text-danger mt-0.5">✕</span>
                    <span className="text-danger/80">{cue}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
