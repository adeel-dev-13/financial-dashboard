import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { expenseData } from '../../../utils/constants'
import {
  Bar,
  XAxis,
  YAxis,
  Legend,
  BarChart,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

const WeeklyActivityChart: React.FC = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1280 })
  return (
    <div className="bg-white rounded-[25px] w-full h-[322px]">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          barGap={10}
          data={expenseData}
          margin={{ top: 30, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid stroke="#E5E7EB" strokeWidth={1} vertical={false} />

          <YAxis
            domain={[0, 500]}
            tick={{ fill: '#718EBF', fontSize: 13, fontWeight: 400 }}
            tickCount={6}
            axisLine={false}
            tickLine={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ dy: 10, fill: '#718EBF', fontSize: 13, fontWeight: 400 }}
          />
          <Legend
            payload={[
              {
                value: 'Deposit',
                type: 'circle',
                id: 'deposit',
                color: '#396AFF'
              },
              {
                value: 'Withdraw',
                type: 'circle',
                id: 'withdraw',
                color: 'black'
              }
            ]}
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{
              top: 10,
              right: 18,
              marginBottom: 20
            }}
          />
          <Bar
            dataKey="withdraw"
            fill="#000"
            barSize={isSmallScreen ? 7 : 15}
            radius={4}
          />
          <Bar
            dataKey="deposit"
            fill="#396AFF"
            barSize={isSmallScreen ? 7 : 15}
            radius={4}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeeklyActivityChart
