import Button from '../common/Button'

export default function ReviewControls({ onKnow, onReview, disabled }) {
  return (
    <div className="flex gap-3">
      <Button
        variant="secondary"
        onClick={onReview}
        disabled={disabled}
        className="flex-1 py-3"
      >
        REVIEW AGAIN
      </Button>
      <Button
        variant="primary"
        onClick={onKnow}
        disabled={disabled}
        className="flex-1 py-3"
      >
        I KNOW THIS
      </Button>
    </div>
  )
}
