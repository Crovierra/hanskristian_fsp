import { gsap } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin"

export function lineAnimation(){
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)
    let animation = gsap.timeline({
        scrollTrigger: {
            trigger: "#about_section",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false
        }
    })

     animation.fromTo("#path_1", {
        drawSVG: "0%" // Start with the path not drawn
    }, {
        drawSVG: "100%" // Animate the path to be fully drawn
    });
}