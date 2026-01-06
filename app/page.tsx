import Projects from '@/sections/Projects'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import React from 'react'
import Testimonials from '@/sections/Testimonials'

export default function page() {
  return (
    <div>
      <Hero/>
      <About /> 
      <Projects />
      <Testimonials />
    </div>
  )
}
