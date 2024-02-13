import React, { useState, useEffect } from "react";
import '../styles/Auth.css';
import Login from "./Login";
import Register from "./Register";
import axios from 'axios';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [regOrLog,setRegOrLog] = useState(true);


    useEffect(() => {
        console.log("Component mounted");
        const token = sessionStorage.getItem('token');
        console.log(token);
        
        if (token) {

            axios.post('http://localhost:8080/checkToken', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('Login response:', response);
                if (response.data.valid) {
                    setIsLogin(true);
                }
            })
            .catch(error => {
                console.error('Login error:', error);
            });
        }
    }, []); 

    const switchLogin = () => {
        setRegOrLog(e => !e);
    }
    const refreshPage = () => {
        window.location.reload();
    };
    const logout = async () =>{
        sessionStorage.clear();    
        refreshPage();   
    }

    return (
        <>
            {isLogin ? <div className="logged">you are logged in<div><a href="" onClick={logout}>Logout</a></div></div> : 
                <div>
                    <h1 className="login-or-register-title">
                        {!regOrLog ? "Don't have an account ? " : "Already have an account ?"}
                    </h1>
                    <a className="login-or-register-title" onClick={switchLogin} href="#">
                        {!regOrLog ? "Register" : "Login" }
                    </a>
                    <div className="auth-container">
                        <div>{!regOrLog ? <Login /> : <Register />}</div>
                    </div>
                </div>
            }
        </>
    );
}

export default Auth;
