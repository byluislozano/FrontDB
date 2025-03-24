import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
