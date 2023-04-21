import './App.scss'
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import { useState } from 'react';
//**********************import pages *********************** */
import Home from './pages/Home/Home.js'
import AddProduct from './pages/AddProduct/AddProduct';
import Login from './pages/Login/Login'
import Root from "./Root"
const App =()  =>{
  const [token , setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <div>
    {/* ================== test bench ===================== */}
        {/* <Root /> */}
    {/* ================== test bench ===================== */}
      {token ? <Root /> : <Login token={token} setToken={setToken} />}
      {/* <BrowserRouter>
       <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Login token={token} setToken={setToken}/>}/>
            <Route path="/shop" element={<Home />}/>
            <Route path="/AddProduct" element={<AddProduct />}/>
          </Routes>
        </main>
     </div>
     </BrowserRouter> */}
    </div>
   
  )
}

export default App
