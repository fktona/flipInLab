'use client'
import React from 'react'
import team from '@/data/team.json'
import Image from 'next/image'
import { useScroll } from '../context/scroll'
export default function Team() {
    const {teamRef} = useScroll() as any
  return (
    <section ref={teamRef}
    className='px-5 lg:px-[100px] bg-[#0A0E0D] space-y-[51px] lg:mt-[170px] mt-[80px] py-10 lg:py-[100px] '>

        <h2 className='text-center w-full font-bold text-[23px] lg:text-[30px]'>
        Meet the Team
        </h2>
        <div className='md:grid hidden grid-cols-4 gap-5 px-[105px]'>
            {
                team.filter((o) => o.id < 5).map((o) =>(
                   <div key={o.id} className=' flex flex-col text-center items-center  gap-3 justify-center'>
                    <Image alt={o.name} src={`/team/${o.image}.png`} width={200} height={200} className='rounded-md w-full '/>
                    <p className='text-xl font-semibold '>{o.name}</p>
                    <p className='text-[10px] text-white/70'>{o.description}</p>
                    <a href={`https://twitter.com/${o.xhandle}`} target='_blank'>
                    <Image alt='xhandle' src={`/socials/x.svg`} width={20} height={20} className='cursor-pointer' />
                    </a>
                    </div>

                ))
            }
        </div>
        <div className='md:grid hidden grid-cols-5 gap-5 '>
            {
                team.filter((o) => o.id > 4).map((o) =>(
                   <div key={o.id} className='w-full flex flex-col text-center items-center  gap-3 justify-center'>
                    <Image alt={o.name} src={`/team/${o.image}.png`} width={200} height={200} className='rounded-md w-full' />
                    <p className='text-xl w-full  font-semibold'>{o.name}</p>
                    <p className='text-[10px] w-full  text-white/70'>{o.description}</p>
                    <a href={`https://twitter.com/${o.xhandle}`} target='_blank'>
                    <Image alt='xhandle' src={`/socials/x.svg`} width={20} height={20} className='cursor-pointer' />
                    </a>
                    </div>

                ))
            }
        </div>
        <div className='grid md:hidden grid-cols-3 gap-5 '>
            {
             team.map((o) =>(
                   <div key={o.id} className=' flex flex-col text-center items-center  gap-3 justify-center'>
                    <Image alt={o.name} src={`/team/${o.image}.png`} width={200} height={200} className='rounded-md w-full '/>
                    <p className='text-[12px] font-semibold '>{o.name}</p>
                    <p className='text-[6px] text-white/70'>{o.description}</p>
                    <a href={`https://twitter.com/${o.xhandle}`} target='_blank'>
                    <Image alt='xhandle' src={`/socials/x.svg`} width={20} height={20} className='cursor-pointer' />
                    </a>
                    </div>

                ))
            }
        </div>

    </section>
  )
}
