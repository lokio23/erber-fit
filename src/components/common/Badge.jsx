const variants = {
  accent: 'bg-accent/20 text-accent border-accent/30',
  dim: 'bg-accent-dim/20 text-accent-dim border-accent-dim/30',
  danger: 'bg-danger/20 text-danger border-danger/30',
  neutral: 'bg-surface-lighter text-text-secondary border-surface-lighter'
}

export default function Badge({ variant = 'neutral', label, className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
      {label}
    </span>
  )
}
