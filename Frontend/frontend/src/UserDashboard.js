// src/Dashboard.js

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './UserDashboard.css'; // Include your CSS file

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/userdata'); // Replace with your API endpoint
        setUserData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  // Handle redirection if not logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('loggedin', true);
    // if (!isLoggedIn) {
    //   window.location.href = '/login.js';
    // }
  }, []);

  return (
    <div>
      <header>
        <div className="left_area">
        <img className="logo-img"
            src="/society-logo.jpg"
            // id="myimage"
            width="60px"
            height="40px"
           
            // onClick={() => window.scrollTo(0, 0)}
            // style={{ filter: isScrolled ? "invert(1)" : "invert(0)" }}
          />
        </div>
        <div className="right_area">
          <a href="/logout" className="logout_btn">Logout</a>
        </div>
      </header>

      <div className="sidebar">
        <center>
          <img src="Images/download.png" className="profile_image" alt="" />
          <h4>{userData ? userData.username : 'Loading...'}</h4>
        </center>
        <a href="/dashboard" className="active"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
        <a href="/noticebrd"><i className="fas fa-bullhorn"></i><span>Notice Board</span></a>
        <a href="/complaint"><i className="fas fa-envelope-open-text"></i><span>Register Complaint</span></a>
        <a href="/payment"><i className="fas fa-file-invoice-dollar"></i><span> Payment</span></a>
        <a href="/userphoto"><i className="fas fa-camera-retro"></i><span> Gallery</span></a>
      </div>

      <div className="content">
        <h1>Welcome to Dashboard</h1>
        {error && <p>{error}</p>}
        {userData && (
          <div className="user-info">
            <div className="col-div-3">
              <div className="box">
                <p>{userData.username}<br /><span>Your Username</span></p>
                <i className="far fa-user fa-2x"></i>
              </div>
            </div>
            <div className="col-div-3">
              <div className="box">
                <p>{userData.flatno}<br /><span>Your Flat No.</span></p>
                <i className="fas fa-home fa-2x"></i>
              </div>
            </div>
            <div className="col-div-3">
              <div className="box">
                <p>Shubham Vartak<br /><span>Society Secretary</span></p>
                <i className="fas fa-user-tie fa-2x"></i>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
