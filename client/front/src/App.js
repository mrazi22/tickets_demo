import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminHome from './components/AdminHome'
import UserHome from './components/UserHome'
import Orders from './components/admin/orders'
import Checkout from './components/Checkout'
import Address from './components/Address'
import AddProducts from './components/admin/addProducts'
import Payment from './components/Payment'
import Successful from './components/Succesful'
const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/home' element={<UserHome/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route  path='/address' element={<Address/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/successful' element={<Successful/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App