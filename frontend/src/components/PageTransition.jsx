import React from 'react'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger.js"

const PageTransition = () => {
    React.useEffect(()=> {
        function contactScrollAnimation(){
            gsap.registerPlugin(ScrollTrigger)
            let animation = gsap.timeline({
                scrollTrigger: {
                    trigger: "#experience_section",
                    start: "top top",
                    end: "1000px",
                    scrub: true,
                    pin: true,
                    markers: true
                }
    
            })
    
            animation.add([
                gsap.to("#experience_text", 1, {
                    opacity: 0
                })
            ])
            .add([
                gsap.to("#about_overlay_top", 4, {
                    y: -300,
                    opacity: 0
                }),
                gsap.to("#about_overlay_bottom", 4, {
                    y: 500,
                    opacity: 0
                }),
                gsap.to("#navbar", 2, {
                    color: "#333333",
                    ease: "power2.inOut"
                }),
                gsap.to("#about_overlay_top2", 4, {
                    y: -300,
                    opacity: 0,
                    delay:1
                }),
                gsap.to("#about_overlay_bottom2", 4, {
                    y: 500,
                    opacity: 0,
                    delay:1
                })
            ])
        }
        // contactScrollAnimation()
    }, [])
  return (
    <div className="w-full min-h-screen flex flex-row relative">
   
    </div>
  )
}

export default PageTransition
