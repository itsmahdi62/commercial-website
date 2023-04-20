import {HiSortDescending} from "react-icons/hi"
import {AiOutlineArrowUp} from "react-icons/ai"
import {AiOutlineArrowDown} from "react-icons/ai"
import { useState,useEffect } from "react"
import Product from "../Product/Product"
import axios from "axios"
const Sort = (props) => {
      const [ascending ,setAscending] = useState(false)
      const [descending ,setDescending] = useState(false)
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
        <div className="sort">
            <div className="sortSection">
                <div className="sorting  flex">
                    <HiSortDescending />
                    <span>sorting :</span>
                </div>
                <div className="ascending flex">
                    <span onClick={setAscending(true)}>Ascending</span>
                    <AiOutlineArrowUp />
                </div>
                <div className="descending flex">
                    <span onClick={setDescending(true)}>Descending</span>
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
                        asc={ascending}
                        des={descending}
                    />)
                })
           }
        </div>
        </div>
    );
}
 
export default Sort;