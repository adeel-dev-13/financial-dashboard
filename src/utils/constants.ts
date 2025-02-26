import { FaCog, FaUser } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { CardType, TransactionItemType, User } from '../../types'
import {
  CardIcon,
  CreditcardIcon,
  InvestmentIocn,
  LoanIcon,
  Paypal,
  Privileges,
  ServiceIcon,
  TransactionIcon
} from '../components/Icons'
import { Profile } from '../assets'

export const SideBarItems = [
  {
    icon: TiHome,
    text: 'Dashboard',
    active: true
  },
  {
    icon: TransactionIcon,
    text: 'Transactions'
  },
  {
    icon: FaUser,
    text: 'Accounts'
  },
  {
    icon: InvestmentIocn,
    text: 'Investments'
  },
  {
    icon: CreditcardIcon,
    text: 'Credit Cards'
  },
  {
    icon: LoanIcon,
    text: 'Loans'
  },
  {
    icon: ServiceIcon,
    text: 'Services'
  },
  {
    icon: Privileges,
    text: 'My Privileges'
  },
  {
    icon: FaCog,
    text: 'Settings'
  }
]

export const cardsData: CardType[] = [
  {
    id: 1,
    cardNumber: '3778 **** **** 1234',
    balance: 5576,
    holderName: 'John Doe',
    validity: '12/22'
  },
  {
    id: 2,
    cardNumber: '3778 **** **** 4321',
    balance: 3420,
    holderName: 'Jane Doe',
    validity: '12/22'
  }
]

export const transactions: TransactionItemType[] = [
  {
    id: 1,
    name: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    type: 'expense',
    Icon: CardIcon
  },
  {
    id: 2,
    name: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    type: 'income',
    Icon: Paypal
  },
  {
    id: 3,
    name: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    type: 'income',
    Icon: CardIcon
  }
]

export const expenseData = [
  { day: 'Sat', deposit: 200, withdraw: 450 },
  { day: 'Sun', deposit: 100, withdraw: 320 },
  { day: 'Mon', deposit: 230, withdraw: 310 },
  { day: 'Tue', deposit: 300, withdraw: 470 },
  { day: 'Wed', deposit: 220, withdraw: 100 },
  { day: 'Thu', deposit: 210, withdraw: 330 },
  { day: 'Fri', deposit: 290, withdraw: 350 }
]

export const balanceHistoryData = [
  { month: 'Jul', balance: 150 },
  { month: 'Aug', balance: 210 },
  { month: 'Sep', balance: 420 },
  { month: 'Oct', balance: 790 },
  { month: 'Nov', balance: 200 },
  { month: 'Dec', balance: 590 },
  { month: 'Jan', balance: 610 }
]

export const expensesData = [
  { name: 'Entertainment', value: 30, color: '#232C52', offset: 15 },
  { name: 'Bill Expense', value: 15, color: '#E57A34', offset: 20 },
  { name: 'Investment', value: 20, color: '#356AFD', offset: 0 },
  { name: 'Others', value: 35, color: '#111', offset: 0 }
]

export const users: User[] = [
  {
    name: 'Livia Bator',
    role: 'CEO',
    image: Profile
  },
  {
    name: 'Randy Press',
    role: 'Director',
    image: Profile
  },
  {
    name: 'Workman',
    role: 'Designer',
    image: Profile
  }
]
