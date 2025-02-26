import { NotificationIcon, SettingsIcon } from '../Icons';
import { IconButton } from '../IconButton/IconButton';
import SearchBar from '../Searchbar/Searchbar';
import { Profile } from '../../assets';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const PrimaryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <button 
          className="lg:hidden text-gray-700 text-2xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiMenu />
        </button>
        <div className="text-xl font-bold text-gray-700 hidden lg:block">Overview</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <SearchBar />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <IconButton icon={<SettingsIcon />} />
          <IconButton icon={<NotificationIcon />} />
        </div>

        <img
          src={Profile}
          alt="Profile"
          className="w-10 h-10 rounded-full shadow-md border border-gray-300"
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-4 space-y-3">
          <SearchBar />
          <IconButton icon={<SettingsIcon />} />
          <IconButton icon={<NotificationIcon />} />
        </div>
      )}
    </header>
  );
};

export default PrimaryHeader;
