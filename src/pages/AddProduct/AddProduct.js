import "./AddProduct.scss"
const AddProduct = () => {
    return ( 
        <div className="add">
            <p>lorem is a dangerous s animal lorem is aanimal lorem is a dangerous animal lorem is a dangerous animal</p>
            <div className="add-box">
                <div className="head">
                    <span>Add Product</span>
                </div>
                <div className="body">
                    <div className="username">
                        <label>Username</label>
                        <input type="text" />
                    </div>
                    <div className="password">
                        <label>password</label>
                        <input type="password"/>
                    </div>
                    <div className="username">
                        <label>Username</label>
                        <input type="text" />
                    </div>
                    <div className="password">
                        <label>password</label>
                        <input type="password"/>
                    </div>
                    <div className="password">
                        <label>password</label>
                        <input type="password"/>
                    </div>
                    <div className="btn-form">
                        <button className="cancel">Cancel</button>
                        <button className="addBtn">Add Product</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddProduct;