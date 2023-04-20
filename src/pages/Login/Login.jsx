import "./Login.scss"
import axios from 'axios';
import lock from "../../assets/downloadReceipt.png"
import { useState } from 'react';
const Login = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");
    const[token ,setToken] = useState()
    const loginHandler = () =>{
      setError("");
      setPassword("");
      setUsername("");
      axios({
          method:"POST",
          url:"https://fakestoreapi.com/auth/login",
          data:{
              username:username,
              password:password,
          },
      }).then(response =>{
          console.log(response.data.token)
          setToken(response.data.token)
          localStorage.setItem("userToken",response.data.token)
      }).catch((err) =>{
          console.log(err.response.data)
          setError(err.response.data)
      })
  }

  return (
    <div className="main">
      <div className="login">
        <div className="imgDiv">
          <img src={lock} alt="" />
        </div>
        <div className="infoDiv">
            <div className="titleDiv">

            </div>
            <div className="form">
              <div className="username">
                <label>Username</label>
                <input type="text" />
              </div>
              <div className="password">
                <label>password</label>
                <input type="password"/>
              </div>
              <button onClick={loginHandler}>Login</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;