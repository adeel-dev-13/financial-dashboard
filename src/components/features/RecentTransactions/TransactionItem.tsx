import { TransactionItemType } from '../../../utils/types'

interface TransactionItemProps {
  transaction: TransactionItemType
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <div className="flex transition-all items-center space-x-3 cursor-pointer hover:px-2 hover:rounded-[8px] hover:bg-gray-100 hover:shadow-md hover:scale-[1.02]">
      <transaction.Icon />
      <div className="flex justify-between w-full items-center">
        <div>
          <p className="font-medium">{transaction.name}</p>
          <p className="text-sm text-gray-500">{transaction.date}</p>
        </div>
        <p
          className={`font-semibold ${transaction.type === 'income' ? 'text-light-green' : 'text-red'}`}
        >
          {transaction.type === 'income' ? '+' : '-'}$
          {Math.abs(transaction.amount)}
        </p>
      </div>
    </div>
  )
}
