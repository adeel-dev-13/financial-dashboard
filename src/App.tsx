// src/App.tsx
import React from 'react'
import Settings from './components/Settings/Settings'
import Dashboard from './components/dashboard/Dashboard'
import CardsPage from './components/CardsPage/CardsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="*" element={<></>} />
      </Routes>
    </Router>
  )
}

export default App
