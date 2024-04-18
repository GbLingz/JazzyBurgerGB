import React from 'react'
import footerLogo from '../assets/footer22.jpg'
import TwoFourSevenLogo from '../assets/247.png'
import SecuredLogo from '../assets/padloc.png'
import AppStoreLogo from '../assets/apple.png'
import PlaystoreLogo from '../assets/google play.png'
import YoutubeLogo from '../assets/youtube.png'
import TwitterLogo from '../assets/twitter.png'
import facebookLogo from '../assets/facebook.png'
import instaLogo from '../assets/insta Logo.png'

const Footer = () => {
  return (
  <>
  <footer className= 'container bg-dark'>
    <main className="container d-flex justify-content-between align-items-center">
<section className="d-flex justify-content-between align-items-center gap-3">
  {/* div for 247 and 100% */}
<div className=''>
<img src= {TwoFourSevenLogo} alt="247-logo" className="img-fluid p-3"  />
</div>

<div>
<img src= {SecuredLogo} alt="Secured-Logo"  className="d-none d-lg-block" />
</div>
</section>

<section className="d-flex justify-content-between  align-items-center  gap-4">
    {/* div for 247 and 100% */}
<div className=''>
<img src= {AppStoreLogo} alt="Apps-Store" className="img-fluid p-3"  />
</div>

<div>
<img src= {PlaystoreLogo} alt="GooglePlay-Store"  className="d-none d-lg-block" />
</div>
</section>

{/* <img src={footerLogo} alt="" /> */}
    </main>

    <h3 className='text-light mt-5'> Need Help</h3>
    <p> <a href="#" class="text-white bg-dark"> 09064314570 or</a>  </p>
    <p> <a href="#" class="text-white bg-dark">oshotekungbolahan@gmail.com</a> </p>

    <h3 className='text-light mt-5'> FOLLOW US </h3>
{/* Div for last footer */}
<div className='d-flex mb-3'>
    <div>
      <img src= {facebookLogo} alt="Facebook" />
    </div>

    <div>
      <img src= {instaLogo} alt="Instagram" />
    </div>

    <div>
      <img src= {TwitterLogo} alt="Twitter" />
    </div>
    {/* <div>
      <img src= {YoutubeLogo} alt="Youtube" />
    </div> */}
</div>
<hr />
  </footer>

<div class="foot text-center mt-2 text-dark">
          <p>&copy;2024 JJB Concepts Developed by our Digital  LLC</p>
        </div>
  
  </>
  )
}

export default Footer