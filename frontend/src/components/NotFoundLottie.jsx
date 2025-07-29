import React from 'react'
import { useLottie, useLottieInteractivity } from "lottie-react"
import NotFound from "../assets/Error_404.json"

const NotFoundLottie = () => {
    const style = {
        height: 800,
    }
    const options = {
        animationData: NotFound,
        autoplay: true
    }

    const lottieObj = useLottie(options, style)
    const animation = useLottieInteractivity({
        lottieObj, 
        mode: "scroll",
        actions:[
            {
                visibility: [0.4, 0.9],
                type: "seek",
                frames: [0, 53]
            }
        ]
    })
  return animation;
}

export default NotFoundLottie
