import "./Home.scss"
import Product from "../../components/Product/Product"
import Navbar from '../../components/Navbar/Navbar'
import ModalProduct from "../../UI/ModalProduct/ModalProduct";
import axios from "axios"

// ============== import hooks ==========
import { useState , useEffect } from "react"
// ========== import redux hooks 
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from '../../postSlice'

//================ import images ===========
import banner from "../../assets/banner.png"
// ============== import icons ============
import {HiSortDescending} from "react-icons/hi"
import {AiOutlineArrowUp} from "react-icons/ai"
import {AiOutlineArrowDown} from "react-icons/ai"
const Home = () => {
    // ================= get product using redux ======================
    const dispatch = useDispatch()
    const postList = useSelector( state => state.post.postList )
    useEffect(() =>{
          dispatch(fetchPosts()) 
     })
     //====================sort products handler ======================
    const [data , setData] = useState([]); 
    useEffect( ()=>{
        axios({
            method:"GET",
            url: `https://fakestoreapi.com/products?sort=${order}`
        }).then(response =>{
            setData(response.data)
            // console.log(response.data)
        }).catch(e=>console.log(e))
    })

    const [order ,setOrder] = useState('')
    const ascendingHandler = () =>{
        setOrder('ask')
    }
    const descendingHandler = () =>{
        setOrder('desc')
    }
    
    
    // ================== show modal ======================
    const [modal ,setModal] = useState(false)
    let specialproduct = 0 ;
    const modalHandler = (id) =>{
        setModal(true)        
        specialproduct = data.find(item => item.id === id )
    }
    //============================ close modal ======================
    const modalCloseHandler =() =>{
        setModal(false)
    }
    const divDataOrder = (  <div className="products flex">{
        data.map((item) =>{
            return ( <Product 
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                point={item.point}
                img={item.image}
                // modalHandler={() => modalHandler(specialproduct)}
                modalHandler={modalHandler}
            />)
        })
   }
    </div>)

    const divDefaultRedux = <div className="products flex">
    {
         postList.map((item) =>{
             return ( <Product 
                 key={item.id}
                 title={item.title}
                 description={item.description}
                 price={item.price}
                 point={item.point}
                 img={item.image}
                 modalHandler={modalHandler}
             />)
         })
    }
    </div>

    const [showByOrder, setShowByOrder] = useState(true)
    // const categoryHandler = (cat) => {

    // }
    return ( 
    <div className="home">
        {/* <Navbar category={categoryHandler}/> */}
        <Navbar/>
        <div className="banner">
            <img src={banner} alt="" />
        </div>

        <div className="sortSection">
                <div className="sorting  flex">
                    <HiSortDescending />
                    <span>sorting :</span>
                </div>
                <div className="ascending flex" onClick={ascendingHandler}>
                    <span>Ascending</span>
                    <AiOutlineArrowUp />
                </div>
                <div className="descending flex" onClick={descendingHandler}>
                    <span>Descending</span>
                    <AiOutlineArrowDown />
                </div>
            </div>
        { order ? {divDataOrder}  :  {divDefaultRedux}} 
        {modal && <ModalProduct modalClose={modalCloseHandler}/>}
    </div>  );
}
 
export default Home;