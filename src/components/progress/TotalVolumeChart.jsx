import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { getTotalWeeklyVolume } from '../../utils/muscleVolumeCalc'

export default function TotalVolumeChart() {
  const { log } = useWorkoutLog()
  const data = getTotalWeeklyVolume(log)

  if (!data || data.length === 0) return null

  return (
    <div className="bg-surface rounded-xl border border-surface-lighter p-4 mb-4">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">TOTAL WEEKLY VOLUME</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis
            dataKey="weekLabel"
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 10 }}
            tickLine={{ stroke: '#3a3a3a' }}
          />
          <YAxis
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 10 }}
            tickLine={{ stroke: '#3a3a3a' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #39FF14',
              borderRadius: '8px',
              color: '#f0f0f0',
              fontSize: '12px'
            }}
            formatter={(value) => [`${value.toLocaleString()} lbs`, 'Total Volume']}
          />
          <Bar dataKey="volume" fill="#39FF14" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
