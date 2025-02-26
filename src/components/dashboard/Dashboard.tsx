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
    <div className="max-w-[1110px] mx-auto overflow-hidden pt-3">
      <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-6">
        <div className="w-full xl:w-[730px] flex flex-col">
          <CardSection />
        </div>
        <div className="w-full max-w-[350px] flex flex-col mx-auto">
          <RecentTransactions />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row w-full justify-between gap-6 mt-6">
        <div className="w-full xl:w-[730px]">
          <MainHeading title="Weekly Activity" />
          <WeeklyActivityChart />
        </div>
        <div className="w-full max-w-[350px] mx-auto">
          <MainHeading title="Expense Statistics" />
          <ExpenseStatistics />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-between w-full mt-6">
        <div className="">
          <MainHeading title="Quick Transfer" />
          <QuickTransfer />
        </div>
        <div className="w-full xl:w-[635px]">
          <MainHeading title="Balance History" />
          <BalanceHistory />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
