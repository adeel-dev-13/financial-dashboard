'use client'
import { NotificationIcon, SettingsIcon } from '../Icons'
import { IconButton } from '../IconButton/IconButton'
import { useAppSelector } from '../../redux/hooks'
import { useMediaQuery } from 'react-responsive'
import SearchBar from '../Searchbar/Searchbar'
import { Profile } from '../../assets'
import { FiMenu } from 'react-icons/fi'

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PrimaryHeader = ({ setIsSidebarOpen }: HeaderProps) => {
  const { userProfile } = useAppSelector((state) => state.userReducer)
  const isSmallScreen = useMediaQuery({ maxWidth: 500 })

  return (
    <>
      <header className="w-full flex items-center justify-between py-4 bg-transparent lg:bg-white lg:border-b border-gray-200 relative">
        <button
          className="text-gray-700 z-0 text-2xl lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu />
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-gray-900 lg:static lg:translate-x-0">
          Overview
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-6">
            <SearchBar width="255px" />
            <IconButton icon={<SettingsIcon />} />
            <IconButton icon={<NotificationIcon />} />
          </div>

          <img
            src={userProfile?.image || Profile}
            alt="Profile"
            className={`${isSmallScreen ? ' w-[35px]' : 'w-[60px]'} ${isSmallScreen ? 'h-[35px]' : 'h-[60px]'} mr-[20px] md:mr-0  rounded-full border border-gray-300`}
          />
        </div>
      </header>

      <div className="w-full py-2 flex items-center justify-center lg:hidden">
        <SearchBar width="325px" />
      </div>
    </>
  )
}

export default PrimaryHeader
