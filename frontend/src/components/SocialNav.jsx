import React from 'react'

const SocialNav = () => {
  const socialIcon = [{
    name: "Github icon",
    asset: "/github-purple.webp",
    link: "https://github.com/Crovierra"
  },
  {
    name: "Linkedin icon",
    asset: '/linkedin.webp',
    link: "https://www.linkedin.com/in/hanskristtian/"
  },
  {
    name: "Instagram icon",
    asset: '/instagram.webp',
    link: "https://instagram.com/hanskristtian"
  }
]
  return (
    <nav className="flex flex-row fixed bottom-5 w-screen justify-center items-center z-50">
        <ul className="flex flex-row gap-4 w-[150px] bg-none backdrop-blur-xl justify-center items-center rounded-lg py-[4px] shadow-md">
            {socialIcon.map((item, index) => {
              return (
                <li key={index}><a href={item.link} target="_blank"><img src={item.asset} className="w-8 h-8 transform-all duration-300 hover:translate-y-[-3px] hover:grayscale-0 grayscale-100" alt={item.name}/></a></li>
              )
            })}
        </ul>
    </nav>
  )
}

export default SocialNav