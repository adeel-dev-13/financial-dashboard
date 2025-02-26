import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout/>
  </StrictMode>,
)
