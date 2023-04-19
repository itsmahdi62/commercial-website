const Product = (props) => {
    return ( 
        <div>
            {props.title}
            <img src={props.img} alt="" style={{width:"100%"}}/>
        </div>
     );
}
 
export default Product;