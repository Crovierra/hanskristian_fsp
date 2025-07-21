import { useState } from "react"
export const useMail = () => {
    const [mail, setMail] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [loadingMail, setLoadingMail] = useState(false)
    const [mailNotification, setNotification] = useState({
        success: "",
        fail: ""
    })
    async function sendMail(e){
        e.preventDefault()
        try {
            // console.log("Mail saved :", mail)
            setLoadingMail(true)
            // const response = await fetch(`${import.meta.url.REACT_VITE_BACKEND_URL}/mail`,{
            //     method: "POST",
            //     headers: {"Content-Type" : "application/json"},
            //     body: JSON.stringify(mail) 
            // })

            // if(!response.ok) throw new Error(response.message)
            
            setNotification({success: "Message sent"})
            
        } catch (error) {
            console.log("Failed to send message to user :", error.message)
            setNotification({fail: "Failed to send message"})
        } finally {
            setTimeout(()=> {
                setLoadingMail(false)
                setTimeout(() =>{
                    setNotification({success: "", fail: ""})
                }, 3000)
            }, 2000)
        }
    }

    return {mailNotification, loadingMail, sendMail, setMail, mail}
}