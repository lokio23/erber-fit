import QuickStartButton from '../components/dashboard/QuickStartButton'
import TodayWorkoutCard from '../components/dashboard/TodayWorkoutCard'
import LastWorkoutSummary from '../components/dashboard/LastWorkoutSummary'
import StreakCalendar from '../components/dashboard/StreakCalendar'
import DataManager from '../components/common/DataManager'

export default function Dashboard() {
  return (
    <div>
      <h1 className="font-header text-4xl tracking-wide text-text-primary mb-5">ERBER FIT</h1>
      <div className="space-y-4">
        <QuickStartButton />
        <StreakCalendar />
        <LastWorkoutSummary />
        <TodayWorkoutCard />
      </div>
      <div className="mt-6">
        <DataManager />
      </div>
    </div>
  )
}
