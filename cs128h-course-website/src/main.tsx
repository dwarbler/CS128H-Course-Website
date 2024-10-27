import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar.tsx"
import Homepage from "./components/Homepage.tsx"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Homepage />
  </StrictMode>,
)
