import '../resources/Login.css'
import React, { useState } from "react";
import { useAuthStore } from "../hooks/Store.ts";
import { useNavigate } from 'react-router-dom';

function Login () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
    navigate('/')
  }

  return (
    <div className="container">

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" id="email" name="email" value={username} placeholder="Email" onChange={(e) => setUsername(e.target.value)}></input>
        <input type="password" id="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>

        <button type="submit">Login</button>

        <div className="forgot">
          <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;