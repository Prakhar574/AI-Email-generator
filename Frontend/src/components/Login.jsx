import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            setToken(response.data.token);
            alert('Login successful!');
        } catch (error) {
            alert('Login failed! ' + error.response.data);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;