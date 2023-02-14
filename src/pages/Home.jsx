import React from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import About from '../components/About/About'
import News from '../components/News/News'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <News/>
    </div>
  )
}

export default Home