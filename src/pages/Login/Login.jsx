import "./Login.scss"
import axios from 'axios';
import lock from "../../assets/downloadReceipt.png"
import logo from "../../assets/vector.png"
import logo1 from "../../assets/Group 2.png"
import { useState } from 'react';
import Loading from "../../UI/Loading/Loading";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [token , setToken] = useState(localStorage.getItem("userToken") ?? null)

    const navigate = useNavigate() ;
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");
    const [loading , setLoading] = useState(false)

    const loginHandler = () =>{
      setError("");
      setPassword("");
      setUsername("");
      setLoading(true)
      axios({
          method:"POST",
          url:"https://fakestoreapi.com/auth/login",
          data:{
              username:username,
              password:password,
          },
        }).then(response =>{
          localStorage.setItem('shop' ,JSON.stringify(response.data))
          console.log(response.data.token)
          setLoading(false)
          // setToken(response.data.token)
          setToken(response)
          setTimeout( () => navigate('/home') , 2000)
          console.log("sskksksksk")
          localStorage.setItem("userToken",response.data.token)
      }).catch((err) =>{
          // console.log(err.response.data)
          console.log(err)
          setError(err.response.data)
          console.log("ddkdk")
          setLoading(false)
      })
  }


  const modalCloseHandler = () =>{
    setLoading(false)
  }

  return (
    <div className="main"> 
     {loading && <Loading />} 
      <div className="login">
          <div className="imgDiv">
            <img src={lock} alt="" />
          </div>
          <div className="infoDiv">
              <div className="titleDiv">
                  <div className="logoDivlogin">
                  <img src={logo1} alt="" className="logo logoBag" />
                  <img src={logo} alt="" className="logo logoText" />
                  </div>
                  <h2>Welcome back</h2>
                  <p>A loremAoremA loremA loremA loremA loremA loremA loremA loremA loremA lorem</p>
              </div>
              <div className="form">
                <div className="optionLogin">
                  <label>Username</label>
                  <input type="text"  value={username} onChange={(e) =>setUsername(e.target.value)} />
                </div>
                <div className="optionLogin">
                  <label>password</label>
                  <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <div className="btn">
                  {error && <small>{('Wrong username or password')}</small>}
                  <button onClick={loginHandler}>Login</button>
                </div>
              </div>
          </div>
      </div>
      {loading && <Loading modalClose={modalCloseHandler} />}
    </div>
  );
}

export default Login;