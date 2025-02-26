import React from 'react'
import CardSection from '../CardSection/CardSection'
import QuickTransfer from '../QuickTransfer/QuickTransfer'
import BalanceHistory from '../BalanceHistory/BalanceHistory'
import ExpenseStatistics from '../ExpenseStatistics/ExpenseStatistics'
import WeeklyActivityChart from '../WeeklyActivity/WeeklyActivityChart'
import RecentTransactions from '../RecentTransactions/RecentTransactions'

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-[1110px] mx-auto">

      <div className="flex flex-col md:flex-row justify-between w-full gap-6">
  <div className="w-full md:w-[65.5%]">
    <CardSection />
  </div>

  <RecentTransactions />
</div>
<div className="flex flex-col md:flex-row w-full justify-between gap-6 mt-6">
  <div className="w-full md:w-[730px]">
    <h2 className="text-xl font-semibold mb-4 text-[#343C6A]">
      Weekly Activity
    </h2>
    <WeeklyActivityChart />
  </div>

  <div className="w-full md:w-[350px]">
    <h2 className="text-xl font-semibold mb-4 text-[#343C6A]">
      Expense Statistics
    </h2>
    <ExpenseStatistics />
  </div>
</div>
<div className="flex flex-col md:flex-row justify-between w-full gap-6 mt-6">
  <div className="w-full md:w-[48%]">
    <h2 className="text-lg font-semibold mb-4">Quick Transfer</h2>
    <QuickTransfer />
  </div>

  <div className="w-full md:w-[635px]">
    <h2 className="text-xl font-semibold mb-4 text-[#343C6A]">Balance History</h2>
    <BalanceHistory />
  </div>
</div>
    </div>
  )
}

export default Dashboard
