import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModalProvider } from './components/ui/animated-modal'

createRoot(document.getElementById('root')).render(
    <ModalProvider>
        <App />
    </ModalProvider>
)
