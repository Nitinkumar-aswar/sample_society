import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            setError(''); // Clear error if successful
            console.log(response.data.message); // Log success message
            onLoginSuccess(); // Call the onLoginSuccess prop to change the view or update the state
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message); // Set error from the backend
            } else {
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
