import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex flex-row fixed top-0 left-0 right-0 px-[30px] text-white bg-none justify-between items-center h-[40px] shadow-md z-50">
        <p href="/" className="">Hans Kristian</p>
        <div className="flex flex-row gap-2 pl-[60px]">
            <button className="cursor-pointer">ID</button>
            <button className="cursor-pointer">EN</button>
        </div>
        <ul className="flex flex-row gap-4">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
