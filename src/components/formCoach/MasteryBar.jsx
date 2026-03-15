import ProgressBar from '../common/ProgressBar'

export default function MasteryBar({ count, total, percent }) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-sm text-text-primary font-medium">
          {count} / {total} mastered
        </span>
        <span className="text-xs text-accent font-bold">{Math.round(percent)}%</span>
      </div>
      <ProgressBar value={percent} />
    </div>
  )
}
