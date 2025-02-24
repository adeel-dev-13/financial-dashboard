// src/components/Dashboard/WeeklyActivity/WeeklyActivityChart.tsx
import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

interface ChartData {
  name: string
  balance: number
}

const data: ChartData[] = [
  { name: 'Mon', balance: 500 },
  { name: 'Tue', balance: 1000 },
  { name: 'Wed', balance: 700 },
  { name: 'Thu', balance: 1200 },
  { name: 'Fri', balance: 900 },
  { name: 'Sat', balance: 1500 },
  { name: 'Sun', balance: 1300 }
]

const WeeklyActivityChart: React.FC = () => {
  return (
    <div className="weekly-activity">
      <h2>Weekly Activity</h2>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeeklyActivityChart
