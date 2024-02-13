import { useState } from 'react';
import '../styles/Register.css'
import axios from 'axios';

const Register = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("start")
        const data = { 
            username: username,
            password: password,
            name:name
        };
    
        axios.post('http://localhost:8080/auth/api/signup', data)
            .then(response => {
                
                console.log('Login response:', response.data);
               
            })
            .catch(error => {
                console.error('Login error:', error);
             });
    };
    



    return (
        <form onSubmit={handleSubmit} className='form'>
            <h1>Register Form</h1>
            <div className='input-box'>
                <label htmlFor="full-name">Full-name:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={handleNameChange} 
                />
            </div>
            <div  className='input-box'>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={handleUsernameChange} 
                />
            </div>
            <div  className='input-box'>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                />
            </div>
            <button type="submit" className='submit-btn'>Login</button>
        </form>
    );
    
    
} 
export default Register;