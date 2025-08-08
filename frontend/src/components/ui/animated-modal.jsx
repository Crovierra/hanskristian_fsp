import { twMerge } from "tailwind-merge"
import { AnimatePresence, motion } from "motion/react";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger.js"

const ModalContext = createContext(undefined);

export const ModalProvider = ({
  children
}) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({
  children
}) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
  children,
  className,
  setOpen,
  open
}) => {
  useEffect(() => {
  }, [open]);
  return (
    <button
      className={twMerge(
        "px-4 py-2 rounded-md text-white text-center relative overflow-hidden z-100",
        className
      )}
      onClick={()=> setOpen(true)}
      id="mobile_menu">
      {children}
    </button>
  );
};

export const ModalBody = ({
  children,
  className,
  open,
  setOpen
}) => {

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex z-50 items-center justify-center ">
          <Overlay />

          <motion.div
            ref={modalRef}
            className={twMerge(
              "min-h-[50%] max-h-[90%] md:max-w-[40%] bg-transparent border-transparent md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
              className
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
            >
            <CloseIcon setOpen={setOpen}/>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({
  children,
  className
}) => {
  useEffect(()=>{
    function navAnimation(){
      gsap.registerPlugin(ScrollTrigger)
      let animate = gsap.timeline({
        scrollTrigger: {
          trigger: "#experience_section",
          start: "top top",
          end: "400px",
          scrub: true,
        }
      })
      animate.add([
        gsap.to("#mobile_nav", 2, {
          backgroundColor: "#333333",
          ease: "power2.inOut"
        }),
        gsap.to("#mobile_nav_list", 2, {
          color: "#f5f5f5",
          ease: "power2.inOut"
        }),
        gsap.to("#menu_cross", 2, {
          color: "#f5f5f5",
          ease: "power2.inOut"
        })
      ])
    }

    navAnimation()
  })
  return (
    <div className={twMerge("flex flex-col flex-1 p-8 md:p-10 rounded-xl", className)}>
      {children}
    </div>
  );
};

export const ModalFooter = ({
  children,
  className
}) => {
  return (
    <div
      className={twMerge("flex justify-end p-4 bg-gray-100 dark:bg-neutral-900", className)}>
      {children}
    </div>
  );
};

const Overlay = ({
  className
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={`fixed inset-0 h-full w-full bg-transparent bg-opacity-50 z-50 ${className}`}></motion.div>
  );
};

const CloseIcon = ({setOpen}) => {
  return (
    <button onClick={() => setOpen(false)} className="absolute top-10 right-10 z-2000 group" id="menu_cross">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
export const useOutsideClick = (
  ref,
  callback
) => {
  useEffect(() => {
    const listener = (event) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
