'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import heroImage from '@/data/heroImage.json'
import { useScroll } from '../context/scroll'
import { motion, useInView, animate, useMotionValue, delay } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Hero () {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
    margin: "-200px",
  });

  const bounce = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };



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

  const fadeIn = {
    hidden: { opacity: 0 , y: 100},
    visible: { opacity: 1 , y: 0},
  };
  

   const {aboutRef} = useScroll() as any

   const titleAnimation = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.1,
      }
    }
  }

  const titleAnimationChildren = {
    hidden:{
      y:-40,
      opacity:0
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        ease:'easeInOut',
      }
    }
  }
  const titleAnimation2 = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.1,
        delay:0.7
      }
    }
  }

  const titleAnimationChildren2 = {
    hidden:{
      y:40,
      opacity:0
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        ease:'easeInOut',
      }
    }
  }


  return (
    <main ref={aboutRef} className=''>
    <motion.div  className='lg:px-[112px] px-5  relative md:px-10 md:mt-[40px] lg:mt-[79px] 
     flex justify-between  lg:flex-row flex-col gap-[29px]  '>
        <div className='flex  lg:flex-col relative gap-5 md:min-w-[45%] mt-[67px] md:mt-0
        items-center lg:items-start justify-start   w-full'>
        <motion.div
        
        className='lg:text-[64px] md:text-[55px] flex gap-4 flex-col justify-start  font-bold relative text-[34px] '> 
        <motion.div
        variants={titleAnimation}
        initial="hidden" 
        animate="show"
        className='flex'>
        {
          Array.from('Welcome to').map((letter, index) => (
            <motion.span className={`relative ${index ===6 && 'mr-4'}`} key={index} variants={titleAnimationChildren}>
              {letter}
            </motion.span>
          ))
        }
        </motion.div>
        <motion.div
        variants={titleAnimation2}
        initial="hidden"
        animate="show"
        className='flex'>
         {
          Array.from('Flippin Labs').map((letter, index) => (
            <motion.span className={`relative ${index ===6 && 'mr-4'}`} key={index} variants={titleAnimationChildren2}>
              {letter}
            </motion.span>
          ))
        }
         </motion.div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.9 }}>
        <Image alt='star' src='/star.svg' width={42} height={42} />
        </motion.div>
        </div>
        <motion.p
         variants={fadeIn}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.3, delay:1.6 }}
         
        className='text-white/85 text-[18px] lg:text-[28px] leading-normal'>
        Where community comes first. Born out of resilience and dedication,
         Flipping Labs emerged from the aftermath of a project&apos;s rug pull.
          Determined not to abandon their community, Flippin&apos; and Niffty joined forces,
           with Nifty&apos;s 
          support, Flippin&apos; decide to create the Flippin&apos; Labs. 
        </motion.p>

    </motion.div>
    <div className=' relative w-[100vw] overflow-x-scroll md:overflow-x-hidden '>
         <motion.div
    ref={moveRef}
    style={{ x: xTrans }} 
          variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.2, delay: 1.3 }}
    className=' bottom-0 flex     
      gap-[9px]  mt-20 md:mt-[120px] lg:mt-[150px] '>
          {[...heroImage,...heroImage].map((image, index) => (
            <Image key={index} alt={image.image} src={`/hero/${image.image}.png`} width={290}
             height={290} className=' w-full md:max-h-[450px] max-h-[250px]'  />
          ))}
          
        </motion.div>
        </div>
 
    </main>
  )
}
