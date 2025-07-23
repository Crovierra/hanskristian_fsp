import React from 'react'

const Navbar = () => {
  const navList = [
    {text: "Home", link:"/"},
    {text: "About", link:"/"},
    {text: "Work", link:"/"},
    {text: "Contact", link:"/"},
  ]
  const langList = ["ID", "EN"]
  return (
    <nav className="flex flex-row fixed top-3 left-3 right-3 px-[30px] bg-none backdrop-blur-xs text-white justify-between items-center h-[40px] shadow-lg z-50 rounded-lg" id="navbar">
        <p href="/" className="">Hans Kristian</p>
        <div className="flex flex-row gap-2 pl-[60px]">
            {langList.map(item => {
              return (
                <button key={item} className="cursor-pointer hover:text-neutral-300">{item}</button>
              )
            })}
        </div>
        <ul className="flex flex-row gap-4">
            {navList.map(item => {
              return (
                <li key={item.text}><a  href={item.link} className="hover:text-neutral-300">{item.text}</a></li>
              )
            })}
        </ul>
    </nav>
  )
}

export default Navbar
