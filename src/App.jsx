import './App.scss'
import Login from './pages/Login/Login'
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js'
import { useState } from 'react';
const App =()  =>{
  const [token , setToken] = useState(null)
  return (
    <div>
      {/* {token ? <Home /> : <Login token={token} setToken={setToken} />} */}
      <BrowserRouter>
       <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </main>
     </div>
     </BrowserRouter>
    </div>
   
  )
}

export default App
