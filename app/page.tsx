import React from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import Mission from './sections/mission'
import Project from './sections/projects'
import Video from './components/video'
import Live from './sections/live'
import Team from './sections/team'
import Footer from './sections/footer'
import MobileNav from './components/mobileNav'

export default function Page() {
  return (
   <main className='relative max-w-[1440px] mx-auto'>
      <MobileNav/>
      <Nav />
      <Hero />
      <Mission />
      <Project />
      <Video />
      <Live />
      <Team/>
      <Footer/>
   </main>
  )
}
