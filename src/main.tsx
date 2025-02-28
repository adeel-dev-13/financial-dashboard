import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/primaryLayout/Layout/Layout.tsx'
import { Providers } from './redux/provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Layout />
    </Providers>
  </StrictMode>
)
