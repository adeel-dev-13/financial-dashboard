import { balanceHistoryData } from '../../../utils/constants'
import React from 'react'
import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

const BalanceHistory: React.FC = () => {
  return (
    <div className="w-full h-[276px] bg-white rounded-2xl p-4 xl:max-w-[635px]">
      <ResponsiveContainer
        width="100%"
        height={250}
        className="xl:max-w-[635px]"
      >
        <AreaChart className="mt-2.5 mr-2.5" data={balanceHistoryData}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0047FF" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#0047FF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="month" tick={{ fill: '#9CA3AF' }} />
          <YAxis tick={{ fill: '#9CA3AF' }} domain={[0, 800]} />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#0047FF"
            strokeWidth={3}
            fill="url(#colorBalance)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BalanceHistory
