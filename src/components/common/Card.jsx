export default function Card({ accent = false, className = '', children, ...props }) {
  return (
    <div
      className={`bg-surface rounded-xl p-4 border ${
        accent ? 'border-accent/30' : 'border-surface-lighter'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
