import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../assets/navLogo.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"



const SignUp = () => {
  const [isReveal, setIsReveal] = useState (false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  function handleToggle (){
    !isReveal ? setIsReveal (true) : setIsReveal (false)
  }
  useEffect (()=> {
    document.title = 'Sign Up | Page'
  })
  return (
   <>
 <main className='container vh-50 d-flex flex-column my-3'>
  <div className=''>
    <div className='text-center'>
    <Link to='/'>
    <img src= {navLogo} alt="Jazzy-Logo" />
    </Link>
    </div>
    <h2 className='fs-3 fw-bold my-4 text-center w-75 m-auto'>
      CREATE YOUR ACCOUNT
    </h2>


    {/* FORM */}
    <Form className='w-75 m-auto ' onSubmit={handleSubmit(onSubmit)}> 
      {/* input for first name */}
      <Form.Label className='fs-6 text-secondary'>  First Name </Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="Input Your First Name"
        className="mb-3" >
        <Form.Control type="firstName" placeholder="Please input first name" className='border border-3 rounded-3' {...register("firstName", { required: true })}/>
        {errors.firstName && <span className='text-danger fw-bold'>This field is required</span>}
      </FloatingLabel>


    
      {/* input for Last name */}
      <Form.Label className='fs-6 text-secondary'>  Last Name </Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="Input Your Last Name"
        className="mb-3" >
        <Form.Control type="lastName" placeholder="Please input last name" className='border border-3 rounded-3' {...register("lastName", { required: true })}/>
        {errors.lastName && <span className='text-danger fw-bold'>This field is required</span>}
      </FloatingLabel>


          {/* input for email */}

    <Form.Label className='fs-6 text-secondary'>  Email </Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="example@mail.com"
        className="mb-3" >
        <Form.Control type="email" placeholder="name@example.com" className='border border-3 rounded-3' {...register("email", { required: true })}/>
        {errors.email && <span className='text-danger fw-bold'>This field is required</span>}
      </FloatingLabel>


          {/* input for phone number */}
    <Form.Label className='fs-6 text-secondary'>  Phone Number </Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="+234"
        className="mb-3" >
        <Form.Control type="email" placeholder="please input phone number" className='border border-3 rounded-3'
         {...register("number", { required: true })}/>
        {errors.number && <span className='text-danger fw-bold'>This field is required</span>}
      </FloatingLabel>


      {/* input for password */}
      <Form.Label className='fs-6 text-secondary'> Password <span> *8 minimum characters  </span> </Form.Label>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type={isReveal ? 'text' : 'password'} placeholder="Password" 
        className='border border-3 rounded-3 position-relative' {...register("password", { required: true })}/>
        {errors.password && <span className='text-danger fw-bold'>This field is required</span>}
        <p className='position-absolute end-0 top-0 mt-3 me-2' role ='button'onClick={handleToggle}> {isReveal ? 'hide' : 'show'} </p>
      </FloatingLabel>
     
      {/* input for confirm password */}
      <Form.Label className='fs-6 text-secondary'> Confirm Password </Form.Label>
      <FloatingLabel controlId="floatingPassword" label="Confirm Password">
        <Form.Control type={isReveal ? 'text' : 'password'} placeholder="Password" 
        className='border border-3 rounded-3 position-relative' {...register("password", { required: true })}/>
        {errors.password && <span className='text-danger fw-bold'>This field is required</span>}
      </FloatingLabel>


      {/* Below is for checkbox */}
      <div className='d-flex justify-content-between mt-3'>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Keep Me Signed in`}
            className='fs-6 fw-bold'
          />
        </div>
      ))}

      </div>
      <button className="btn btn-danger text-white fs-3 w-100"> Create account </button>
      <p className='text-center mt-3 fw-bold'> Have an account?  
      <Link className='text-decoration-none' to='/SignIn'> Sign In</Link> </p>
      <p className='text-center'> By creating your Quickmunch account, you agree to the</p>
     <p className='text-center mt-3 fw-bold'><Link className='text-decoration-none' to='/SignIn'> Term of Use </Link> and 
     <Link className='text-decoration-none' to='/SignIn'> Privacy Policy</Link>
     </p>
    
    </Form>


  </div>
 </main>
   </>
  )
}


export default SignUp