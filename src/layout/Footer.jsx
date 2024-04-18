import React from 'react'
import QuestionLogo from '../assets/New Question.png'
import twoFourLogo from '../assets/New Padloc.png'
import AppStoreLogo from '../assets/Appstore.svg'
import PlayStoreLogo from '../assets/google pay.svg'
import youTubeLogo from '../assets/New Youtube.jpg'
import TwitterLogo from '../assets/twitter.png'
import facebookLogo from '../assets/facebook.png'
import instaLogo from '../assets/insta Logo.png'

const Footer = () => {
  return (
  <>
  <footer className= 'container bg-dark'>
  <main className="container text-white py-5">
    {/* section 1 */}
<section className="d-lg-flex justify-content-between">
  {/* Parent Div*/}
<div className='flex-column-reverse flex-lg-row d-flex'>
  {/* Div for 24/7  */}
  <div className='d-lg-flex'> 
<img src= {QuestionLogo} alt="Secured-Logo"/>
<h2>
  24/7 <span> Support </span>
</h2>
  </div>
  {/* div for 100 text and logo */}
  <div className='d-lg-flex'>
  <img src= {twoFourLogo} alt="247-logo"/>
  <h2>
    100% <br /> <span> Payment Secured</span>
  </h2>
  </div>
</div>
{/* parent div for apple and google logo */}
<div className='d-lg-flex gap-4'>
  {/* div for appleimg */}
<div>
<img src= {AppStoreLogo} alt="Apps-Store"/>
</div>
{/* div for googleimg */}
<div>
<img src= {PlayStoreLogo} alt="GooglePlay-Store" />
</div>
</div>
</section>

{/* <img src={footerLogo} alt="" /> */}
    </main>
    <h3 className='text-light mt-5'> Need Help</h3>
    <p> <a href="#" class="text-white bg-dark"> 09064314570 or</a>  </p>
    <p> <a href="#" class="text-white bg-dark">oshotekungbolahan@gmail.com</a> </p>

    <h3 className='text-light mt-5'> FOLLOW US </h3>
{/* Div for last footer */}
<div className='d-flex mb-3 gap-3'>
    <div>
      <img src= {facebookLogo} alt="Facebook" />
    </div>

    <div>
      <img src= {instaLogo} alt="Instagram" />
    </div>

    <div>
      <img src= {TwitterLogo} alt="Twitter" />
    </div>

    <div>
      <img src= {youTubeLogo} alt="youtube" />
    </div>

</div>
  </footer>

  <p className="text-center">&copy; JJB Concepts <span className="fw-bolder fs-3"> . </span> Developed by our Digital LLC </p>
  
  </>
  )
}

export default Footer