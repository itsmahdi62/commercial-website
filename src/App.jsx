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
import Category  from './components/Category/Category';
import Product from './components/Product/Product';
import FirstChild from "./pages/FirstChild/FirstChild"
const App =()  =>{
  return (
    <div>
       <Provider store={store}>
      <div>
      <BrowserRouter>
       <div className="App">
        <main>  
          <Routes>             
            <Route path="/" element={<Navigate replace to="/login"  />}/>
            <Route path="/login" element={<Login  />}/>
            <Route path="/home" element={<Home />}> 
                <Route path='' element={<FirstChild />} />
                <Route path="AddProduct" element={<AddProduct />}/>
                <Route path='shoppingCart' element={<ShoppingCart/>} />
                <Route path='payment' element={<Payment />} />
            </Route>      
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
