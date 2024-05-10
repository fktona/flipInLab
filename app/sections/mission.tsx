'use client'
import React from 'react'
import Image from 'next/image'
import { useScroll } from '../context/scroll'
import { useInView ,motion } from 'framer-motion'
import { useRef } from 'react'


export default function 
Mission() {
  const {missionRef} = useScroll() as any
const inView = useInView(
  missionRef,
  {
    amount:'some',
    once:true,
    margin:'-20px'

  })


  const fadeIn = {
    hidden: { opacity: 0 , y: 100},
    visible: { opacity: 1 , y: 0},
  };
  
  const fadeleft =  {
    hidden: {  opacity: 0 , x: -100},
    visible: { opacity: inView &&  1 , x: 0},
  };

  return (
    <motion.section ref={missionRef}
    className=' relative lg:px-[100px] lg:mt-[350px]  px-5
    flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-[106px] md:mt-[150px] items-center justify-center mt-[80px] '>
        <motion.div 
        animate={{opacity:inView ? 1:0 , y:inView ?0:50}}
        transition={{duration:0.2, ease:'linear', delay:0.2}}
        className='relative flex flex-col gap-[41px]'>
            <h2  className='lg:text-[50px] text-[34px] font-bold'>Our Mission</h2>
            <p className='text-lg lg:text-[30px] text-white/80'> Our mission is to empower and support our 
            members, fostering a thriving and resilient community. With an extraordinary team assembled, 
            we were ready to etch the name of the Flippin’Labs into history.
            </p>
        </motion.div>
        <motion.div
         animate={{opacity:inView ? 1:0 , x:inView ?0:50}}
         transition={{duration:0.2, ease:'linear'}} className='relative'>
        <Image alt='book' src='/mission.png' width={612} height={500} className='w-full max-w-[357px] 
        h-[307px] lg:min-w-[612px] lg:h-[500px]' />
        </motion.div>

    </motion.section>
  )
}
