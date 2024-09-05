import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Blog</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {!loggedIn && ( // Hide "Sign In" if the user is logged in
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        )}
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default NavBar;
