import React from "react";
import './Navbar.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li className="navbar">
            <Link to="/landingpage" className="link">Landing Page</Link>
            <Link to="/farmerpage" className="link">Farmer Page</Link>
            <Link to="/matchpage" className="link">Match Page</Link>
            <Link to="/loginpage" className="link">Login Page</Link>
            <Link to ="/swipepage" className="link">Swipe Page</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
export default NavBar;