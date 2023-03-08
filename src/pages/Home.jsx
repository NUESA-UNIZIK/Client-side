import React from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import About from '../components/About/About'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'
import Stats from '../components/Header/Stats'
import Executives from '../components/Executives/Executives'
import Executivemobile from '../components/Executives/Executivemobile'
import Aboutcomponent from '../components/Aboutpresident/Aboutcomponent'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
      <News/>
      <Executives/>
      <Executivemobile/>
      <Aboutcomponent/>
      <Footer/>
    </div>
  )
}

export default Home