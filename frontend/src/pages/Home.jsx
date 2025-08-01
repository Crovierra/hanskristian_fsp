import React from 'react'
import HeroText from '../components/HeroText.jsx'
import Hero from '../section/Hero.jsx'
import Contact from '../section/Contact.jsx'
import About from '../section/About.jsx'
import Experience from '../section/Experience.jsx'
import Detail from '../section/Detail.jsx'
import PageTransition from '../components/PageTransition.jsx'

const Home = () => {
  return (
    <div className="h-auto bg-black z-0">
      <HeroText />
        <Hero />
        <About />
        <Detail />
        <Experience />
        <Contact />
    </div>
  )
}

export default Home
