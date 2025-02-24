// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Settings from './components/Settings/Settings'
import Dashboard from './components/dashboard/Dashboard'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Default route => Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Another route => Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Catch-all route => Not Found page */}
        <Route path="*" element={<></>} />
      </Routes>
    </Router>
  )
}

export default App
