import React from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import About from '../components/About/About'
import News from '../components/News/News'
import Project from '../components/Projectsection/Project'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <News/>
      <Project/>
    </div>
  )
}

export default Home