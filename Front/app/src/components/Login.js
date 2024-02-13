import axios from 'axios';
import '../styles/Login.css';
import { useState } from 'react';

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { 
            username: username,
            password: password
        };
    
        axios.post('http://localhost:8080/auth/api/login', data)
            .then(response => {
                console.log('Login response:', response.data);
               
            })
            .catch(error => {
                console.error('Login error:', error);
                
            });
    };
    return (
        <div>
        <form onSubmit={handleSubmit} className='login-form'>
            <h1>Login Form</h1>
            <div  className='login-input-box'>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={handleUsernameChange} 
                />
            </div>
            <div className='login-input-box'>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                />
            </div>
            <button className='submit-btn' type="submit">Login</button>
        </form>
        </div>
    );
};

export default Login;
