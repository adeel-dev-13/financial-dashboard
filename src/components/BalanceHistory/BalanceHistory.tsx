// src/components/Dashboard/BalanceHistory/BalanceHistory.tsx
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

interface HistoryData {
  month: string
  balance: number
}

const data: HistoryData[] = [
  { month: 'Jan', balance: 3000 },
  { month: 'Feb', balance: 4200 },
  { month: 'Mar', balance: 5000 },
  { month: 'Apr', balance: 4600 },
  { month: 'May', balance: 5800 },
  { month: 'Jun', balance: 6000 }
]

const BalanceHistory: React.FC = () => {
  return (
    <div className="balance-history">
      <h2>Balance History</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BalanceHistory
