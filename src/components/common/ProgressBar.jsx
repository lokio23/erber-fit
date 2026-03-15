export default function ProgressBar({ value = 0, label = '', className = '' }) {
  return (
    <div className={className}>
      {label && <p className="text-xs text-text-secondary mb-1">{label}</p>}
      <div className="h-2 bg-surface-lighter rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  )
}
