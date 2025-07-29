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
    
    
  return (
    <section className="flex flex-col min-h-screen bg-[#f5f5f5] w-full py-[2%] justify-center" id="contact_section">
    <div className="flex flex-row max-sm:flex-col h-auto px-[10%] gap-4">
        <div className="w-[50%] max-sm:w-full h-full z-2 flex flex-col text-[#333333] items-center justify-center px-[10%] max-sm:px-[10px] gap-4">
            <p className="text-4xl max-sm:text-2xl">Contact me for collaboration</p>
            <p className="text-lg max-sm:text-md max-sm:text-center">Reach out today to discuss your project needs and start collaborating on something amazing!</p>
        </div>
        <form method="POST" className="flex flex-col w-[50%] max-sm:w-full justify-center z-2">
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
            <button className={`w-[120px] h-[28px] mt-[20px] rounded-xl cursor-pointer shadow-md duration-400 transform-all hover:translate-y-[-4px]
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
