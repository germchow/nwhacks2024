import React from "react";
import './Navbar.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li className="navbar">
            <div className="leftNavBar">
                <img className="logoNavBar" src="./uglyBroccoli.png"></img>
                <div className="nameNavBar">FarmShare</div>
            </div>
            <div className="rightNavBar">
              <Link to="/landingpage" className="link">Home</Link>
              <Link to="/farmerpage" className="link">Farmer</Link>
              <Link to ="/swipepage" className="link">Swipe</Link>
              </div>
          </li>
        </ul>
      </nav>
    );
  }
  
export default NavBar;