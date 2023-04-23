import Backdrop from "../Backdrop/Backdrop"
import Wrapper from "../../components/hoc/Wrapper"
const ModalAddProduct = (props) => {
    return ( 
       <Wrapper >
       <Backdrop click={props.modalClose}/>
         <div className="modalProduct">
        </div>
       </Wrapper>
     );
}
 
export default ModalAddProduct;