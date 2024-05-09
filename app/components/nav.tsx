'use client'
import React from 'react'
import Image from 'next/image'
import { useMenu } from '../context/menuContext'
import { useScroll } from '../context/scroll'

export default function Nav() {

  const { scrollToSection,
    aboutRef,
    missionRef,
    projectRef,
    teamRef,
   } = useScroll() as any;

  const { openMenu, handleOpenMenu } = useMenu();
  return (
    <nav className='relative flex justify-between z-[50]
     items-center md:items-start lg:px-[109px]  lg:mt-[62px] px-5 mt-[50px]'>
        <Image alt='Flip In Labs' src='/logo.png' width={168} height={92} />
        <ul className=' text-5  font-normal cursor-pointer text-white md:flex hidden lg:gap-[40px] 
        
        gap-10 justify-center items-center'>
            <li className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(aboutRef) }>About</li>
            <li className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(missionRef)}>Our Mission</li>
            <li className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(projectRef)}>Projects</li>
            <li className='navHover px-4 py-2 rounded-[89px] transition-all duration-300' onClick={() => scrollToSection(teamRef)}>Team</li>
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
