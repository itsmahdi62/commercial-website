import "./Home.scss"
import Product from "../../components/Product/Product"

// ============== import hooks ==========
import { useState } from "react"

// ============== import icons ============
import {HiSortDescending} from "react-icons/hi"
import {AiOutlineArrowUp} from "react-icons/ai"
import {AiOutlineArrowDown} from "react-icons/ai"

//================ import images ===========
import banner from "../../assets/banner.png"
import productImage from '../../assets/Rectangle 7.png';

const Home = () => {
    const point = [1 , 2 , 3 , 4 , 5]
    const [product , setProduct] = useState([
        {id:1 , title:"Nike Triple Black Air Force 1 '07 sneakers" , description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for", price:1.620 , point:point[1] , imgSrc:{productImage}},
        {id:2 , title:"Nike Triple Black Air Force 1 '07 sneakers" , description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for", price:1.620 , point:point[2] , imgSrc:{productImage}},
        {id:3 , title:"Nike Triple Black Air Force 1 '07 sneakers" , description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for", price:1.620 , point:point[0] , imgSrc:{productImage}},
        {id:4 , title:"Nike Triple Black Air Force 1 '07 sneakers" , description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for", price:1.620 , point:point[4] , imgSrc:{productImage}},
    ])

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

        <div className="products flex">
           {
                product.map((item) =>{
                    return ( <Product 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        point={item.point}
                        img={item.imgSrc}
                    />)
                })
           }
        </div>

    </div>  );
}
 
export default Home;