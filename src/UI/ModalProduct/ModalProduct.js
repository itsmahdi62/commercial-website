import "./ModalProduct.scss"
import {AiOutlineStar} from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import Backdrop from "../Backdrop/Backdrop"
import Wrapper from "../../components/hoc/Wrapper"
const ModalProduct = (props) => {
    return ( 
       <Wrapper >
       <Backdrop click={props.modalClose}/>
         <div className="modalProduct">
            <div className="headerProductModal">
                <h4>product details</h4>
                <AiOutlineStar /> {props.point}
            </div>
            <div className="pro">
                <div className="imgDivmodal">
                    {/* <img src={props.img} alt="" /> */}
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
       </Wrapper>
     );
}
 
export default ModalProduct;