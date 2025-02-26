import { Logo } from '../Icons';
import { FiMenu } from 'react-icons/fi'; 
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'; 
import { SideBarItems } from '../../utils/constants';
import SidebarItem from '../SidebarItem/SidebarItem';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose className="text-2xl text-gray-700" /> : <FiMenu className="text-2xl text-gray-700" />}
      </button>

      <div
        className={`fixed md:relative top-0 left-0 w-64 bg-white h-screen flex flex-col border-r border-gray-200 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center py-6 px-3 space-x-3">
          <Logo />
          <span className="text-[#232323] py-2 rounded-lg font-extrabold text-[25px]">
            Soar Task
          </span>
        </div>

        <nav className="flex-1">
          <ul>
            {SideBarItems.map((item) => (
              <SidebarItem
                key={item.text}
                Icon={item.icon}
                text={item.text}
                active={item.active}
              />
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
