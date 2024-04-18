import React, { useEffect } from 'react'
import Hero from '../Component/Hero'
import Product from '../Component/Product'
import Footer from '../layout/Footer'


const Home = () => {
  useEffect (()=>{
document.title = "Home | Page"
  })
  return (
    <>
    <main className='container'>
      <Hero/>
      <Product/>
      
    </main>

    </>
  )
}

export default Home