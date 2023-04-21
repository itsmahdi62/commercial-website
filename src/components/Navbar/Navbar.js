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
    const[ navbar , setNavbar] = useState('navbar')
    const navbarHandler = () => {
        setNavbar('navbar show')
    }
    // getting lists order
    const [data , setData] = useState([])
    useEffect( ()=>{
        axios({
            method:"GET",
            url: `https://schema.getpostman.com/json/collection/v2.1.0/collection.json`
        }).then(response =>{
            setData(response.data)
            console.log(response.data)
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
        {data.map((product) =>{
                return <li key={product.id}><Link to="/#" className='link'>{data.category}</Link></li>
        })}
            {/* <li className="listItem">
                <Link  to="/#" className="link">{data.category}</Link>
            </li>
            <li className="listItem">
                <Link  to="/#" className="link">women</Link>
            </li>
            <li className="listItem">
                <Link  to="/#" className="link">men</Link>
            </li>
            <li className="listItem">
                <Link  to="/#" className="link">jewerly</Link>
            </li> */}
        </ul>
        {/*=============================== add icons to navbar for exit ============================== */}
     </div>
     <div className='products'>
        <div className='text'>
            <Link to='/AddProduct' className='link'>
                <AiOutlinePlusCircle className='plus'/>
                <span>Add product</span>
            </Link>
        </div>
        <div className='bagContainer'>
            <BiShoppingBag  className='bag'/>
        </div>
     </div>
    </div> );
}
export default Navbar;