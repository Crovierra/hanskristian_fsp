import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import SocialNav from './components/SocialNav.jsx'
import NotFound from './pages/NotFound.jsx'
import { ModalProvider } from './components/ui/animated-modal.jsx'
 
function App() {
  return (
    <Router>
      <Navbar />
      <SocialNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
