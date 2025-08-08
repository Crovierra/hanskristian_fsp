import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin"

export function detailAnimation(){
    gsap.registerPlugin(ScrollTrigger)
    let animation = gsap.timeline({
        scrollTrigger: {
            trigger: "#detail_section",
            start: "-=200 top",
            end: "1000px",
            markers: false,
            scrub: true
        }
    })
    animation.add([
        gsap.fromTo("#profile_pic", 6, {
            x: -20, opacity: 0
        }, {x: 0, opacity: 1}),
        gsap.fromTo("#detail_info", 6, {
            x: 10,
            opacity: 0
        }, { x: 0, opacity: 1}),
    ])
    .add([
        gsap.to("#detail_info", 6, {opacity: 0, y:-200, delay: 10}),
        gsap.to("#profile_pic", 6, {opacity: 0, y:-200, delay: 10})
    ])
    .add([
        gsap.to("#detail_section", 6, {
            opacity: 0,
            y: -200,
            delay: 10,
        })
    ])
    .add([
        gsap.fromTo("#path_2", 5, 
            {opacity: 1, drawSVG: "0%",}, 
            {opacity: 1, drawSVG: "100%",
                scrollTrigger: {
                trigger: "#svg_container_2",
                start: "-=200 top",
                end: "bottom-=200",
                markers: false,
                scrub: true
            }}
        )
    ])
}

