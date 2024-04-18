import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginLogo from '../assets/loginIn.svg'
import signUpLogo from '../assets/signIn.svg'

const AuthDropDown = () => {
    const [isLoggedIn, setIsLoggedIn] = useState (false)
  return (
   <>
   <main className='container shadow-lg border rounded bg-light p-2' >
    <div className='d-flex flex-column gap-3 m-3'>
        {isLoggedIn ? 
        <> 
        <Link className = 'btn btn-primary text-light f-5'> Logout </Link> 
        <Link className = 'btn btn-primary text-light f-5'> Order </Link>
        </> : 
        <> 
    <div className="d-flex bg-primary border rounded p-2 gap-3">
                <img src={loginLogo} alt="log-in-logo" />
                <Link className="btn btn-primary text-light f-5" to="/SignIn">
                  Login
                </Link>
              </div>
              <div className='d-flex p-2 gap-3 border-danger border rounded'>
                <img src={signUpLogo} alt="Log-out-logo" />
                <Link className="btn text-danger fw-bolder" to="/SignUp">
                  SignUp
                </Link>
              </div>

        </>}
    </div>

   </main>
   </>
  )
}

export default AuthDropDown