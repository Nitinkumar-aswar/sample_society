import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
    const [view, setView] = useState('login'); // State to manage the current view

    const toggleView = () => {
        if (view === 'login') {
            setView('register');
        } else if (view === 'register') {
            setView('dashboard'); // Assuming registration leads to the dashboard
        } else {
            setView('login'); // Redirect back to login from dashboard
        }
    };

    const handleLoginSuccess = () => {
        setView('dashboard'); // Change view to dashboard on successful login
    };

    return (
        <div className="App">
            <h1 className="page-heading">Society Management</h1>
            {view === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
            {view === 'register' && <Register />}
            {view === 'dashboard' && <Dashboard />}
            <button className="toggle-button" onClick={toggleView}>
                {view === 'login' ? 'Go to Register' : view === 'register' ? 'Go to Dashboard' : 'Log Out'}
            </button>
        </div>
    );
}

export default App;
