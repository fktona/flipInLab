'use client'
import React from 'react'
import Image from 'next/image'
import { useScroll } from '../context/scroll'
import ReactPlayer from 'react-player'
import { useState } from 'react'

export default function 
Video() {
  const {projectRef} = useScroll() as any
  const [playVideo , setPlayVideo] = useState(false)
  return (
    <section ref={projectRef} className='px-5 lg:px-[100px] relative mt-[80px] lg:mt-[150px]'>
    <div className='bg-[#0A0E0D] rounded-md  min-h-[70vh] flex items-center justify-center '>
      {
        !playVideo ?
      
        <div className='p-4 w-fit rounded-full bg-[#d9d9d9]/30'>

        <button onClick={() => setPlayVideo(true)}> <Image alt='video' src='/play.svg' width={61} height={61} className='' /></button>
        </div>:

        <ReactPlayer
          className='z-50'
          url='https://firebasestorage.googleapis.com/v0/b/pixel-thumbs.appspot.com/o/WhatsApp%20Video%202024-05-08%20at%208.29.39%20PM.mp4?alt=media&token=ba26ba1d-70ef-4667-859b-c36f61beb32c'
          width='100%'
          height='70vh'
          playing={playVideo}
          controls={true}

        />}

        
    </div>
    </section>
  )
}
