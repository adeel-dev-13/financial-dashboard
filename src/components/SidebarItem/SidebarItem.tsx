import { IconType } from 'react-icons'

interface SidebarItemProps {
  text: string
  Icon: IconType
  active?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, text, active }) => {
  return (
    <div
      className={`relative flex items-center space-x-4 p-4 cursor-pointer transition rounded-lg ${
        active ? 'bg-white-shade1' : 'hover:bg-gray-100'
      }`}
    >
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-2 bg-light-black rounded-r-full"></div>
      )}

      <span className="text-lg flex items-center justify-center w-6 h-6">
        <Icon color={active ? '#232323' : '#B1B1B1'} />
      </span>

      <span
        className={`text-sm font-medium ${
          active ? 'text-light-black' : 'text-inactive'
        }`}
      >
        {text}
      </span>
    </div>
  )
}

export default SidebarItem
