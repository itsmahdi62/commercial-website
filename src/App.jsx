import './App.scss'
import { BrowserRouter  , Route,Routes , Navigate   } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux';
//**********************import pages *********************** */
import Home from './pages/Home/Home.js'
import AddProduct from './pages/AddProduct/AddProduct';
import Login from './pages/Login/Login'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Payment from './pages/Payment/Payment';
import Category  from './components/Category/Category';
import FirstChild from "./pages/FirstChild/FirstChild"


const App =()  =>{
  window.addEventListener("offline", (event) => {
   alert("The network connection has been lost.");
  });
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
                <Route path='category/:categoryType' element={<Category />} />
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
