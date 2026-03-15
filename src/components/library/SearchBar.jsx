import { useState, useEffect } from 'react'

export default function SearchBar({ value, onChange }) {
  const [local, setLocal] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => onChange(local), 200)
    return () => clearTimeout(timer)
  }, [local, onChange])

  return (
    <div className="relative mb-4">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Search exercises..."
        className="w-full h-10 pl-9 pr-8 bg-surface border border-surface-lighter rounded-lg text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
      />
      {local && (
        <button
          onClick={() => { setLocal(''); onChange('') }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  )
}
