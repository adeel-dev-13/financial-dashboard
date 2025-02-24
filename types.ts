export interface CardType {
  id: number
  cardNumber: string
  balance: number
  holderName: string
}

export interface TransactionType {
  id: number
  title: string
  amount: number
  date: string
  type: 'credit' | 'debit'
}
