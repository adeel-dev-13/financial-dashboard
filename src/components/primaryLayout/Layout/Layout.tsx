import App from '../../../App'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <div
          className={`z-50 fixed md:relative top-0 left-0 w-64 bg-white min-h-[250px] h-screen flex flex-col border-r border-gray-200 transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        <div className="md:bg-light-bg bg-white flex-1 flex flex-col transition-all duration-300">
          <PrimaryHeader setIsSidebarOpen={setIsSidebarOpen} />

          <main className="flex-1 overflow-y-auto w-full">
            <App />
          </main>
        </div>
      </div>
    </Router>
  )
}

export default Layout
