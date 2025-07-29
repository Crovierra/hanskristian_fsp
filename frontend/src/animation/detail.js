import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

export function detailAnimation(){
    gsap.registerPlugin(ScrollTrigger)
    let animation = gsap.timeline({
        scrollTrigger: {
            trigger: "#detail_section",
            start: "top top",
            end: "+=300",
            pin: true,
            scrub: true,
        }

    })
    animation.add([
        gsap.fromTo("#profile_pic", 3, {
            x: -200, opacity: 0
        }, {x: 0, opacity: 1}),
        gsap.fromTo("#detail_info", 3, {
            x: 100,
            opacity: 0
        }, { x: 0, opacity: 1})
    ])
    .add([
        gsap.to("#detail_section", 3, {
            opacity: 0,
            y: -200,
            delay: 4
        })
    ])
}