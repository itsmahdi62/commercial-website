import "./ShoppingCart.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
const ShoppingCart = () => {
    const [prime , setPrime] = useState('loan')
    const toggleHandler =  () =>{
       if(prime === 'loan'){
            setPrime('cash')
       }else{
        setPrime('loan')
       }
    }
    
    return ( 
        <div className="shoppingCart">
            <div className="title">
                <h4>Shopping Cart</h4>
            </div>
            <div className="cart">
                <div className="details">
                    <div className="details-head">
                        <ul>
                            <li>
                                Product details
                            </li>
                            <li>
                                Name
                            </li>
                            <li>
                                Price
                            </li>
                            <li>
                                Total
                            </li>
                        </ul>
                    </div>
                    <div className="details-info">
                         <ul>
                            <li>
                                Place for product image
                            </li>
                            <li>
                                product name
                            </li>
                            <li>
                                Price
                            </li>
                            <li>
                                Total
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="price">
                 <div className="price-head">
                    <span className="price-head-btn prime" onClick={toggleHandler}>cash</span>
                    <span className="price-head-btn second" onClick={toggleHandler}>loan</span>
                 </div>
                 <div className="price-info">
                    {prime==='loan' ? <div className="loan">
                    <ul>
                        <li><input type="checkbox"/><h6>3 months</h6> <span> - 10% intersts</span></li>
                        <li><input type="checkbox"/><h6>6 months</h6> <span> - 10% intersts</span></li>
                        <li><input type="checkbox"/><h6>12 months</h6> <span> - 10% intersts</span></li>
                        <Link to='payment'><span>Proceed to Check Out</span></Link>
                    </ul></div> : <div className="cash">price : need help</div>}
                 </div>
                </div>
            </div>
        </div> );
}
 
export default ShoppingCart;