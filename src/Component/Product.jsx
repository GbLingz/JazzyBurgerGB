import React from 'react'
import jazzyPic from '../assets/Jazzypic.jpg'
import Fetch from './Fetch'

const Product = () => {
  return (
   <>
   <main className='my-5 row'>
    {/* div-1 */}
    <div className='d-none d-lg-block col-lg-3'>
        <img src={jazzyPic} alt="Jazzy-Pic" className='w-100 h-100'/>
    </div>
    {/* div-2 */}
    <div className='col-lg-9'>
        <div> 
        <Fetch/>
        </div>

    </div>

   </main>
   
   </>
  )
}

export default Product