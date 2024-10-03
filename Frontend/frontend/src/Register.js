import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation on the client side
        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        // More password validation (optional)
        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        const formData = { username, email, password };

        try {
            setLoading(true); // Start loading
            const response = await axios.post('http://127.0.0.1:5000/register', formData);
            setSuccess(true);
            setError('');
            console.log(response.data.message); // Logging success message
            setUsername(''); // Reset fields
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setLoading(false); // Stop loading
            if (error.response && error.response.data.errors) {
                setError(error.response.data.errors[0]); // Display first error from backend
            } else if (error.response && error.response.data.message) {
                setError(error.response.data.message); // Generic backend error message
            } else {
                setError('Registration failed. Please try again.');
            }
        } finally {
            setLoading(false); // Stop loading regardless of the result
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {success ? (
                <div className="success-message">Registration successful! Please log in.</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default Register;
