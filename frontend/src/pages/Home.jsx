import React from 'react'
import { box } from '../components/3dobject.js'
import {useRef, useEffect} from "react"
import HeroText from '../components/HeroText.jsx'
import Hero from '../section/Hero.jsx'

const Home = () => {
    // const containerRef = useRef(null)
    // useEffect(()=>{
    //     box({containerRef: containerRef})
    // }, [])
  return (
    <div className=" min-h-screen bg-black min-h-screen z-0">
        <Hero />
        <HeroText />
    </div>
  )
}

export default Home
