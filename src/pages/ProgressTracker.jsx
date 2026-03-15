import { useState } from 'react'
import { useWorkoutLog } from '../hooks/useWorkoutLog'
import { usePersonalRecords } from '../hooks/usePersonalRecords'
import { EXERCISE_MAP } from '../data/exercises'
import { getWeightProgressionData, getWeeklyVolumeData } from '../utils/volumeCalc'
import ExerciseSelector from '../components/progress/ExerciseSelector'
import WeightChart from '../components/progress/WeightChart'
import VolumeChart from '../components/progress/VolumeChart'
import PersonalRecordCard from '../components/progress/PersonalRecordCard'
import WeeklyVolumeSummary from '../components/progress/WeeklyVolumeSummary'
import EmptyState from '../components/common/EmptyState'

export default function ProgressTracker() {
  const { log } = useWorkoutLog()
  const { getRecord } = usePersonalRecords()
  const [selectedExercise, setSelectedExercise] = useState('incline-db-press')

  const exercise = EXERCISE_MAP[selectedExercise]
  const record = getRecord(selectedExercise)
  const weightData = getWeightProgressionData(log, selectedExercise)
  const volumeData = getWeeklyVolumeData(log, selectedExercise)

  return (
    <div>
      <h1 className="font-header text-4xl tracking-wide text-text-primary mb-4">PROGRESS</h1>

      <WeeklyVolumeSummary />

      <ExerciseSelector selectedId={selectedExercise} onSelect={setSelectedExercise} />

      {exercise && (
        <p className="text-sm text-text-primary font-medium mb-3">
          {exercise.name}
        </p>
      )}

      <PersonalRecordCard record={record} exerciseName={exercise?.name} />

      {weightData.length > 0 ? (
        <>
          <WeightChart data={weightData} />
          <VolumeChart data={volumeData} />
        </>
      ) : (
        <EmptyState message={`No data yet for ${exercise?.name || 'this exercise'}. Complete a workout to see progress!`} />
      )}
    </div>
  )
}
