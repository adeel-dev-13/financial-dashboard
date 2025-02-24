// src/components/Dashboard/ExpenseStatistics/ExpenseStatistics.tsx
import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

interface PieData {
  name: string
  value: number
}

const data: PieData[] = [
  { name: 'Food', value: 30 },
  { name: 'Rent', value: 40 },
  { name: 'Entertainment', value: 15 },
  { name: 'Others', value: 15 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const ExpenseStatistics: React.FC = () => {
  return (
    <div className="expense-statistics">
      <h2>Expense Statistics</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ExpenseStatistics
