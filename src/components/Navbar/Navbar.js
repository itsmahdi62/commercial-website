import { useState } from 'react';
import "./Navbar.scss";

//=================== import icons ===================
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BiShoppingBag} from "react-icons/bi"
import {TbGridDots} from 'react-icons/tb'
//================== import images ================================
import logo from "../../assets/vector.png"
import logo1 from "../../assets/Group 2.png"

const Navbar = () => {
    const[ navbar , setNavbar] = useState('navbar')
    const navbarHandler = () => {
        setNavbar('navbar show')
    }
    
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
            <li className="listItem">
                <a href="/#" className="link">electronic</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">women</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">men</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">jewerly</a>
            </li>
        </ul>
        {/*=============================== add icons to navbar for exit ============================== */}
     </div>
     <div className='products'>
        <div className='text'>
            <AiOutlinePlusCircle className='plus'/>
            <span>Add product</span>
        </div>
        <div className='bagContainer'>
            <BiShoppingBag  className='bag'/>
        </div>
     </div>
    </div> );
}
export default Navbar;