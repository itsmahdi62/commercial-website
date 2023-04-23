import "./Category.scss"
import axios from "axios";
import { useState , useEffect } from "react";
import Product from "../Product/Product";
const Category = (props) => {

    const [data,setData] = useState([]);    
    useEffect( ()=>{
        axios({
            method:"GET",
            url: 'https://fakestoreapi.com/products'
        }).then(response =>{
            setData(response.data)
            // console.log(response.data)
        }).catch(e=>console.log(e))
        
    })
    const category = data.map((item) =>{
        return props.type.find(item.category)
    })
    return (
        <div className="category">
            <Product 
                key={category.id}
                title={category.title}
                description={category.description}
                price={category.price}
                point={category.point}
                img={category.image}
                    />
        </div> );
}
 
export default Category;