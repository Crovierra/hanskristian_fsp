import React from 'react'
import HeroText from '../components/HeroText.jsx'
import Hero from '../section/Hero.jsx'
import Contact from '../section/Contact.jsx'
import About from '../section/About.jsx'

const Home = () => {
  return (
    <div className="h-auto bg-black z-0">
        <Hero />
        <HeroText />
        <Contact />
        <About />
    </div>
  )
}

export default Home
