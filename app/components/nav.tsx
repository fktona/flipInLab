'use client'
import React from 'react'
import Image from 'next/image'
import { useMenu } from '../context/menuContext'
import { useScroll } from '../context/scroll'
import { delay, motion } from 'framer-motion'

export default function Nav() {

  const { scrollToSection,
    aboutRef,
    missionRef,
    projectRef,
    teamRef,
   } = useScroll() as any;

  const { openMenu, handleOpenMenu } = useMenu();

  const bounce = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 , y: 20},
    visible: { opacity: 1 , y: 0},
  };

  
  return (
    <nav className='relative flex justify-between z-[50]
     items-center md:items-start lg:px-[109px]  lg:mt-[62px] px-5 mt-[50px]'>
      <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}>
        
        <Image alt='Flip In Labs' src='/logo.png' width={168} height={92} />
        </motion.div>
        <ul className=' text-5  font-normal cursor-pointer text-white md:flex hidden lg:gap-[40px] 
        
        gap-10 justify-center items-center'>
            <motion.li
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ type: 'keyframes', values: [0, -10, 0], times: [0, 0.5, 1], duration: 0.2 }}
              className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(aboutRef) }>About</motion.li>
            <motion.li
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.2, delay: 0.3 , damping:60 }}
              className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(missionRef)}>Our Mission</motion.li>
            <motion.li
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.5, delay: 0.4 }}
              className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(projectRef)}>Projects</motion.li>
            <motion.li 
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.5, delay: 0.5 }}
             className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(teamRef)}>Team</motion.li>
        </ul>

        <div
        onClick={handleOpenMenu}
        className="gap-[3px] z-[77777] md:hidden cursor-pointer relative flex flex-col"
      >
        <span
          className={`${openMenu ? "rotate-45 top-1" : ""} transition-all duration-300 delay-75 w-[42px]   h-[6px] relative bg-white`}
        ></span>
        <span
          className={` ${openMenu ? "-rotate-45 bottom-1" : ""} w-[42px]  transition-all duration-300 delay-75 relative  h-[6px] bg-white`}
        ></span>
        <span
          className={`${openMenu ? "-bottom-3" : ""} transition-all duration-300  w-[42px] relative   h-[6px] bg-white`}
        ></span>
      </div>


    </nav>
  )
}
