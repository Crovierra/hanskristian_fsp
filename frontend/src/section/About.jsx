import React from 'react'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin"

const About = () => {
  
  React.useEffect(()=>{
    function animateText(){
        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)
        let bundleAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#about_section",
            start: "-500 top",
            end: "top+=100",
            scrub: true,
            markers: false
          }
        })
        let animation = gsap.timeline({
          scrollTrigger: {
            trigger: "#about_section",
            start: "top top",
            end: "2000px",
            scrub: true,
            pin: true,
            markers: false
          }
        })
  
        bundleAnimation.add([
          gsap.fromTo("#intro_bundle", 2, {
            opacity: 0
          }, {
            opacity: 1
          })
        ])
  
        animation.add([
          gsap.fromTo("#path_1", 3, {
            drawSVG: "0%",
            opacity: 1 // Start with the path not drawn
        }, {
            drawSVG: "100%",
            opacity: 1,
            scrollTrigger: {
              trigger: "#about_section",
              start: "top top", 
              end: "top+=450",
              scrub: true,
              markers: false
            },
            onComplete: () => {
              gsap.fromTo("#path_1", 1, {
                drawSVG: "100%",
                opacity: 1
              }, {
                drawSVG: "0%",
                opacity: 0,
              })
                // Animate the path to be fully drawn
        }
      })])
        .add([
          gsap.to("#p_intro_1", 4, {
              x: -800,
              opacity: 0,
              delay: 30
          }),
          gsap.to("#p_intro_2", 3, {
            x: 400,
            opacity: 0,
            delay: 30
          }),
          gsap.to("#p_intro_3", 4, {
            x: -500,
            opacity: 0,
            delay: 25
          }),
        ])
        .add([
          gsap.to("#p_1", 3, {
            scale: 1,
            opacity: 1,
            delay: 20
          })
        ])
        .add([
          gsap.to("#p_1", 3, {
            x:-400,
            opacity: 0,
            delay: 12
          }),
          gsap.to("#p_2", 3, {
            scale: 1,
            opacity: 1,
            delay: 18
          })
        ])
        .add([
          gsap.to("#p_2", 4, {
            x:-100,
            delay: 18
          }),
          gsap.to("#p_2", 3, {
            x:500,
            opacity:0,
            delay: 3
          }),
          gsap.to("#p_3", 3, {
            scale: 1,
            opacity: 1,
            delay:15
          })
        ])
        .add([
          gsap.to("#p_3", 3, {
            y:-300,
            opacity: 0,
            delay: 15
          })
        ])
        .add([
          gsap.to("#p_4", 3, {
            scale: 1,
            opacity:1,
          }),
          gsap.to("#p_4", 4, {
            y: -400,
            opacity: 0,
            delay: 16
          })
        ])
    }
      animateText()
  },[])
  return ( 
    <section className="w-full min-h-screen bg-black font-bold text-6xl items-center justify-center z-3 flex flex-col relative" id="about_section">
      {/* Dibikin floating */}
      <div className="flex flex-col font-bold text-8xl text-center gap-10" id="intro_bundle">
        <p id="p_intro_1">Let me introduce</p>
        <p id="p_intro_2">Myself</p>
        <p id="p_intro_3">As Developer</p>
      </div>
      {/* ------ */}
      {/* Di animasi scale-0 ke 1 + opacity / blur */}
      <div id="svg_container">
        <svg viewBox="20 -98 200 200" className="w-[100%] h-[100%] absolute top-0 left-0 z-0">
        <path id="path_1" d="M 40 30 C 80 10 100 10 170 20 C 230 30 200 50 130 60 C 90 60 90 60 60 50 C 30 40 40 30 70 20 C 110 10 120 10 180 20 C 230 30 180 50 140 60 C 90 70 60 60 30 50" stroke="white" fill="transparent" strokeWidth="2" className="scale-100"></path>
        </svg>
      </div>
      <div className="text-center absolute opacity-0 scale-15 flex flex-row gap-4 items-center" id="p_1">
      <p >Full Stack Developer based in Indonesia</p>
      <img src="/id_flag.webp" style={{width: "60px", height: "40px", marginTop: "10px"}} alt="indonesian_flag"/>
      </div>
      <p className="text-center absolute opacity-0 scale-15" id="p_2">Have a degree in Visual Design, but . .</p>
      <p className="text-center absolute opacity-0 scale-15" id="p_3">Fall in love with coding</p>
      <p className="text-center absolute opacity-0 scale-15" id="p_4">And now here I am</p>
    </section>
  )
}

export default About
