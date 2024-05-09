'use client'
import React from 'react'
import Image from 'next/image'
import { useScroll } from '../context/scroll'

export default function 
Video() {
  const {projectRef} = useScroll() as any
  return (
    <section ref={projectRef} className='px-5 lg:px-[100px] relative mt-[80px] lg:mt-[150px]'>
    <div className='bg-[#0A0E0D] rounded-md  min-h-[70vh] flex items-center justify-center '>
        <div className='p-4 w-fit rounded-full bg-[#d9d9d9]/30'>
         <Image alt='video' src='/play.svg' width={61} height={611} className='' />

        </div>
        
    </div>
    </section>
  )
}
