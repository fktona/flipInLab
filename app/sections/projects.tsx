'use client'
import React from 'react'
import projects from '@/data/projects.json'
import Image from 'next/image'
import { useScroll } from '../context/scroll'
import Masonry from "react-responsive-masonry"

export default function Project() {

  const {projectRef} = useScroll as any
 
  return (
   <section
   className='lg:px-[60px]  justify-center items-start px-5 flex flex-col gap-10  lg:mt-[250px] mt-[110px]'>
    <div className=' w-full space-y-8 text-center'>
    <h2 className='text-[34px] lg:text-[50px] font-bold' >Art Showcase</h2>
    <p className='text-lg lg:text-[26px] text-white/70 '>Explore the diverse creations of Flipping Labs, each more astonishing and unique than the last. From mesmerizing artwork to groundbreaking concepts, their collections redefine the NFT landscape.</p>
    <div className='art  transition duration-300  relative'>
      
      {projects.map((project) => (
        <div key={project.id} className='artImg transition duration-300'>
         <Image src={`/art/${project.image}.png`} alt={project.image}
          width={200} height={200} className=' ' />
          {/* <span className='mt-6 text-green-900'>{project.image}</span> */}
          </div>
      ))}
    </div>
    </div>
   </section>
  )
}
