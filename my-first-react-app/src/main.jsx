import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Navigation from './components/Navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <App />
  </StrictMode>,
)
