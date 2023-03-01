import React from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import About from '../components/About/About'
import News from '../components/News/News'
import Project from '../components/Projectsection/Project'
import Staff from '../components/Staffs/Staff'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <News/>
      <Project/>
      <Staff/>
      <Footer/>
    </div>
  )
}

export default Home