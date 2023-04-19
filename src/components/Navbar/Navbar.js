import { useState } from 'react'
import "./Navbar.scss"
//================== import images ================================
const Navbar = () => {
    return ( <div className='header' >
     <div className="logoDiv">
        <img src="" alt="" className="logo" />
     </div>

    {/* ==========================the menuBar and it's options====================== */}
     <div className='navbar'>
        <ul className="menu">
            <li className="listItem">
                <a href="/#" className="link">Used Cars</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">New Cars</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">Auctions</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">Sell</a>
            </li>
        </ul>
        {/*=============================== add icons to navbar for exit ============================== */}
     </div>
     <div className='signUp flex'>
        <div className='text'>Sign Up</div>
        {/*=============================== add icons to navbar for show sign-up ============================== */}
     </div>
    </div> );
}
export default Navbar;