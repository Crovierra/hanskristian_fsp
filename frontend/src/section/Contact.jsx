import React from 'react'
import { ShootingStars } from '../components/Stars'


const Contact = () => {
    const contactForm = [
        {label: "Name", type: "text", placeholder:"", htmlFor:"name", id:"name"},
        {label: "Email", type: "email", placeholder:"tera@example.com", htmlFor:"email", id:"email"},
        {label: "Message", type: "text", placeholder:"", htmlFor:"message", id:"message"},
    ]
  return (
    <section className="flex flex-col h-auto w-full py-[5%]">
    <h3 className="text-center text-4xl font-bold mb-[20px]">Contact</h3>
    <p className="text-center mb-[100px]">If you want to hire, collaborate or just message me. You can write it down here</p>
    <div className="flex flex-row justify-center items-center h-auto px-[10%] gap-4">
        <div className="w-[50%] bg-white opacity-90 h-[180px] z-2"></div>
        <form action="" method="POST" className="flex flex-col w-[50%] justify-center z-2">
            {contactForm.map(item => {
                return (
                    <div key={item.label} className="flex flex-col z-2">
                    <label className="py-1" htmlFor={item.htmlFor}>{item.label}</label>
                    {item.label === "Message" ?
                    <textarea  type={item.type} placeholder={item.placeholder} id={item.id} className="bg-white opacity-90 px-[10px] h-[150px] py-[5px] text-black rounded-lg z-2 shadow-md"></textarea>
                    :
                    <input  type={item.type} placeholder={item.placeholder} id={item.id} className="bg-white opacity-90 px-[10px] py-[5px] text-black rounded-lg z-2 shadow-md"></input>
                    }
                    </div>
                )
            })}
            <button className="w-[120px] h-[28px] mt-[20px] text-black bg-white rounded-lg cursor-pointer">Send</button>
        </form>
    </div>
    <ShootingStars className="z-1 absolute"/>
    </section>
  )
}

export default Contact
