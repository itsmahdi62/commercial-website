import "./Home.scss"

import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Categoty from "../../components/Category/Category"
const Home = () => {
    return ( 
    <div className="home">
        <Navbar />
        <Outlet />
    </div>  );
}
 
export default Home;