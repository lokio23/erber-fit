import MonthlyReport from './MonthlyReport'
import PeriodComparison from './PeriodComparison'
import TotalVolumeChart from './TotalVolumeChart'
import MuscleSetChart from './MuscleSetChart'
import VolumeBalance from './VolumeBalance'
import MuscleVolumeOverTime from './MuscleVolumeOverTime'

export default function OverviewTab() {
  return (
    <div>
      <MonthlyReport />
      <PeriodComparison />
      <TotalVolumeChart />
      <MuscleSetChart />
      <VolumeBalance />
      <MuscleVolumeOverTime />
    </div>
  )
}
