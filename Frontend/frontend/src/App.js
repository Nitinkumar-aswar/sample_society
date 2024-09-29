import Home from "./Home.js"; 
import Navbar from "./Navbar.js";
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import UserDashboard from './UserDashboard.js';
import AdminDashboard from './AdminDashboard.js';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    <Route path="/dashboard" element={<UserDashboard />} />
    {/* <Route path="/dashboard" element={<AdminDashboard />} /> */}
    <Route path="/login" element={<Login />} />

    </Routes>
     
     
    </Router>
  );
}

export default App;
