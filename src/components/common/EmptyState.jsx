export default function EmptyState({ message = 'Nothing here yet', icon }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-text-secondary">
      {icon && <div className="text-3xl mb-3 opacity-40">{icon}</div>}
      <p className="text-sm text-center">{message}</p>
    </div>
  )
}
