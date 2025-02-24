// src/components/Dashboard/RecentTransactions/RecentTransactions.tsx
import React from 'react'
import TransactionItem from './TransactionItem'
import { TransactionType } from '../../../types'

interface RecentTransactionsProps {
  transactions: TransactionType[]
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions
}) => {
  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((tx) => (
          <TransactionItem key={tx.id} transaction={tx} />
        ))}
      </ul>
    </div>
  )
}

export default RecentTransactions
