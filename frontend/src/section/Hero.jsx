import React, {Suspense} from 'react'
import ParallaxBackground from '../components/ParallaxBackground'

const Hero = () => {

  //Notes : Preload the big image in index.html to enhance performance
  return (
    <section className="w-full min-h-screen overflow-hidden relative" id="hero">
          <ParallaxBackground />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  )
}

export default Hero
