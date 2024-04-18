import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './layout/NavBar';
import CheckOut from './pages/CheckOut'
import Home from './pages/Home'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import { useState } from 'react';
import Footer from './layout/Footer';
import Error from './pages/Error';



function App() {
  const [cartItem, setCartItem] = useState ([1,3,5,8])


  return (
    <>
     
     <BrowserRouter>
    <Routes>
      <Route element={<> <NavBar cartItem = {cartItem}/> <Footer/> </>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/checkOut' element = {<CheckOut/>}/>
      {/* <Route path='/Footer' element = {<Footer/>}/> */}
      </Route>

      <Route path='/SignUp' element = {<SignUp/>}/>
      <Route path='/SignIn' element = {<SignIn/>}/>
      <Route path='*' element = {<Error/>}/>
      
      


    </Routes>
    </BrowserRouter>
        

    </>
  )
}

export default App
