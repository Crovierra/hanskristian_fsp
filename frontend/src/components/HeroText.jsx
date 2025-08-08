import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from "motion/react"

const HeroText = () => {
  return (
    <div className="text-white flex flex-col justify-center absolute top-1/3 mx-[20%] z-10">
        <motion.h1
        initial={{opacity: 0, x:-20}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 1}}
        className="font-semibold text-xl relative">Hi, I'm Hans
        </motion.h1>
        <motion.p
        initial={{opacity: 0, x:-20}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 1.2}}
        className="font-semibold text-4xl relative">Full Stack Developer
        </motion.p>
        <motion.div
        initial={{opacity: 0, x:-20}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 1.4}}
        className="text-4xl relative">Focus on building <FlipWords words={["Secure", "Modern", "Scalable"]}/></motion.div>
        <motion.p
        initial={{opacity: 0, x:-20}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 1.6}}
        className="font-semibold text-xl pt-[10px] relative">Web Application
        </motion.p>
    </div>
  )
}

export default HeroText
