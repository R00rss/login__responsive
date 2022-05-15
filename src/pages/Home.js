import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='home__container'>
        <Navbar/>
        Contenido
        <Footer/>
    </div>
  )
}

export default Home