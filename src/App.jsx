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
  const [token , setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <div>
       <Provider store={store}>
      <div>
      <BrowserRouter>
       <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Login token={token} setToken={setToken} />}/>
            {/* <Route path="/" element={<Home />}/> */}
            {/* <Route  path="/"   element={token ? <Home/> : <Login />}/> */}
            {/* <Route path='/' element={token ? <Home /> : <Login token={token} setToken={setToken}/>} /> */}
            {/* <Route path="/login" element={token ? <Navigate replace to="/"/> : <Login token={token} setToken={setToken} />}/> */}
            <Route path="/home" element={<Home />}/>
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
