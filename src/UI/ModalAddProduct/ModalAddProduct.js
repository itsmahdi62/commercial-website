import Backdrop from "../Backdrop/Backdrop"
import Wrapper from "../../components/hoc/Wrapper"
import "./ModalAddProduct.scss"
import {AiFillCheckCircle} from "react-icons/ai"
const ModalAddProduct = (props) => {
    return ( 
       <Wrapper >
        <Backdrop click={props.modalClose}/>
         <div className="modalAdd">
           <div className="checkbox">
              <AiFillCheckCircle className="check"/>
              <p>Your product has been successfully registerd</p>
           </div>
           <div className="add-info">
              <div className="img">
                  <img src="props.img" alt="/"/>
              </div>
              <div className="details">
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <span>Price : $ {props.price}</span>
              </div>
           </div>
        </div>
       </Wrapper>
     );
}
 
export default ModalAddProduct;