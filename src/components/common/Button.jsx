const variants = {
  primary: 'bg-accent text-black font-bold hover:brightness-110 active:brightness-90',
  secondary: 'bg-surface-light text-text-primary border border-surface-lighter hover:bg-surface-lighter',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-light',
  danger: 'bg-danger/20 text-danger border border-danger/30 hover:bg-danger/30'
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`px-4 py-2.5 rounded-lg text-sm transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
