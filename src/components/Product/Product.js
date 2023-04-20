import productImage from '../../assets/Rectangle 7.png';
import {BiShoppingBag} from 'react-icons/bi'
import {AiOutlineStar} from "react-icons/ai"

import "./Product.scss"
const Product = (props) => {
    return ( 
        <div className='product'>
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