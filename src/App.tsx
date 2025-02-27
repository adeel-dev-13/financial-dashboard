import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Settings from './components/features/Settings/Settings'
import Dashboard from './components/features/dashboard/Dashboard'
import CardsPage from './components/features/CardsPage/CardsPage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="*" element={<></>} />
    </Routes>
  )
}

export default App
