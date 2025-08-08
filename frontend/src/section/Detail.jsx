import React from 'react'
import { detailAnimation } from '../animation/detail'

const Detail = () => {
    React.useEffect(()=> {
        detailAnimation()
    },[])
  return (
    <>
    <section className="flex flex-row max-sm:flex-col w-full min-h-screen justify-center items-center px-[10%] max-sm:px-[20px] gap-10 mt-[-20%] relative z-20" id="detail_section">
            <img src="/me.webp" className="min-h-[200px] min-w-[120px] max-h-[600px] max-sm:h-[200px] max-sm:w-[120px] max-sm:pt-[40px]" id="profile_pic" alt="Hans Picture"/>
        <div className="flex flex-col w-[80%] h-auto gap-4" id="detail_info">
            <h1 className="text-8xl max-sm:text-2xl font-bold">Hans Kristian Tanaka</h1>
            <h2 className="text-2xl max-sm:text-md font-semibold">Full Stack Developer</h2>
            <p className="text-lg text-neutral-400 max-sm:text-md"><span className="font-bold text-white">Hey!</span> Welcome to my portfolio. I'm a Full Stack Developer, and I've studied for more than a year. My <span className="font-bold text-white">method of learning</span> Full Stack is through <span className="font-bold text-white">Bootcamp, Youtube, and Experimenting</span> by creating a project.
            Yes, it's true, I have <span className="font-bold text-white">degree in Visual Art</span> but I fell for Web Dev and I will continue to expand my knowledge. If u want to know my personality, I have to say a I'm little bit <span className="font-bold text-white">Perfectionist, Eager to Learn, and Passionate</span>.
            My favorite technologies are <span className="font-bold text-white">MERN Stack</span>, but I've tried other things too.</p>
        </div>
    </section>
    <div id="svg_container_2" className="min-h-screen w-full relative">
        <svg viewBox="-70 0 200 200" className="w-[100%] h-[100%] absolute top-0 left-0 right-0 z-10">
        <path id="path_2" d="M 36 6 C 39.6 18 32.4 24 46.8 54 C 50.4 62 50.4 66 39.6 72 C 25.2 78 10.8 84 13.2 90 C 18 100 46.8 84 75.6 102 C 86.4 108 92.4 116 72 114 C 36 108 14.4 114 7.2 120 C -7.2 132 -1.2 134 7.2 132 C 28.8 126 36 126 43.2 126 C 79.2 126 50.4 138 32.4 144 C 18 150 44.4 152 32.4 162 C 24 170 32.4 183.3333 32.4 216" stroke="white" fill="transparent" strokeWidth="2" className="scale-100 max-sm:scale-130"></path>
        </svg>
      </div>
    </>
  )
}

export default Detail
