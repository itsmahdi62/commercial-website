const ShoppingCart = () => {
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

                    </div>
                </div>
                <div className="prize">
                 <div className="details-head">
                    </div>
                    <div className="details-info">
                 </div>
                </div>
            </div>
        </div> );
}
 
export default ShoppingCart;