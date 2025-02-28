import { IconType } from 'react-icons'

export type Transaction = {
  id: number
  title: string
  date: string
  amount: string
  Icon: IconType
  bgColor: string
  amountColor: string
}

export interface CardProps {
  balance: number
  cardHolder: string
  validThru: string
  cardNumber: string
  isPrimary?: boolean
}

export interface CardType {
  id: number
  cardNumber: string
  balance: number
  holderName: string
  validity: string
}

export interface TransactionType {
  id: number
  title: string
  amount: number
  date: string
  type: 'credit' | 'debit'
}

export interface TransactionItemType {
  id: number
  name: string
  date: string
  amount: number
  Icon: IconType
  type: 'income' | 'expense'
}

export interface User {
  name: string
  role: string
  image: string
}

export type FormValues = {
  yourName: string
  userName: string
  email: string
  password: string
  dateOfBirth: string
  presentAddress: string
  permanentAddress: string
  city: string
  postalCode: string
  country: string
  image?: string
}
