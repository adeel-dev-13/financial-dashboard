import React from 'react'
import CardSection from '../CardSection/CardSection'
import MainHeading from '../MainHeading/MainHeading'
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
          <MainHeading title="Weekly Activity" />
          <WeeklyActivityChart />
        </div>
        <div className="w-full md:w-[350px]">
          <MainHeading title="Expense Statistics" />
          <ExpenseStatistics />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-6 mt-6">
        <div className="w-full md:w-[48%]">
          <MainHeading title="Quick Transfer" />
          <QuickTransfer />
        </div>
        <div className="w-full md:w-[635px]">
          <MainHeading title="Balance History" />
          <BalanceHistory />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
