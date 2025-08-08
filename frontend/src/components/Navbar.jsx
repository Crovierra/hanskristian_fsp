import React from 'react'
import { ModalBody, ModalContent, ModalProvider, ModalTrigger, useModal } from './ui/animated-modal'

const Navbar = () => {
  const navList = [
    {text: "Home", link:"/"},
    {text: "About", link:"#about_section"},
    {text: "Work", link:"#experience_section"},
    {text: "Contact", link:"#contact_section"},
  ]
  const [open, setOpen] = React.useState(false)
  React.useEffect(()=>{
  }, [open])
  return (
    <ModalProvider>
    <nav className="flex flex-row fixed top-3 left-3 right-3 px-[30px] bg-none backdrop-blur-xs max-w-screen text-white justify-between items-center h-[40px] shadow-lg z-50 rounded-lg" id="navbar">
        <p href="/" className="">Hans Kristian</p>
        <div className="flex flex-row gap-2 pl-[60px]">
            <a className="cursor-pointer hover:text-neutral-300 " href="/Hans_CV.pdf" download="Hans_CV.pdf">CV</a>
        </div>
        <ul className="flex flex-row gap-4 max-sm:hidden">
            {navList.map(item => {
              return (
                <li key={item.text}><a  href={item.link} className="hover:text-neutral-300">{item.text}</a></li>
              )
            })}
        </ul>
        <ModalTrigger className="min-sm:hidden" setOpen={setOpen} open={open}>
        Menu
        </ModalTrigger>
    </nav>
    {open ? (
      <ModalBody open={open} setOpen={setOpen}>
        <ModalContent>
            <div className="flex flex-row bg-[#f5f5f5] justify-center items-center rounded-lg min-w-[80%] min-h-[400px] p-[5%]" id="mobile_nav">
                <ul className="flex flex-col gap-4 text-[#333333] font-semibold text-4xl" id="mobile_nav_list">
                    {navList.map(item => {
                      return (
                        <li key={item.text}><a  href={item.link}>{item.text}</a></li>
                      )
                    })}
                </ul>
            </div>
        </ModalContent>
      </ModalBody>
    ) : null}
    </ModalProvider>
  )
}

export default Navbar
