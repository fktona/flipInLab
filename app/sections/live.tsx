'use client'
import monarchy from '@/data/live/monarchy.json'
import Image from 'next/image'
import { useState } from 'react'
import { useScroll } from '../context/scroll'
import { motion, useInView } from 'framer-motion'
import React,  { useRef } from 'react'

export default function Live() {
  const {projectRef} = useScroll as any
  const ref = useRef<HTMLDivElement>(null);
   const [option , setOption] = useState({
        monarchy: true,
        darkMonarchy: false,
        missDaisy: false,
        spaceHunter: false,
        sunriseWarrior: false
         })

         const [currentKey, setCurrentKey] = useState('monarchy');

         const handleClick = (e:any) => {
           const newOption = {
             monarchy: false,
             darkMonarchy: false,
             missDaisy: false,
             spaceHunter: false,
             sunriseWarrior: false,
             [e.target.id]: true
           };
         
           setOption(newOption);
           for (let key in newOption) {
             if (newOption[key] === true) {
               setCurrentKey(key);
               break;
             }
           }
         };
        



  return (
    <motion.div   className='px-5 lg:px-[100px]  mb-8 lg:mt-[170px] mt-[80px]'>
        <motion.div
         className='relative space-y-8'>
            <h2 className='text-[24px] lg:text-[30px] font-bold'>Live & Upcoming Projects</h2>
            <p className='text-lg lg:text-[20px] '>Flipping Labs use diverse techniques and 
            tools from ai to traditional methods, including Photoshop, hand-drawing, and craftsmanship to 
            add uniqueness to our work,
             ensuring each piece is one-of-a-kind.</p>
        </motion.div>
        <ul className=' lg:px-10 relative overflow-x-scroll h-[100px] md:h-full overflow-y-hidden lg:overflow-visible cursor-pointer  mt-[57px] group px-4
         flex justify-start items-center lg:gap-[50px] gap-4 text-lg 
        lg:text-[25px] text-[15px] text-white/70'>
            <li 
            id='monarchy'
            onClick={handleClick}
             className={` relative  hover:text-white/90  lg:w-[60%] whitespace-nowrap text-center ${option.monarchy && 'list text-white'}`}>Monarchy</li>
            <li 
            id='darkMonarchy'
            onClick={handleClick}
            className={`relative lg:w-[80%]  hover:text-white/90   text-center whitespace-nowrap
             ${option.darkMonarchy && 'list  text-white '}`}>Dark monarchy</li>
            <li 
            id='missDaisy'
            onClick={handleClick}
            className={`relative lg:w-[60%]  hover:text-white/90  text-center whitespace-nowrap ${option.missDaisy && 'list  text-white'}`}>Miss Daisy</li>
            <li 
            id='spaceHunter'
            onClick={handleClick}
            className={`relative  hover:text-white/90 whitespace-nowrap ${option.spaceHunter && 'list  text-white'} w-[70%]  text-center`}>Space hunter</li>
            <li 
            id='sunriseWarrior'
            onClick={handleClick}
            className={`relative  hover:text-white/90 whitespace-nowrap transition duration-300 lg:w-[80%]  text-center ${option.sunriseWarrior && 'list  text-white'}`}>Sunrise warrior</li>
        </ul>
        {/* <div className='relative w-full h-[1px]  mt-[20px] lg:mt-[25px] bg-white/60'></div> */}
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 relative mt-[67px] lg:px-10 '>
            {
         monarchy.map((project) => (

            <Image key={project.id} src={`/${currentKey}/${project.image}.png`} alt={project.image}
             width={290} height={290} className='w-full h-full' />
                        
                ))
            }
        </div>
        {/* <p className='text-semibold lg:text-[30px] text-[18px] lg:mt-[45px] mt-[20px] px-10 '>View more <Image src='/Arrow.png' 
        alt='arrow' width={50} height={50} className='inline w-8' />
        </p> */}
    </motion.div>
    
  )
}
