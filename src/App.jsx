import './App.scss'
import { BrowserRouter  , Route,Routes , Navigate   } from 'react-router-dom';
import { useState } from 'react';
import store from './store'
import { Provider } from 'react-redux';
//**********************import pages *********************** */
import Home from './pages/Home/Home.js'
import AddProduct from './pages/AddProduct/AddProduct';
import Login from './pages/Login/Login'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Payment from './pages/Payment/Payment';
const App =()  =>{

  // container of roots
  const [token , setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <div>
    {/* ================== test bench ===================== */}
        {/* <Root /> */}
      {/* {token && <Login token={token} setToken={setToken}/>} */}
    {/* ================== test bench ===================== */}
      {/* {token ? <Root /> : <Login token={token} setToken={setToken}/> } */}
       <Provider store={store}>
      <div>
      <BrowserRouter>
       <div className="App">
        <main>
          <Routes>
            {/* <Route path="/" element={<Navigate replace to="/login" />}/>
            <Route path="/" element={<Home />}/> */}
            <Route exact path="/"   element={token ? <Home/> : <Login />}/>
            <Route path='/login' element={<Login token={token} setToken={setToken}/>} /> 
            <Route path="/AddProduct" element={<AddProduct />}/>
            <Route path='/shoppingCart' element={<ShoppingCart/>} />
            <Route path='shoppingCart/payment' element={<Payment />} />
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
