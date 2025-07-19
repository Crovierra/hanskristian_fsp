import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import Navbar from './components/Navbar'
import SocialNav from './components/SocialNav'
 
function App() {
  return (
    <Router>
      <Navbar />
      <SocialNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
