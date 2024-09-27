import React from 'react';
import './Dashboard.css'; // Optional: Create a separate CSS file for Dashboard styles

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <p>Welcome to the Society Management Dashboard!</p>
            <div className="card-container">
                <div className="card">
                    <h2>Users</h2>
                    <p>Manage users in your society.</p>
                </div>
                <div className="card">
                    <h2>Payments</h2>
                    <p>Track payments and invoices.</p>
                </div>
                <div className="card">
                    <h2>Events</h2>
                    <p>Manage society events and announcements.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
