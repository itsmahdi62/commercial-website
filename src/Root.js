import './App.scss'
import Login from './pages/Login/Login'
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js'
import { useState } from 'react';
import AddProduct from "./pages/AddProduct/AddProduct"
import Navbar from './components/Navbar/Navbar';
const Root =()  =>{
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/AddProduct" element={<AddProduct />}/>
          </Routes>
        </main>
     </div>
     </BrowserRouter>
    </div>
   
  )
}

export default Root
