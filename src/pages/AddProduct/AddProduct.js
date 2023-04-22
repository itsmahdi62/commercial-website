import { Link } from "react-router-dom";
import "./AddProduct.scss"
import { useState } from "react";
import axios from "axios";
const AddProduct = () => {

    const [title , setTitle] = useState("");
    const [description,setDescription] = useState('');
    const [img,setImg] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('')
    const [error , setError] = useState("");
   
    const addProductHandler = () =>{
        setError("");
        setTitle("")
        setImg("")
        setDescription('')
        setPrice('')
        axios({
            method:"POST",
            url:"https://fakestoreapi.com/products",
            data:{
                id: Math.random(),
                title: "test product",
                price: 13.5,
                description: "lorem ipsum set",
                image: "https://i.pravatar.cc",
                category: "electronic"
              },
          }).then(response =>{
              
          }).catch((err) =>{
              console.log(err.response.data)
              setError(err.response.data)
          })
    
  }
      
    return ( 
        <div className="add">
            <p>lorem is a dangerous s animal lorem is aanimal lorem is a dangerous animal lorem is a dangerous animal</p>
            <div className="add-box">
                <div className="head">
                    <span>Add Product</span>
                </div>
                <div className="body">
                    <div className="option">
                        <label>Title</label>
                        <input type="text" onChange={(e) =>setTitle(e.target.value)} />
                    </div>
                    <div className="option">
                        <label>Description</label>
                        <input type="text" onChange={(e) =>setDescription(e.target.value)}/>
                    </div>
                    <div className="option">
                        <label>Category</label>
                        <input type="text" onChange={(e) =>setCategory(e.target.value)}/>
                    </div>
                    <div className="option">
                        <label>image URL</label>
                        <input type="text" onChange={(e) =>setImg(e.target.value)}/>
                    </div>
                    <div className="option">
                        <label>Price</label>
                        <input type="text" onChange={(e) =>setPrice(e.target.value)}/>
                    </div>
                    <div className="btn-form mb-5">
                        <Link to='/' className="d"><span className="cancel">Cancel</span></Link>
                        <button className="addBtn" onClick={addProductHandler}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddProduct;