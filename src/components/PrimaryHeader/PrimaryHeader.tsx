import { NotificationIcon, SettingsIcon } from '../Icons'
import { IconButton } from '../IconButton/IconButton'
import SearchBar from '../Searchbar/Searchbar'
import { Profile } from '../../assets'
import { FiMenu } from 'react-icons/fi'

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PrimaryHeader = ({ setIsSidebarOpen }: HeaderProps) => {
  return (
    <>
      <header className="w-full flex items-center justify-between px-6 py-4 bg-transparent lg:bg-white lg:border-b border-gray-200 relative">
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
          <div className="hidden lg:flex items-center gap-2">
            <SearchBar />
            <IconButton icon={<SettingsIcon />} />
            <IconButton icon={<NotificationIcon />} />
          </div>

          <img
            src={Profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </header>

      <div className="px-6 py-2 flex justify-center lg:hidden">
        <SearchBar />
      </div>
    </>
  )
}

export default PrimaryHeader
