import React from 'react'
import social from '@/data/social.json'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='px-5 lg:px-[100px]  space-y-[51px] lg:mt-[130px] mt-[40px] py-10 lg:py-[100px]'>

        <div className='lg:px-[140px] space-y-10'>
            <h2 className='text-[30px] font-bold text-center '>Our Socials</h2>
            <div className='lg:flex cursor-pointer grid grid-cols-3 place-items-center lg:gap-2 gap-4 justify-center'>
            {
                social.map((o) => (
                    <a  key={o.id} href={o.link} target='_blank'>
                    <div  className='w-[80px] socials aspect-square flex items-center justify-center bg-[#0A0E0D] rounded-[6px]'>
                     <Image alt={o.image} src={`/socials/${o.image}.svg`} width={46} height={46} className='' />
                    </div>
                    </a>
                ))
            }
            </div>
        </div>
        <div className='mt-[94px] lg:pt-10 lg:border-t-[1px] border-white/70 flex items-center 
            flex-col-reverse lg:flex-row gap-4 lg:justify-between'>
            <p className='lg:text-xl text-[15px] text-white/70'>
            © TheFlippinLabs 2024 - All Rights Reserved
            </p>

            <Image alt='logo' src={'/logo.png'} width={150} height={150}/> 

        </div>

    </footer>
  )
}
