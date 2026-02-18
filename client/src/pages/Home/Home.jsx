import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
// import Testimonials from './Testimonials/Testimonials'
import WeOffer from './OurProducts/OurProducts'
import Clients from './Clients/Clients'
import Projects from './Projects/Projects'

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <About />
      <WeOffer />
      <Projects />
      <Clients />
    </div>
  )
}

export default Home