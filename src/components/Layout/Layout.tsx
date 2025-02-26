import App from '../../App'
import { FiMenu } from 'react-icons/fi'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { IoClose } from 'react-icons/io5'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`fixed md:relative top-0 left-0 w-64 bg-white min-h-[250px] h-screen flex flex-col border-r border-gray-200 transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <Sidebar />
      </div>

      <div className="bg-light-bg flex-1 flex flex-col transition-all duration-300">
        <div className="relative">
          <button
            className="md:hidden absolute top-5 left-5 z-50 bg-white shadow-md p-2 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <IoClose className="text-2xl text-gray-700" />
            ) : (
              <FiMenu className="text-2xl text-gray-700" />
            )}
          </button>
          <PrimaryHeader />
        </div>
        <main className="flex-1 overflow-y-auto w-full p-6">
          <App />
        </main>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Layout
