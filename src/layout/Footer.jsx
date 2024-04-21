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
  <footer className="bg-black">
        <main className="text-white container py-5 text-center">
          {/* section-1 */}
          <section className="d-lg-flex justify-content-between ">
              {/* parent div */}
            <div className="flex-column-reverse flex-lg-row d-flex  mb-5">
              {/* div for 24/7 text and logo */}
              <div className="d-lg-flex">
<img src= {QuestionLogo} alt="Secured-Logo"/>
<div className="">
<h2 className="text-lg-center ms-2 fs-2  ">  24/7 
</h2>
<p>Support</p>
</div>
</div>
 {/* div for 100% text and logo */}
 <div className="d-lg-flex justify-content-center align-items-center mx-5">
  <img src= {twoFourLogo} alt="247-logo"/>
  <div className="ms-1 ">
                <h2 className="text-lg-center ">
                  100% 
                </h2>
                <p>Payment Secured</p>
                </div>
              </div>
            </div>

 {/* parent div for apple and google logo */}
 <div className="d-lg-flex gap-4">
                {/* div for appleImg  */}
                <div className="w-75 mx-auto mb-4">

<img src= {AppStoreLogo} alt="Apps-Store" className="img-fluid" />
</div>
                {/* div for googleImg  */}
                <div className="w-75 mx-auto">
<img src= {PlayStoreLogo} alt="GooglePlay-Store" 
className='img-fluid' />
    </div>
            </div>
          </section>


{/* <img src={footerLogo} alt="" /> */}
          
          {/* section-2 */}
          <section className="text-lg-start ">
            <h4>Need Help</h4>
            <p><span className="text-decoration-underline fw-bold">+234 907 466 6655</span> <span>or</span></p> 
            <p className="text-decoration-underline fw-bold">help@jazzysburger.com</p>

            <div>
              <h3>FOLLOW US</h3>
{/* Div for last footer */}
<div className='d-flex gap-3'>
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

            </div>
          </section>
        </main>
      </footer>
      <p className="text-center">&copy; JJB Concepts <span className="fw-bolder fs-3 "> . </span> Developed by our Digital LLC </p>
  </>
  )
}

export default Footer