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
    active: true,
    path: '/'
  },
  {
    icon: TransactionIcon,
    text: 'Transactions',
    path: '/'
  },
  {
    icon: FaUser,
    text: 'Accounts',
    path: '/'
  },
  {
    icon: InvestmentIocn,
    text: 'Investments',
    path: '/'
  },
  {
    icon: CreditcardIcon,
    text: 'Credit Cards',
    path: '/cards'
  },
  {
    icon: LoanIcon,
    text: 'Loans',
    path: '/'
  },
  {
    icon: ServiceIcon,
    text: 'Services',
    path: '/'
  },
  {
    icon: Privileges,
    text: 'My Privileges',
    path: '/'
  },
  {
    icon: FaCog,
    text: 'Settings',
    path: '/settings'
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
  },
  {
    id: 3,
    cardNumber: '3778 **** **** 4321',
    balance: 3420,
    holderName: 'Jane Doe',
    validity: '12/22'
  },
  {
    id: 4,
    cardNumber: '3778 **** **** 4321',
    balance: 3420,
    holderName: 'Jane Doe',
    validity: '12/22'
  },
  {
    id: 5,
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

export const profileFields = [
  {
    label: 'Your Name',
    type: 'text',
    placeholder: 'Enter your name',
    defaultValue: 'Charlene Reed'
  },
  {
    label: 'User Name',
    type: 'text',
    placeholder: 'Enter your username',
    defaultValue: 'Charlene Reed'
  },
  {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    defaultValue: 'charlenereed@gmail.com'
  },
  {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    defaultValue: '********'
  },
  {
    label: 'Date of Birth',
    type: 'date',
    placeholder: 'Select your birth date',
    defaultValue: '1990-01-25'
  },
  {
    label: 'Present Address',
    type: 'text',
    placeholder: 'Enter present address',
    defaultValue: 'San Jose, California, USA'
  },
  {
    label: 'Permanent Address',
    type: 'text',
    placeholder: 'Enter permanent address',
    defaultValue: 'San Jose, California, USA'
  },
  {
    label: 'City',
    type: 'text',
    placeholder: 'Enter your city',
    defaultValue: 'San Jose'
  },
  {
    label: 'Postal Code',
    type: 'text',
    placeholder: 'Enter postal code',
    defaultValue: '45962'
  },
  {
    label: 'Country',
    type: 'text',
    placeholder: 'Enter country',
    defaultValue: 'USA'
  }
]

export const expenseChartdata = {
  labels: ['Entertainment', 'Investment', 'Bill Expense', 'Others'],
  datasets: [
    {
      label: 'Expense Distribution',
      data: [30, 25, 25, 35],
      backgroundColor: ['#1E2A50', '#3D65FC', '#E57C27', '#1D1D1D'],
      borderColor: '#ffffff', // White border to create the slice gaps
      borderWidth: 8, // ✅ Increased to add more gap
      hoverOffset: 10 // ✅ Adds more spacing on hover
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 2
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      color: '#ffffff',
      font: {
        size: 10
      },
      formatter: (value: number, context: any) => {
        return `${value}%\n${context.chart.data.labels[context.dataIndex]}`
      },
      offset: 2,
      clip: false
    }
  },
  scales: {
    r: {
      grid: {
        display: false
      },
      ticks: {
        display: false
      },
      suggestedMin: 10,
      suggestedMax: 10,

      pointLabels: {
        display: false
      }
    }
  }
}
