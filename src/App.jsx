import './App.scss'
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import store from './store'
import { Provider } from 'react-redux';
//**********************import pages *********************** */
import Home from './pages/Home/Home.js'
import AddProduct from './pages/AddProduct/AddProduct';
import Login from './pages/Login/Login'
import Root from "./Root"
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Payment from './pages/Payment/Payment';
const App =()  =>{
  

  // container of roots
  let root = (<Provider store={store}>
    <div>
    <BrowserRouter>
      <Navbar />
     <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/AddProduct" element={<AddProduct />}/>
          <Route path='/shoppingCart' element={<ShoppingCart/>} />
        </Routes>
      </main>
     </div>
    </BrowserRouter>
   </div>
  </Provider>)
  
  const [token , setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <div>
    {/* ================== test bench ===================== */}
        {/* <Root /> */}
      {/* {token && <Login token={token} setToken={setToken}/>} */}
    {/* ================== test bench ===================== */}
      {/* {token ? root : <Login token={token} setToken={setToken}/> } */}
       <Provider store={store}>
      <div>
      <BrowserRouter>
        <Navbar />
       <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AddProduct" element={<AddProduct />}/>
            <Route path='/shoppingCart' element={<ShoppingCart/>} />
            <Route path='ShoppingCart/payment' element={<Payment />} />
            </Routes>
        </main>
       </div>
      </BrowserRouter>
     </div>
    </Provider> 
    </div>
   
  )
}

export default App
