import "./Home.scss"
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Categoty from "../../components/Category/Category"
const Home = () => {
    const [order , setOrder] = useState(false)
    const [type , setType] = useState("")
    const setOrderHandler = (category) => {
        setOrder(true)
        setType(category)
    }
    return ( 
    <div className="home">
        <Navbar setOrderHandler={setOrderHandler}/>

        {order ? <Categoty type={type} /> : null}
        <Outlet />
    </div>  );
}
 
export default Home;