import React from "react";
import './Navbar.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li className="navbar">
            <Link to="/landingpage">Landing Page</Link>
            <Link to="/farmerpage">Farmer Page</Link>
            <Link to="/matchpage">Match Page</Link>
            <Link to="/loginpage">Login Page</Link>
            <Link to ="/swipepage">Swipe Page</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
export default NavBar;