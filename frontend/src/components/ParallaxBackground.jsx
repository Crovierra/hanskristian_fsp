import React from 'react'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useEffect} from "react"

const ParallaxBackground = () => {
    const parallaxImage = [
    { src: "/hero-bg.webp", alt: "Parallax first layer", z_index: "z-0", loadingType: "", id:"herobg"},
    { src: "/bigrock.webp", alt: "Parallax second layer", z_index: "z-1", loadingType: "lazy", id:"bigrock"},
    { src: "/rock.webp", alt: "Parallax third layer", z_index: "z-2 bottom-2", loadingType: "lazy", id:"rock"},
  ]
    //Creating parallax animation using GSAP
    
    function setAnimationScroll(){
        gsap.registerPlugin(ScrollTrigger)
        let runAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#herobg",
                start: "top top",
                end: "1000px",
                scrub: true,
            }
        })
        runAnimation.add([
            gsap.to('#herobg', 2, {
                opacity: 0,
                scale: 1.1
            }
        )
        ])
        .add([
            gsap.to("#bigrock", 4, {
                opacity: 0,
                scale: 1.2
            })
        ])
        .add([
            gsap.to("#rock", 6, {
                opacity: 0,
                scale: 1.4
            })
        ])
    }

    useEffect(()=>{
        setAnimationScroll()
    },[])

  return (
    <div className="absolute inset-0 bg-black/40">
        {parallaxImage.map((item, index) => {
          return (
            <img
            key={index}
            src={item.src}
            className={`w-full h-auto object-cover absolute ${item.z_index}`}
            loading={item.loadingType}
            alt={item.alt}
            id={item.id}
        />
          )
      })}
    </div>
  )
}

export default ParallaxBackground
