import React from 'react'
import { ShootingStars } from '../components/Stars'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useEffect} from "react"
import { useMail } from '../hooks/useMail'


const Contact = () => {
    const {setMail, mailNotification, loadingMail, sendMail} = useMail()
    function handleInput(e){
        const {name, value} = e.target
        setMail(prevValue => {
            return {...prevValue, [name]: value}
        })
    }
    const contactForm = [
        {label: "Name", type: "text", placeholder:"", htmlFor:"name", id:"name"},
        {label: "Email", type: "email", placeholder:"tera@example.com", htmlFor:"email", id:"email"},
        {label: "Message", type: "text", placeholder:"", htmlFor:"message", id:"message"},
    ]
    
    useEffect(()=> {
        function contactScrollAnimation(){
            gsap.registerPlugin(ScrollTrigger)
            let animation = gsap.timeline({
                scrollTrigger: {
                    trigger: "#contact_section",
                    start: "top top",
                    end: "1000px",
                    scrub: true,
                    pin: true,
                }
    
            })
    
            animation.add([
                gsap.to("#contact_text", 1, {
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
        contactScrollAnimation()
    }, [])
  return (
    <section className="flex relative flex-col min-h-screen bg-[#f5f5f5] w-full py-[2%] justify-center" id="contact_section">
    <div className="absolute top-0 bg-black z-5 w-full h-[50%]" id="about_overlay_top"></div>
    <div className="absolute top-0 bg-black opacity-90 z-5 w-full h-[50%]" id="about_overlay_top2"></div>
    <p className="text-center text-6xl font-bold z-10 absolute top-[46%] left-1 right-1 hover:text-neutral-500" id="contact_text">Contact</p>
    <div className="absolute bottom-0 bg-black z-5 w-full h-[50%]" id="about_overlay_bottom"></div>
    <div className="absolute bottom-0 bg-black opacity-90 z-5 w-full h-[50%]" id="about_overlay_bottom2"></div>
    <div className="flex flex-row h-auto px-[10%] gap-4">
        <div className="w-[50%] bg-black opacity-90 h-[180px] z-2"></div>
        <form method="POST" className="flex flex-col w-[50%] justify-center z-2">
            {contactForm.map(item => {
                return (
                    <div key={item.label} className="flex flex-col z-2">
                    <label className="py-1 text-[#333333]" htmlFor={item.htmlFor}>{item.label}</label>
                    {item.label === "Message" ?
                    <textarea onChange={handleInput} name={item.id}  type={item.type} placeholder={item.placeholder} id={item.id} className="bg-[#e0e0e0] opacity-90 px-[10px] h-[150px] py-[15px] text-[#333333] rounded-xl z-2 shadow-md"></textarea>
                    :
                    <input onChange={handleInput} name={item.id} type={item.type} placeholder={item.placeholder} id={item.id} className="bg-[#e0e0e0] opacity-90 px-[15px] py-[5px] text-[#333333] rounded-xl z-2 shadow-md"></input>
                    }
                    </div>
                )
            })}
            <button className={`w-[120px] h-[28px] mt-[20px] rounded-xl cursor-pointer duration-300 transform-all hover:translate-y-[-4px]
                ${mailNotification.success ? "bg-green-400 text-white" : "bg-white text-black"}
                disabled:bg-gray-300 disabled:cursor-not-allowed`} disabled={loadingMail}
                onClick={sendMail}>{loadingMail ? "Loading" : mailNotification.success ? mailNotification.success : "Send" }</button>
                {mailNotification.fail ? <p className="text-red-600 pt-[10px]">{mailNotification.fail}</p> : null}
        </form>
    </div>
    <ShootingStars className="z-1 absolute"/>
    </section>
  )
}

export default Contact
