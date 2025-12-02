import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './Contexts/UserContext'

createRoot(document.getElementById('root')).render(
    <StrictMode>
  <UserProvider>
  </UserProvider>
      <App />
    </StrictMode>
)
