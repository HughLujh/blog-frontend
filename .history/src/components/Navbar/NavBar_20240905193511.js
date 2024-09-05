import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">My Blog</Link>
        </div>
        
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/posts" className="navbar-link">Posts</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          {!loggedIn && ( 
            <li className="navbar-item">
              <Link to="/signin" className="navbar-link">Sign In</Link>
            </li>
          )}
        </ul>
        
        <div className="navbar-search">
          <input type="text" className="navbar-search-input" placeholder="Search..." />
          <button className="navbar-search-button">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
