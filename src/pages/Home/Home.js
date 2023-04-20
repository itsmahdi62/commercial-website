import "./Home.scss"
import Product from "../../components/Product/Product"
import axios from "axios"
// ============== import hooks ==========
import { useState , useEffect } from "react"

//================ import images ===========
import banner from "../../assets/banner.png"
import productImage from '../../assets/Rectangle 7.png';

// ============== import icons ============
import {HiSortDescending} from "react-icons/hi"
import {AiOutlineArrowUp} from "react-icons/ai"
import {AiOutlineArrowDown} from "react-icons/ai"


const Home = () => {
    const [data,setData] = useState([]);
    useEffect( ()=>{
        axios({
            method:"GET",
            url: `https://fakestoreapi.com/products`
        }).then(response =>{
            setData(response.data)
            
        }).catch(e=>console.log(e))
        
    })
    return ( 
    <div className="home">
        <div className="banner">
            <img src={banner} alt="" />
        </div>

        <div className="sortSection">
                <div className="sorting  flex">
                    <HiSortDescending />
                    <span>sorting :</span>
                </div>
                <div className="ascending flex">
                    <span>Ascending</span>
                    <AiOutlineArrowUp />
                </div>
                <div className="descending flex">
                    <span>Descending</span>
                    <AiOutlineArrowDown />
                </div>
            </div>
            {console.log(data)}

        <div className="products flex">
           {
                data.map((item) =>{
                    return ( <Product 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        point={item.rating.rate}
                        img={item.imgSrc}
                    />)
                })
           }
        </div>
    </div>  );
}
 
export default Home;