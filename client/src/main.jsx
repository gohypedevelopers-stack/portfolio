import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './font.css'; // Import the font CSS
import { Toaster } from "sonner"  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Toaster theme="dark" position="top-right" richColors closeButton />
  </StrictMode>,
)
