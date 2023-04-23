import Backdrop from "../Backdrop/Backdrop"
import Wrapper from "../../components/hoc/Wrapper"
const ModalPay = (props) => {
    return ( 
       <Wrapper >
       <Backdrop click={props.modalClose}/>
         <div className="modalPay">
        </div>
       </Wrapper>
     );
}
 
export default ModalPay;