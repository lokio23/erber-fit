import { Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Dashboard from './pages/Dashboard'
import WorkoutSession from './pages/WorkoutSession'
import MuscleMap from './pages/MuscleMap'
import ProgressTracker from './pages/ProgressTracker'
import ExerciseLibrary from './pages/ExerciseLibrary'
import FormCoach from './pages/FormCoach'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workout" element={<WorkoutSession />} />
        <Route path="/muscles" element={<MuscleMap />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/library" element={<ExerciseLibrary />} />
        <Route path="/form-coach" element={<FormCoach />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
