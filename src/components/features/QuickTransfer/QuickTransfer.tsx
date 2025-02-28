import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { User } from '../../../utils/types'
import { users } from '../../../utils/constants'
import { IoIosArrowForward } from 'react-icons/io'

const QuickTransfer: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User>(users[0])
  const [amount, setAmount] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/[$,]/g, '')

    if (rawValue === '' || /^\d*\.?\d*$/.test(rawValue)) {
      setAmount(rawValue ? `$${formatNumber(rawValue)}` : '')
    }
  }
  const formatNumber = (num: string) => {
    if (!num) return ''
    const [integer, decimal] = num.split('.')
    const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return decimal ? `${formattedInteger}.${decimal}` : formattedInteger
  }

  return (
    <div className="bg-white w-full max-w-[325px] min-w-[100%] md:min-w-[445px]  md:px-6 py-6 rounded-[25px] h-[276px] space-y-6">
      <div className="flex items-center space-x-2 md:space-x-6 overflow-hidden w-full">
        {users.map((user) => (
          <div
            key={user.name}
            className={`relative flex flex-col space-y-2 items-center cursor-pointer transition-all ${
              selectedUser.name === user.name ? 'opacity-100' : 'opacity-60'
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <div className="relative">
              <img
                src={user.image}
                alt={user.name}
                className={`w-16 h-16 rounded-full object-cover
                }`}
              />
            </div>

            <span
              className={`text-[16px] ${
                selectedUser.name === user.name ? 'font-bold' : 'font-normal'
              }`}
            >
              {user.name}
            </span>
            <span
              className={`text-[15px] text-grey ${
                selectedUser.name === user.name ? 'font-bold' : 'font-normal'
              }`}
            >
              {user.role}
            </span>
          </div>
        ))}
        <div className="w-[50px] h-[50px] shadow-[4px_4px_18px_-2px_rgba(231,228,228,0.6)] bg-white rounded-full flex items-center justify-center">
          <IoIosArrowForward className="text-black cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-[16px] font-normal text-gray-500">
          Write Amount
        </span>

        <div className="flex items-center bg-gray-100 rounded-full max-w-[265px] w-full">
          <input
            type="text"
            placeholder="$0"
            value={amount}
            prefix="$"
            onChange={handleChange}
            className="w-[50%] flex-grow bg-transparent text-gray-700 text-[14px] font-semibold text-center focus:outline-none"
          />

          <button
            onClick={() => setAmount('')}
            className="w-[50%] cursor-pointer bg-black text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full 
             hover:bg-gray-900 transition-all duration-300 ease-in-out group"
          >
            <span className="text-md">Send</span>
            <IoIosSend className="text-lg transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickTransfer
