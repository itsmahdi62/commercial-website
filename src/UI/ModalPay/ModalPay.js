import Backdrop from "../Backdrop/Backdrop"
import Wrapper from "../../components/hoc/Wrapper"
import "./ModalPay.scss"
import {AiFillCheckCircle} from "react-icons/ai"
const ModalPay = (props) => {
    return ( 
       <Wrapper >
        <Backdrop click={props.modalClose}/>
         <div className="modalPay">
           <div className="checkbox">
              <AiFillCheckCircle className="check"/>
              <p>Your payment is successful</p>
           </div>
           <div className="Card-info">
              <button>Complete transacion</button>
           </div>
        </div>
       </Wrapper>
     );
}
 
export default ModalPay;