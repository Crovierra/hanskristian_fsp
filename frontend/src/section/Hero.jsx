import React from 'react'

const Hero = () => {
  return (
    <section className="w-full min-h-screen overflow-hidden relative">
        <img
            src="./src/assets/hero-bg.png"
            className="w-full h-auto object-cover absolute"
        />
        <img
            src="./src/assets/bigrock.png"
            className="w-full h-auto object-cover absolute z-10"
        />
        <img
            src="./src/assets/rock.png"
            className="w-full h-auto object-cover absolute z-2"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-20"></div>
</section>
  )
}

export default Hero
