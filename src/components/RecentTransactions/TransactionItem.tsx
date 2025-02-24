// src/components/Dashboard/RecentTransactions/TransactionItem.tsx
import React from 'react'
import { TransactionType } from '../../../types'

interface TransactionItemProps {
  transaction: TransactionType
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { title, amount, date, type } = transaction
  const amountColor = type === 'credit' ? 'green' : 'red'

  return (
    <li className="transaction-item">
      <div className="transaction-title">{title}</div>
      <div className="transaction-date">{date}</div>
      <div className="transaction-amount" style={{ color: amountColor }}>
        {type === 'credit' ? '+' : '-'}${amount.toLocaleString()}
      </div>
    </li>
  )
}

export default TransactionItem
