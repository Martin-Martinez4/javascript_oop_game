import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startEngine } from '../engine/main.ts'
import './index.css'
import App from './App.tsx'

startEngine();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
