import React, { useState } from "react";
import '../styles/Auth.css'
import Login from "./Login";
import Register from "./Register";


const Auth = () =>{
    const [isLogin, setIsLogin] = useState(true);
    const switchLogin = () =>{
        setIsLogin(e => !e)
    }

return(
    <>
        <h1 className="login-or-register-title">{!isLogin ? "Dont have an account ? ": "Already have an account ?"} </h1>
        <a className="login-or-register-title" onClick={switchLogin} href="#" >{!isLogin ? "Register" : "Login" }</a>
        <div className="auth-container">
        {!isLogin ? <Login /> : <Register />}
        </div>
    </>

)} 
export default Auth;
