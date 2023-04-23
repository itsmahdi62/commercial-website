import "./ModalProduct.scss"
import {AiOutlineStar} from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import Backdrop from "../Backdrop/Backdrop"
const ModalProduct = (props) => {
    return ( 
        <div className="main">
             <Backdrop />
            <div className="header flex">
                <h4>product details</h4>
                <AiOutlineStar /> {props.point}
            </div>
            <div className="pro">
                <div className="imgDiv">
                    <img src={props.img} alt="" />
                </div>
                <div className="information">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>

                    <div className='purchase'>
                    <span className='prize'>$ {props.price}</span>
                     <BiShoppingBag  className='bag'/>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ModalProduct;