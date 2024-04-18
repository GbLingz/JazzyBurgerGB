import React from 'react'
import heroImg from '../assets/Hero Section101.jpg'
import '../Styles/Hero.css'

const Hero = () => {
  return (
   <>
   <main className='my-3'>
    <img src= {heroImg} alt="hero-img" className='img-fluid w-100 hero-img' />
   </main>
   
   </>
  )
}

export default Hero