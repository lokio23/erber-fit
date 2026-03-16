import Card from '../common/Card'
import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { getMuscleVolumeForWeek, PUSH_MUSCLES, PULL_MUSCLES, UPPER_MUSCLES, LOWER_MUSCLES } from '../../utils/muscleVolumeCalc'
import { getWeekStart, formatDateISO } from '../../utils/dateUtils'

function sumGroup(muscleVolume, muscleIds) {
  return muscleIds.reduce((sum, id) => sum + (muscleVolume[id] || 0), 0)
}

function getRatio(a, b) {
  if (b === 0) return a === 0 ? '0:0' : `${a > 0 ? '1' : '0'}:0`
  const ratio = a / b
  return `${ratio.toFixed(2)}:1`
}

function getAssessment(a, b) {
  if (a === 0 && b === 0) return { text: 'No data', color: 'text-text-secondary' }
  const ratio = b > 0 ? a / b : 2
  if (ratio >= 0.8 && ratio <= 1.2) return { text: 'Balanced', color: 'text-accent' }
  if (ratio > 1.2) return { text: 'Left-heavy', color: 'text-[#FFD700]' }
  return { text: 'Right-heavy', color: 'text-[#FFD700]' }
}

function BalanceCard({ title, leftLabel, rightLabel, leftValue, rightValue }) {
  const total = leftValue + rightValue
  const leftPct = total > 0 ? (leftValue / total) * 100 : 50
  const rightPct = total > 0 ? (rightValue / total) * 100 : 50
  const ratio = getRatio(leftValue, rightValue)
  const assessment = getAssessment(leftValue, rightValue)

  return (
    <Card className="mb-3">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">{title}</h3>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-accent">{leftLabel}: {leftValue.toLocaleString()}</span>
        <span className="text-text-secondary">{rightLabel}: {rightValue.toLocaleString()}</span>
      </div>
      <div className="h-3 bg-surface-lighter rounded-full overflow-hidden flex">
        <div
          className="h-full rounded-l-full transition-all duration-500"
          style={{ width: `${leftPct}%`, backgroundColor: '#39FF14' }}
        />
        <div
          className="h-full rounded-r-full transition-all duration-500"
          style={{ width: `${rightPct}%`, backgroundColor: '#1a8a0a' }}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[10px] text-text-secondary">
          Ratio: {ratio}
        </p>
        <p className={`text-[10px] font-medium ${assessment.color}`}>
          {assessment.text}
        </p>
      </div>
    </Card>
  )
}

export default function VolumeBalance() {
  const { log } = useWorkoutLog()
  const thisWeekStart = getWeekStart(formatDateISO(new Date()))
  const muscleVolume = getMuscleVolumeForWeek(log, thisWeekStart)

  const pushVol = sumGroup(muscleVolume, PUSH_MUSCLES)
  const pullVol = sumGroup(muscleVolume, PULL_MUSCLES)
  const upperVol = sumGroup(muscleVolume, UPPER_MUSCLES)
  const lowerVol = sumGroup(muscleVolume, LOWER_MUSCLES)

  return (
    <div>
      <BalanceCard
        title="PUSH / PULL BALANCE"
        leftLabel="Push"
        rightLabel="Pull"
        leftValue={pushVol}
        rightValue={pullVol}
      />
      <BalanceCard
        title="UPPER / LOWER BALANCE"
        leftLabel="Upper"
        rightLabel="Lower"
        leftValue={upperVol}
        rightValue={lowerVol}
      />
    </div>
  )
}
