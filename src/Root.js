//================= add styles
import './App.scss'

// ================ add redux toolkit tools
import store from './store'
import { Provider } from 'react-redux';

//============== add react router dom packages
import { BrowserRouter  , Route,Routes } from 'react-router-dom';

// ============== add page for routinf
import Login from './pages/Login/Login'
import Home from './pages/Home/Home.js'
import AddProduct from "./pages/AddProduct/AddProduct"
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

const Root =()  =>{
  return (
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
          </Routes>
        </main>
       </div>
      </BrowserRouter>
     </div>
    </Provider>
  )
}

export default Root
