// src/components/Dashboard/Dashboard.tsx
import React from 'react'
import { CardType, TransactionType } from '../../../types'
import BalanceHistory from '../BalanceHistory/BalanceHistory'
import CardSection from '../CardSection/CardSection'
import ExpenseStatistics from '../ExpenseStatistics/ExpenseStatistics'
import QuickTransfer from '../QuickTransfer/QuickTransfer'
import RecentTransactions from '../RecentTransactions/RecentTransactions'
import WeeklyActivityChart from '../WeeklyActivity/WeeklyActivityChart'

const Dashboard: React.FC = () => {
  // Mock data (replace with real API or global store)
  const cardsData: CardType[] = [
    {
      id: 1,
      cardNumber: '**** **** **** 1234',
      balance: 5576,
      holderName: 'John Doe'
    },
    {
      id: 2,
      cardNumber: '**** **** **** 4321',
      balance: 3420,
      holderName: 'Jane Doe'
    }
  ]

  const transactionsData: TransactionType[] = [
    {
      id: 101,
      title: 'Deposit from PayPal',
      amount: 2500,
      date: 'Jan 25, 2025',
      type: 'credit'
    },
    {
      id: 102,
      title: 'Payment to Amazon',
      amount: 850,
      date: 'Jan 22, 2025',
      type: 'debit'
    },
    {
      id: 103,
      title: 'Salary from Company X',
      amount: 5000,
      date: 'Jan 20, 2025',
      type: 'credit'
    }
  ]

  return (
    <div className="dashboard-container">
      {/* Top Row */}
      <div className="top-section">
        <CardSection cards={cardsData} />
        <RecentTransactions transactions={transactionsData} />
      </div>

      {/* Middle Row */}
      <div className="middle-section">
        <WeeklyActivityChart />
        <ExpenseStatistics />
      </div>

      {/* Bottom Row */}
      <div className="bottom-section">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  )
}

export default Dashboard
