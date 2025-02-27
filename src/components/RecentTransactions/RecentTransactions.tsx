import { transactions } from '../../utils/constants'
import { TransactionItem } from './TransactionItem'

export default function RecentTransactions() {
  return (
    <div className="rounded-[25px] w-full md:max-w-[350px]">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Recent Transactions
      </h2>

      <div
        className="flex flex-col bg-white rounded-xl w-full p-5 space-y-3 md:max-w-[350px] 
                      max-h-[235px] overflow-y-auto scrollbar-hide"
      >
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}
