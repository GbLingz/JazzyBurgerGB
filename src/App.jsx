import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './layout/NavBar';
import CheckOut from './pages/CheckOut'
import Home from './pages/Home'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import { useState } from 'react';
import Footer from './layout/Footer';



function App() {
  const [cartItem, setCartItem] = useState ([1,3,5,8])


  return (
    <>
     
     <BrowserRouter>
    <Routes>
      <Route element={<NavBar cartItem = {cartItem}/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/checkOut' element = {<CheckOut/>}/>
      <Route path='/Footer' element = {<Footer/>}/>
      </Route>

      <Route path='/SignUp' element = {<SignUp/>}/>
      <Route path='/SignIn' element = {<SignIn/>}/>
      


    </Routes>
    </BrowserRouter>
        

    </>
  )
}

export default App
