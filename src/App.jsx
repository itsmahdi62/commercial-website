import './App.scss'
import Login from './pages/Login/Login'
import Navbar from '../src/components/Navbar/Navbar'
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </main>
     </div>
  </BrowserRouter>
  )
}

export default App
