import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { formatDateShort } from '../../utils/dateUtils'

export default function WeightChart({ data }) {
  if (!data || data.length === 0) return null

  const chartData = data.map(d => ({
    ...d,
    label: formatDateShort(d.date)
  }))

  return (
    <div className="bg-surface rounded-xl border border-surface-lighter p-4 mb-4">
      <h3 className="font-header text-base tracking-wide text-text-secondary mb-3">WEIGHT PROGRESSION</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis
            dataKey="label"
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 10 }}
            tickLine={{ stroke: '#3a3a3a' }}
          />
          <YAxis
            stroke="#a0a0a0"
            tick={{ fill: '#a0a0a0', fontSize: 10 }}
            tickLine={{ stroke: '#3a3a3a' }}
            unit=" lbs"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #39FF14',
              borderRadius: '8px',
              color: '#f0f0f0',
              fontSize: '12px'
            }}
            formatter={(value) => [`${value} lbs`, 'Max Weight']}
          />
          <Line
            type="monotone"
            dataKey="maxWeight"
            stroke="#39FF14"
            strokeWidth={2}
            dot={{ fill: '#39FF14', r: 4 }}
            activeDot={{ r: 6, fill: '#39FF14' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
