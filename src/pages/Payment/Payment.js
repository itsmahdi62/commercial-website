import { Link } from "react-router-dom";
import "./Payment.scss"
import { useState } from "react";
import axios from "axios";
import ModalPay from "../../UI/ModalPay/ModalPay";
import Navbar from "../../components/Navbar/Navbar";
const Payment = () => {
    const [card , setCard] = useState("");
    const [Cvv2,setCvv2] = useState('');
    const [year,setYear] = useState('');
    const [month,setMonth] = useState('');
    const [pass,setPass] = useState('')
    const [error , setError] = useState("");
    const [modal ,setModal] = useState(false)
    const payHandler = () =>{
        // setError("");
        // setCard("")
        // setCvv2("")
        // setYear('')
        // setMonth('')
        // axios({
        //     method:"POST",
        //     url:"https://fakestoreapi.com/products",
        //     data:{
        //         id: Math.random(),
        //         title: "test product",
        //         price: 13.5,
        //         description: "lorem ipsum set",
        //         image: "https://i.pravatar.cc",
        //         category: "electronic"
        //       },
        //   }).then(response =>{
              
        //   }).catch((err) =>{
        //       console.log(err.response.data)
        //       setError(err.response.data)
        //   })
        setModal(true)
  }
  const modalCloseHandler =() =>{
    setModal(false)
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
                        <input type="text" onChange={(e) =>setCard(e.target.value)} />
                    </div>
                    <div className="option">
                        <label>Description</label>
                        <input type="text" onChange={(e) =>setCvv2(e.target.value)}/>
                    </div>
                    <div className="option">
                        <label>Category</label>
                        <input type="text" onChange={(e) =>setYear(e.target.value)}/>
                    </div>
                    <div className="option">
                        <label>image URL</label>
                        <input type="text" onChange={(e) =>setMonth(e.target.value)}/>
                    </div>
                    <div className="option">
                        <label>Price</label>
                        <input type="text" onChange={(e) =>setPass(e.target.value)}/>
                    </div>
                    <div className="btn-form mb-5">
                        <Link to='/' className="d"><span className="cancel">Cancel</span></Link>
                        <button className="addBtn" onClick={payHandler}>Check Out</button>
                    </div>
                </div>
            </div>
            {modal && <ModalPay modalClose={modalCloseHandler}/>}
        </div>
     );
}
 
export default Payment;