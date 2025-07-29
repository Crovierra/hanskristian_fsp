import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Experience = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const data = [
    {title: "2021", content: "Graduated from Petra Christian University", 
      detail: "During my time in college, I actively engaged in both academic and extracurricular creative work. I participated in campus organizations, collaborated on design projects, and entered several design competitions. One highlight was placing in the Top 10 of a national Banner Design Competition, which showcased my ability to combine aesthetics with strong messaging. For my final thesis, I developed an Augmented Reality (AR) Shopping App, combining visual design with interactive technology to enhance the retail experience. This project demonstrated my ability to integrate art and technology to solve real-world problems, particularly in user experience and digital product design.",
      skills: "Web Design, UI/UX, Design Knowledge"
    },
    {title: "2021 - 2024", content: "Retail Store Manager", detail: "Managed daily operations, supervised staff, and handled customer service", skills: "Communication, Management, Problem Solving, Sales"},
    {title: "2024 - 2025", content: "Full Stack Developer", detail: "Driven by a strong interest in web development, I began studying full-stack development through a mix of self-guided learning, online tutorials, and hands-on practice. In June 2024, I committed to deepening my skills by enrolling in a comprehensive Full-Stack Web Development Bootcamp on Udemy. Over the course of 6–7 months, I completed a structured curriculum that covered both front-end and back-end technologies",
      skills: "HTML5, CSS, JavaScript, React, NodeJs, ExpressJs, Database Management (SQL & NoSQL), RESTful API, CRUD, Git"
    },
    {title: "2025 - Present", content: "Independent Development & Skill Expansion", detail: "After completing the full-stack development bootcamp, I shifted my focus to applying what I learned through practical projects and exploring more advanced tools and technologies. This phase has been dedicated to Building real-world projects, exploring new frameworks and libraries, practicing responsive design and performance optimization, and learn how to secure a website. This period of self-directed development has helped me refine my problem-solving skills, stay current with industry trends.",
      skills: "Advance React, Performance Optimization, Secure Website, SEO, Debugging, Adaptability, Time-management, and Self-discipline"
    }

  ]
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(()=> {
        function contactScrollAnimation(){
            gsap.registerPlugin(ScrollTrigger)
            let animation = gsap.timeline({
                scrollTrigger: {
                    trigger: "#experience_section",
                    start: "top top",
                    end: "400px",
                    scrub: true,
                    pin: true,
                    markers: true
                }
    
            })
    
            animation.add([
                gsap.to("#experience_text", 1, {
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  return (
    <section className="bg-[#f5f5f5] min-h-screen" >
      <div className="flex flex-row h-screen relative" id="experience_section">
          <div className="absolute top-0 bg-black z-5 w-full h-[50%]" id="about_overlay_top"></div>
          <div className="absolute top-0 bg-black opacity-90 z-5 w-full h-[50%]" id="about_overlay_top2"></div>
          <p className="text-center text-6xl font-bold z-10 absolute top-[50%] left-1 right-1 hover:text-neutral-500" id="experience_text">Experience</p>
          <div className="absolute bottom-0 bg-black z-5 w-full h-[50%]" id="about_overlay_bottom"></div>
          <div className="absolute bottom-0 bg-black opacity-90 z-5 w-full h-[50%]" id="about_overlay_bottom2"></div>
      </div>
      <div
      className="w-full dark:bg-neutral-950 font-sans md:px-10 mt-[-20%]"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Experiences
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been learning Full stack for over a year. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full text-[#333333]">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold dark:text-neutral-500 z-0">
                {item.title}
              </h3>
              <p className="font-semibold">{item.content}{" "}</p>
              <br />
              {item.detail}
              <br />
              <br />
              {item.skills ? <p>From this experience, I've learn <span className="font-semibold">{item.skills}</span></p> : null }
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>

    </section>
  )
}

export default Experience
