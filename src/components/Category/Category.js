import axios from "axios";
import { useState , useEffect } from "react";
import Product from "../Product/Product";
import ModalProduct from "../../UI/ModalProduct/ModalProduct";
import "./Category.scss"
const Category = (props) => {
    const [modal , setModal] = useState(false)
    const [cat ,setCat ] = useState([]); 
    useEffect( ()=>{
        axios({
            method:"GET",
            url: `https://fakestoreapi.com/products?sort=${props.type}`
        }).then(response =>{
            console.log(props.type)
            setCat(response.data)
        }).catch(e=>console.log(e))
    })
    const modalHandler = () =>{
            setModal(true)
    }
    const modalCloseHandler = () =>{
        setModal(false)
    }
    return ( 
    <div className="category">
        {
            cat.map((item) =>{
            return ( <Product 
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                point={item.point}
                img={item.image}
                modalHandler={modalHandler}
            />)
        })
        }
        {modal && <ModalProduct modalClose={modalCloseHandler}/>}
    </div> );
}
 
export default Category;