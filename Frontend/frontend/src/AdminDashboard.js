// src/ManageMembers.js

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './UserDashboard.css'; // Include your CSS file


const AdminDashboard = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem('loggedin');
    // if (!isLoggedIn) {
    //   window.location.href = '/login.html';
    // }

    // Fetch members data from the backend
    const fetchMembers = async () => {
      try {
        const response = await axios.get('/api/members'); // Replace with your API endpoint
        setMembers(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMembers();
  }, []);

  const handleUpdate = (id) => {
    // Redirect to the update user page
    window.location.href = `/updateuser/${id}`;
  };

  const handleDelete = async (id) => {
    try {
      await axios.post('/api/deleteuser', { Id: id }); // Adjust the endpoint as necessary
      setMembers(members.filter(member => member.Id !== id)); // Update state to remove deleted member
    } catch (err) {
      setError(err.message);
    }
  };

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
          <h4>Admin</h4>
        </center>
        <a href="/managemem" className="active"><i className="fas fa-desktop"></i><span>Manage Members</span></a>
        <a href="/addnotice"><i className="fas fa-bullhorn"></i><span>Add Notice</span></a>
        <a href="/viewcomplaints"><i className="fas fa-envelope-open-text"></i><span>View Complaints</span></a>
        <a href="/viewpayment"><i className="fas fa-file-invoice-dollar"></i><span>View Payments</span></a>
        <a href="/photo"><i className="fas fa-camera-retro"></i><span>Gallery</span></a>
      </div>

      <div className="content">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="/insertuser" className="Table_btn1">Add Member</a>
        <br />
        <br />
        {error && <p>{error}</p>}
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Flat No.</th>
              <th>Mobile No.</th>
              <th>No. of Family Members</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member) => (
                <tr key={member.Id}>
                  <td>{member.Id}</td>
                  <td>{member.Username}</td>
                  <td>{member.Email}</td>
                  <td>{member.Flatno}</td>
                  <td>{member.MobileNo}</td>
                  <td>{member['nno of family members']}</td>
                  <td>
                    <button className="Table_btn" onClick={() => handleUpdate(member.Id)}>Update</button>
                  </td>
                  <td>
                    <button className="Table_btn" onClick={() => handleDelete(member.Id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
