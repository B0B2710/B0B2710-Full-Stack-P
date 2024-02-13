import '../styles/AboutMe.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Logged = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from the backend
        axios.get('http://localhost:8080/userData')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div className="card">
            <h2>User Information</h2>
            {userData ? (
                <>
                    <p>Name: {userData.name}</p>
                    <p>Username: {userData.username}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Logged;

