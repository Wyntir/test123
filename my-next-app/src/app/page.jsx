'use client'

import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Stats />
      <About />
    </>
  )
}