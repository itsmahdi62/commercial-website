import "./Login.scss"
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");
  return (
    <div>
      <label for="myInput" class="label">
        <span class="label-title">My nice input</span>
        <input id="myInput" class="input" name="text" placeholder="Type something..." type="text" />
    </label>
    </div>
  );
}

export default Login;