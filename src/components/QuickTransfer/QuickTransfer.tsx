import React, { useState } from 'react'
import { Profile } from '../../assets'
import { IoIosSend } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

interface User {
  name: string
  role: string
  image: string
}

const users: User[] = [
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

const QuickTransfer: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User>(users[0])
  const [amount, setAmount] = useState<number>(525.5)

  return (
    <div className="bg-white w-full px-6 py-6 rounded-xl md:max-w-[445px] h-[276px] space-y-6">
      <div className="flex items-center space-x-6 overflow-hidden">
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
              className={`text-[15px] text-[#718EBF] ${
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
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="w-[50%] flex-grow bg-transparent text-gray-700 text-[14px] font-semibold text-center focus:outline-none"
          />

          <button className="w-[50%] bg-black text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full">
            <span className="text-md">Send</span>
            <IoIosSend className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickTransfer
