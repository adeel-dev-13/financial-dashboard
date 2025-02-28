import React from 'react'
import { Logo } from '../Icons'
import { IoClose } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { SideBarItems } from '../../utils/constants'
import SidebarItem from '../SidebarItem/SidebarItem'

interface SidebarProps {
  isOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsSidebarOpen }) => {
  const location = useLocation()

  return (
    <>
      <div
        className={`fixed md:relative top-0 z-10 left-0 w-64 bg-white h-screen flex flex-col border-r border-gray-200 transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center justify-between py-6 px-3">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="text-light-black py-2 rounded-lg font-extrabold text-[25px]">
              Soar Task
            </span>
          </div>

          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <IoClose className="text-2xl text-gray-700" />
          </button>
        </div>

        <nav className="flex-1">
          <ul>
            {SideBarItems.map((item) => (
              <SidebarItem
                key={item.text}
                Icon={item.icon}
                text={item.text}
                href={item.path}
                active={location.pathname === item.path}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
