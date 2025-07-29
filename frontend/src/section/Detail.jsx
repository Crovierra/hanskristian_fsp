import React from 'react'
import { detailAnimation } from '../animation/detail'

const Detail = () => {
    React.useEffect(()=> {
        detailAnimation()
    },[])
  return (
    <section className="flex flex-row max-sm:flex-col w-full min-h-screen justify-center items-center px-[10%] max-sm:px-[20px] gap-10" id="detail_section">
            <img src="/me.webp" className="min-h-[200px] min-w-[120px] max-h-[600px] max-sm:h-[200px] max-sm:w-[120px] max-sm:pt-[40px]" id="profile_pic" alt="Hans Picture"/>
        <div className="flex flex-col w-[80%] h-auto gap-4" id="detail_info">
            <h1 className="text-8xl max-sm:text-2xl font-bold">Hans Kristian Tanaka</h1>
            <h2 className="text-2xl max-sm:text-md font-semibold">Self taught Full Stack Developer</h2>
            <p className="text-lg max-sm:text-md"><span className="font-bold">Hey!</span> Welcome to my portfolio. I'm a Full Stack Developer, and I've studied for more than a year. My <span className="font-bold">method of learning</span> Full Stack is through <span className="font-bold">Bootcamp, Youtube, and Experimenting</span> by creating a project.
            Yes, it's true, I have <span className="font-bold">degree in Visual Art</span> but I fell for Web Dev and I will continue to expand my knowledge. If u want to know my personality, I have to say a I'm little bit <span className="font-bold">Perfectionist, Eager to Learn, and Passionate</span>.
            My favorite technologies are <span className="font-bold">MERN Stack</span>, but I've tried other things too.</p>
        </div>
    </section>
  )
}

export default Detail
