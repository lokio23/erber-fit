import Badge from '../common/Badge'
import { DAYS } from '../../data/days'
import { MUSCLE_MAP } from '../../data/muscles'

export default function Flashcard({ exercise, isFlipped, onFlip }) {
  if (!exercise) return null

  return (
    <div className="perspective-1000 w-full h-80 mb-6" onClick={onFlip}>
      <div className={`relative w-full h-full transition-transform duration-500 preserve-3d cursor-pointer ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-surface rounded-xl border border-surface-lighter p-6 flex flex-col items-center justify-center">
          <p className="font-header text-2xl tracking-wide text-text-primary text-center mb-4">
            {exercise.name.toUpperCase()}
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center mb-3">
            {exercise.dayIndices.map(di => (
              <Badge key={di} variant="neutral" label={DAYS[di]?.name} />
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center mb-4">
            {exercise.primaryMuscles.map(id => (
              <Badge key={id} variant="accent" label={MUSCLE_MAP[id]?.name || id} />
            ))}
            {exercise.secondaryMuscles.map(id => (
              <Badge key={id} variant="dim" label={MUSCLE_MAP[id]?.name || id} />
            ))}
          </div>
          <p className="text-xs text-text-secondary">Tap to flip</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-surface rounded-xl border border-accent/30 p-6 overflow-y-auto">
          <h4 className="font-header text-base tracking-wide text-accent mb-3">FORM TIPS</h4>
          <div className="space-y-2 mb-4">
            {exercise.formTips.slice(0, 3).map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-accent font-bold">{i + 1}.</span>
                <span className="text-text-primary">{tip}</span>
              </div>
            ))}
          </div>

          {exercise.avoidCues.length > 0 && (
            <>
              <h4 className="font-header text-base tracking-wide text-danger mb-2">AVOID</h4>
              <div className="space-y-2">
                {exercise.avoidCues.map((cue, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-danger">✕</span>
                    <span className="text-danger/80">{cue}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <p className="text-xs text-text-secondary mt-4 text-center">Tap to flip back</p>
        </div>
      </div>
    </div>
  )
}
