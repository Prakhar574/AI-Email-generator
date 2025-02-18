import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/api/users/register', { email, password });
            alert('User registered!');
        } catch (error) {
            alert('Registration failed! ' + error.response.data);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;