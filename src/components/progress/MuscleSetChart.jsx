import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'
import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { getMuscleSetsForWeek, MUSCLE_TARGETS } from '../../utils/muscleVolumeCalc'
import { getWeekStart, formatDateISO } from '../../utils/dateUtils'

export default function MuscleSetChart() {
  const { log } = useWorkoutLog()
  const thisWeekStart = getWeekStart(formatDateISO(new Date()))
  const muscleSets = getMuscleSetsForWeek(log, thisWeekStart)

  const data = Object.entries(MUSCLE_TARGETS)
    .filter(([id, m]) => m.target > 0 || (muscleSets[id] || 0) > 0)
    .map(([id, m]) => ({
      muscle: m.label,
      actual: muscleSets[id] || 0,
      target: m.target,
    }))
    .sort((a, b) => (b.target - b.actual) - (a.target - a.actual))

  if (data.length === 0) return null

  return (
    <div className="bg-surface rounded-xl border border-surface-lighter p-4 mb-4">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">WEEKLY SETS / MUSCLE</h3>
      <ResponsiveContainer width="100%" height={data.length * 36 + 30}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" horizontal={false} />
          <XAxis
            type="number"
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 10 }}
            tickLine={{ stroke: '#3a3a3a' }}
          />
          <YAxis
            type="category"
            dataKey="muscle"
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 10 }}
            tickLine={false}
            width={80}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #39FF14',
              borderRadius: '8px',
              color: '#f0f0f0',
              fontSize: '12px'
            }}
            formatter={(value, name) => [
              `${value} sets`,
              name === 'actual' ? 'Actual' : 'Target'
            ]}
          />
          <Bar dataKey="target" fill="#333333" radius={[0, 4, 4, 0]} barSize={14} />
          <Bar dataKey="actual" radius={[0, 4, 4, 0]} barSize={14}>
            {data.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.actual >= entry.target ? '#39FF14' : entry.actual >= entry.target * 0.5 ? '#FFD700' : '#ff4444'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-2 text-[10px] text-text-secondary">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#39FF14] inline-block" /> On target</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#FFD700] inline-block" /> Behind</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#ff4444] inline-block" /> Way behind</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#333333] inline-block" /> Target</span>
      </div>
    </div>
  )
}
