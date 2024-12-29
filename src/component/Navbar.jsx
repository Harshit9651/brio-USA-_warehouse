import React from 'react';
import '../assets/css/navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="../assets/images/brandLogo.svg" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li className="menu-item"><a href="#">Home</a></li>
          <li className="menu-item"><a href="#">About</a></li>
          <li className="menu-item"><a href="#">Services</a></li>
          <li className="menu-item"><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
