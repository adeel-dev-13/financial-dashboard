import React from 'react'
import CardSection from '../CardSection/CardSection'
import MainHeading from '../../common/MainHeading/MainHeading'
import QuickTransfer from '../QuickTransfer/QuickTransfer'
import BalanceHistory from '../BalanceHistory/BalanceHistory'
import ExpenseStatistics from '../ExpenseStatistics/ExpenseStatistics'
import WeeklyActivityChart from '../WeeklyActivity/WeeklyActivityChart'
import RecentTransactions from '../RecentTransactions/RecentTransactions'

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-[1110px] w-full mx-auto p-4 xl:p-0 mt-7 mb-7">
      <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-6">
        <div className="w-full xl:max-w-[730px]">
          <CardSection />
        </div>
        <div className="w-full max-w-[325px] xl:max-w-[350px] flex flex-col mx-auto">
          <RecentTransactions />
        </div>
      </div>

      <div className="flex flex-wrap w-full items-center justify-between gap-6 mt-6">
        <div className="w-full max-w-[325px] xl:max-w-[730px] mx-auto">
          <MainHeading title="Weekly Activity" />
          <WeeklyActivityChart />
        </div>
        <div className="mx-auto md:max-w-[350px] w-full">
          <MainHeading title="Expense Statistics" />
          <ExpenseStatistics />
        </div>
      </div>

      <div className="flex gap-2 flex-col xl:flex-row justify-between w-full mt-6">
        <div className="mx-auto xl:mx-0">
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
