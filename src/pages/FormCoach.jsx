import { useState, useCallback } from 'react'
import { useFormCoach } from '../hooks/useFormCoach'
import Flashcard from '../components/formCoach/Flashcard'
import MasteryBar from '../components/formCoach/MasteryBar'
import ReviewControls from '../components/formCoach/ReviewControls'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

export default function FormCoach() {
  const {
    markKnown,
    markReview,
    masteryCount,
    masteryPercent,
    reviewQueue,
    totalExercises,
    resetProgress
  } = useFormCoach()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentExercise = reviewQueue[currentIndex] || null

  const advance = useCallback(() => {
    setIsFlipped(false)
    if (currentIndex >= reviewQueue.length - 1) {
      setCurrentIndex(0)
    }
  }, [currentIndex, reviewQueue.length])

  const handleKnow = useCallback(() => {
    if (currentExercise) {
      markKnown(currentExercise)
      advance()
    }
  }, [currentExercise, markKnown, advance])

  const handleReview = useCallback(() => {
    if (currentExercise) {
      markReview(currentExercise)
      advance()
    }
  }, [currentExercise, markReview, advance])

  const handleReset = useCallback(() => {
    if (window.confirm('Reset all form coach progress?')) {
      resetProgress()
      setCurrentIndex(0)
      setIsFlipped(false)
    }
  }, [resetProgress])

  if (reviewQueue.length === 0) {
    return (
      <div>
        <h1 className="font-header text-4xl tracking-wide text-text-primary mb-4">FORM COACH</h1>
        <MasteryBar count={masteryCount} total={totalExercises} percent={masteryPercent} />
        <Card className="text-center py-10">
          <p className="font-header text-3xl text-accent mb-2">ALL EXERCISES MASTERED</p>
          <p className="text-sm text-text-secondary mb-6">
            You&apos;ve reviewed all {totalExercises} exercises. Great work!
          </p>
          <Button variant="secondary" onClick={handleReset}>
            Reset Progress
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-header text-4xl tracking-wide text-text-primary mb-4">FORM COACH</h1>

      <MasteryBar count={masteryCount} total={totalExercises} percent={masteryPercent} />

      <p className="text-xs text-text-secondary mb-4 text-center">
        {reviewQueue.length} exercise{reviewQueue.length !== 1 ? 's' : ''} remaining
      </p>

      <Flashcard
        exercise={currentExercise}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />

      <ReviewControls
        onKnow={handleKnow}
        onReview={handleReview}
        disabled={!currentExercise}
      />

      <div className="mt-6 text-center">
        <button
          onClick={handleReset}
          className="text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          Reset Progress
        </button>
      </div>
    </div>
  )
}
