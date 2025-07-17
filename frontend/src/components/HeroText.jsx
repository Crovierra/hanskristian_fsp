import React from 'react'
import { FlipWords } from './FlipWords'

const HeroText = () => {
  return (
    <div className="text-white flex flex-col justify-center absolute top-40 px-[5%]">
        <p className="font-semibold">Hi, I'm Hans</p>
        <p className="font-semibold text-xl">Full Stack Developer</p>
        <p className="text-xl">Focus on building <FlipWords words={["Secure", "Modern", "Scalable"]}/></p>
        <p className="font-semibold text-md">Web Application</p>
    </div>
  )
}

export default HeroText
