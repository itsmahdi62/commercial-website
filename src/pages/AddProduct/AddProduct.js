import { Link } from "react-router-dom";
import "./AddProduct.scss"
import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import ModalAddProduct from "../../UI/ModalAddProduct/ModalAddProduct";
import Loading from "../../UI/Loading/Loading";
const AddProduct = () => {

    const [title , setTitle] = useState("");
    const [description,setDescription] = useState('');
    const [img,setImg] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('')
    const [error , setError] = useState("");
    const[ modal ,setModal] = useState(false)
    const [loading , setLoading] = useState(false)
    const addProductHandler = () =>{
        setLoading(true)
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
                title: title,
                price: price,
                description: description,
                image: img,
                category: category
              },
          }).then(response =>{
            setLoading(false)
              
          }).catch((err) =>{
              console.log(err.response.data)
              setError(err.response.data)
          })
        setModal(true)
  }
    const modalCloseHandler =() =>{
        setModal(false)
        setLoading(false)
    }
    return ( 
        <div className="add">
         <div className="navbarBox">
            <Navbar />
        </div>
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
            {modal && <ModalAddProduct modalClose={modalCloseHandler} img={img} title={title} description={description} price={price}/>}
            {loading && <Loading modalClose={modalCloseHandler} />}
        </div>
     );
}
 
export default AddProduct;