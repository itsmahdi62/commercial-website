import productImage from '../../assets/Rectangle 7.png';
import {BiShoppingBag} from 'react-icons/bi'

import { useState } from 'react';

import "./Product.scss"

const Product = (props) => {
    const [modal , setModal ] = useState(false)

    const modalHandler = () =>{
        setModal(true)
    }

    return ( 
        <div className='product' onClick={modalHandler}>
            <div className='imgDiv'>
            <img src={productImage} alt="" />
            </div>
            <div className='head'>
                <div className='stars'>
                    <div className='btn'>
                        <span>Clothes</span>
                    </div>
                    <div className='points'>
                        {props.point}
                    </div>
                </div>
                <div className='title'>
                    <h4>{props.title}</h4>
                </div>
                <div className='description'>
                    <p>{props.description}</p>
                </div>
                <div className='purchase'>
                    <span className='prize'>$ {props.price}</span>
                     <BiShoppingBag  className='bag'/>
                </div>
            </div>
        </div>
     );
}
 
export default Product;