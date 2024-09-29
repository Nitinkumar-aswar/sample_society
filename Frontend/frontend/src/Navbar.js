import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Combined scroll and resize handlers in a single useEffect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Threshold for applying scroll effect
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="navbar-container"
      className={`container-fluid pt-3 pb-3 d-flex flex-row ${
        isScrolled ? "nav-background" : ""
      }`}
    >
      <nav className="navbar navbar-expand-lg col-md-11 col-sm-11">
        <Link to="/">
          <img className="logo-img"
            src="/society-logo.jpg"
            id="myImage"
            width="150"
            height="60"
            onClick={() => window.scrollTo(0, 0)}
            style={{ filter: isScrolled ? "invert(1)" : "invert(0)" }}
          />
        </Link>

        <div id="navbarSupportedContent">
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${isScrolled ? "d-none" : ""}`}>
            <li className="nav-item">
              <Link to="/dashboard" className="menu-link" 
              // style={{ color: "#008000" }}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="menu-link" >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="menu-link"  >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
