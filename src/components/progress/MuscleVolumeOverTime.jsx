import { useState } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useWorkoutLog } from '../../hooks/useWorkoutLog'
import { getMuscleSetsOverTime, MUSCLE_TARGETS } from '../../utils/muscleVolumeCalc'

const MUSCLE_COLORS = ['#39FF14', '#FFD700', '#FF6B6B']
const MAX_SELECTED = 3

const SELECTABLE_MUSCLES = Object.entries(MUSCLE_TARGETS)
  .filter(([, m]) => m.target > 0)
  .map(([id, m]) => ({ id, label: m.label }))

export default function MuscleVolumeOverTime() {
  const { log } = useWorkoutLog()
  const [selected, setSelected] = useState(['chest'])

  const data = getMuscleSetsOverTime(log, selected)

  function toggle(muscleId) {
    setSelected(prev => {
      if (prev.includes(muscleId)) {
        return prev.length > 1 ? prev.filter(id => id !== muscleId) : prev
      }
      if (prev.length >= MAX_SELECTED) return prev
      return [...prev, muscleId]
    })
  }

  return (
    <div className="bg-surface rounded-xl border border-surface-lighter p-4 mb-4">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">MUSCLE VOLUME OVER TIME</h3>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
        {SELECTABLE_MUSCLES.map(m => {
          const isActive = selected.includes(m.id)
          const isDisabled = !isActive && selected.length >= MAX_SELECTED
          return (
            <button
              key={m.id}
              onClick={() => toggle(m.id)}
              disabled={isDisabled}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-accent text-black'
                  : isDisabled
                    ? 'bg-surface-lighter text-text-secondary opacity-30'
                    : 'bg-surface-lighter text-text-secondary'
              }`}
            >
              {m.label}
            </button>
          )
        })}
      </div>

      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
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
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #39FF14',
                borderRadius: '8px',
                color: '#f0f0f0',
                fontSize: '12px'
              }}
              formatter={(value, name) => {
                const muscle = SELECTABLE_MUSCLES.find(m => m.id === name)
                return [`${value} sets`, muscle?.label || name]
              }}
            />
            {selected.map((muscleId, i) => (
              <Line
                key={muscleId}
                type="monotone"
                dataKey={muscleId}
                stroke={MUSCLE_COLORS[i]}
                strokeWidth={2}
                dot={{ fill: MUSCLE_COLORS[i], r: 3 }}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-sm text-text-secondary text-center py-6">
          No data yet. Complete workouts to see trends.
        </p>
      )}

      {selected.length > 0 && (
        <div className="flex items-center gap-3 mt-2 text-[10px] text-text-secondary">
          {selected.map((id, i) => {
            const muscle = SELECTABLE_MUSCLES.find(m => m.id === id)
            return (
              <span key={id} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: MUSCLE_COLORS[i] }} />
                {muscle?.label}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}
