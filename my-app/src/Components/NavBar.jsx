import React from "react";
import FarmerPage from "../Pages/FarmerPage/FarmerPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import MatchPage from "../Pages/MatchPage/MatchPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
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
          </li>
        </ul>
      </nav>
    );
  }
  
export default NavBar;