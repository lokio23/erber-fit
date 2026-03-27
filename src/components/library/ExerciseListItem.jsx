import { useState } from 'react'
import Badge from '../common/Badge'
import ExerciseIllustration from '../exerciseIllustrations'
import { DAYS } from '../../data/days'
import { MUSCLE_MAP } from '../../data/muscles'

export default function ExerciseListItem({ exercise }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="bg-surface border border-surface-lighter rounded-xl overflow-hidden transition-colors"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Collapsed header */}
      <div className="flex items-center justify-between p-4 cursor-pointer">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <ExerciseIllustration exerciseId={exercise.formCoachId} size="sm" className="flex-shrink-0" />
          <div className="min-w-0">
            <h3 className="font-header text-base tracking-wide text-text-primary truncate">
              {exercise.name.toUpperCase()}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {exercise.dayIndices.map(di => (
                <Badge key={di} variant="neutral" label={DAYS[di]?.name} />
              ))}
              <span className="text-xs text-text-secondary">
                {exercise.sets}x{exercise.minReps}{exercise.maxReps !== exercise.minReps ? `–${exercise.maxReps}` : ''}
              </span>
            </div>
          </div>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`text-text-secondary transition-transform ml-2 flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Expanded details */}
      <div className={`grid transition-all duration-300 ${
        expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-4 space-y-3">
            {/* Large illustration */}
            <div className="flex justify-center py-2">
              <div className="bg-surface-light rounded-lg p-3 border border-surface-lighter">
                <ExerciseIllustration exerciseId={exercise.formCoachId} size="md" />
              </div>
            </div>

            {/* Muscles */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-1.5">Target Muscles</p>
              <div className="flex flex-wrap gap-1.5">
                {exercise.primaryMuscles.map(id => (
                  <Badge key={id} variant="accent" label={MUSCLE_MAP[id]?.name || id} />
                ))}
                {exercise.secondaryMuscles.map(id => (
                  <Badge key={id} variant="dim" label={MUSCLE_MAP[id]?.name || id} />
                ))}
              </div>
            </div>

            {/* Form tips */}
            {exercise.formTips.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mb-1.5">Form Tips</p>
                <div className="space-y-1">
                  {exercise.formTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="text-accent font-bold">{i + 1}.</span>
                      <span className="text-text-primary">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Avoid cues */}
            {exercise.avoidCues.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-danger font-bold mb-1.5">Avoid</p>
                <div className="space-y-1">
                  {exercise.avoidCues.map((cue, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="text-danger">✕</span>
                      <span className="text-danger/80">{cue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
