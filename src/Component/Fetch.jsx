import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import jazzyImg from '../assets/Jazzypic.jpg'
import CheezeImg from '../assets/cheese.png'
import onionImg from '../assets/onion.png'
import vegetableImg from '../assets/vegetable.png'
import breadImg from '../assets/bread.png'
import eggImg from '../assets/egg.png'
import LoveImg from '../assets/heart.png'



const Fetch = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const fetchRequest =async ()=> {
        try{
            setIsLoading (true)
            const req = await
            fetch ('https://jazzy-mern.onrender.com/api/products');
            const res = await req.json ();
            console.log(res.products);
            setData (res.products)
        }catch (error){
            console.log(error.message);
        } finally {
            setIsLoading (false)
        }
    }
    console.log(data);
    useEffect (()=> {
        fetchRequest()
    }, [])

    return (
  <>
   {isLoading && <> <Spinner animation="border" /> </>}
 <main className='container d-flex flex-wrap justify-content-center gap-3'>
         
            {data.map((datum) => {
              const {id, title, image, price, category} = datum

              return(
                <div className='position-relative' key={id}>
                    <div className='d-flex position-absolute end-0 top-0'>
                        <img src= {LoveImg} alt="" />
                    </div>
                    <h1> <img src={image} alt="" /></h1>
                    <h6>{title}</h6>
                    <p className='mt-4'>Total Price</p>
                    <h4>N{price}</h4>
                    <p> </p>
                    <div>
                        <img src={CheezeImg} alt="" />
                        <img src={onionImg} alt="" />
                        <img src={vegetableImg} alt="" />
                        <img src={breadImg} alt="" />
                        <img src={eggImg} alt="" />
                    </div>
                    <button className='btn btn-danger w-100'> ➕ Add to Cart</button>

                </div>
                
              )
            })}
  </main>
  
  </>
  )
}

export default Fetch