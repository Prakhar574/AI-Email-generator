import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EmailForm from './components/EmailForm';
import './index.css'
const App = () => {
    const [token, setToken] = useState('');

    return (
        <div style={{ padding: '20px' }}>
            <h1>AI-Powered Email Generator</h1>
            <nav>
                <Link to="/login" style={{ margin: '10px' }}>Login</Link>
                <Link to="/register" style={{ margin: '10px' }}>Register</Link>
                <Link to="/email" style={{ margin: '10px' }}>Email Form</Link>
            </nav>
            <Routes>
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/email" element={<EmailForm token={token} />} />
                <Route path="/" element={<h2>Welcome to the Email Generator!</h2>} />
            </Routes>
        </div>
    );
};

export default App;