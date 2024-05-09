'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import heroImage from '@/data/heroImage.json'
import { useScroll } from '../context/scroll'
import { motion, useInView, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Hero () {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
    margin: "-200px",
  });

  let [moveRef, { width }] = useMeasure();
  const xTrans = useMotionValue(0);

  useEffect(() => {
    let controls;

    let finalPosition = -width / 2 + 8;
    controls = animate(xTrans, [0, finalPosition], {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => controls.stop();
  }, [width, xTrans]);


   const {aboutRef} = useScroll() as any
  return (
    <main ref={aboutRef} className=''>
    <motion.div  className='lg:px-[112px] px-5  relative md:px-10 md:mt-[40px] lg:mt-[79px] 
     flex justify-between  lg:flex-row flex-col gap-[29px]  '>
        <div className='flex  lg:flex-col relative gap-8 md:min-w-[40%] mt-[67px] md:mt-0 justify-start   w-full'>
        <p className='lg:text-[64px] md:text-[55px]  font-bold relative text-[34px]'> 
        Welcome to <br/> Flipping Labs
        </p>
        <Image alt='star' src='/star.svg' width={42} height={42} />
        </div>
        <p className='text-white/85 text-[18px] lg:text-[28px] leading-normal'>
        Where community comes first. Born out of resilience and dedication,
         Flipping Labs emerged from the aftermath of a project&apos;s rug pull.
          Determined not to abandon their community, Flippin&apos; and Niffty joined forces,
           with Nifty&apos;s 
          support, Flippin&apos; decide to create the Flippin&apos; Labs. 
        </p>

    </motion.div>
    <div className=' relative w-[100vw] overflow-x-scroll md:overflow-x-hidden '>
         <motion.div
    ref={moveRef}
    style={{ x: xTrans }} 
    className=' bottom-0 flex     
      gap-[9px]  mt-20 md:mt-[120px] lg:mt-[150px] '>
          {[...heroImage,...heroImage].map((image, index) => (
            <Image key={index} alt={image.image} src={`/hero/${image.image}.png`} width={290}
             height={290} className=' w-full'  />
          ))}
        </motion.div>
        </div>
 
    </main>
  )
}
