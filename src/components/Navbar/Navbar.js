import { useState , useEffect} from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
//=================== import icons ===================
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BiShoppingBag} from "react-icons/bi"
import {TbGridDots} from 'react-icons/tb'
//================== import images ================================
import logo from "../../assets/vector.png"
import logo1 from "../../assets/Group 2.png"
import axios from 'axios';



const Navbar = () => {
    // get menu by axios
    const[ navbar , setNavbar] = useState('navbar')
    const navbarHandler = () => {
        setNavbar('navbar show')
    }
    // getting lists order
    const [data , setData] = useState([])
    useEffect( ()=>{
        axios({
            method:"GET",
            url: 'https://fakestoreapi.com/products/categories'
        }).then(response =>{
            setData(response.data)
        }).catch(e=>console.log(e))
        
    })
    return (
         <div className='header' >
             <div className="logoDiv">
                <TbGridDots className='mobile' onClick={navbarHandler}/>
                <img src={logo1} alt="" className="logo logoBag" />
                <img src={logo} alt="" className="logo logoText" />
             </div>

    {/* ==========================the menuBar and it's options====================== */}
     <div className={navbar}>
        <ul className="menu">
        {data.map((product, index) =>{
                return <li key={product.id} ><Link to="/#" className='links'>{data[index]}</Link></li>
        })}
        </ul>
        {/*=============================== add icons to navbar for exit ============================== */}
     </div>
     <div className='products'>
        <Link to='/AddProduct' className='link'>
            <div className='text' style={{color:'white'}}>    
                <AiOutlinePlusCircle className='plus'/>
                <span>Add product</span>
            </div>
        </Link>
        <Link to='/ShoppingCart'>
            <div className='bagContainer'>
                <BiShoppingBag  className='bag' />
            </div>
        </Link> 
     </div>
    </div> );
}
export default Navbar;