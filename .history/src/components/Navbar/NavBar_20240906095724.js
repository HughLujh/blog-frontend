import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const handleIconClick = () => {
    setShowSearch(!showSearch);
  };

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
        {loggedIn ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><Link to="/signin">Sign In</Link></li>
        )}
      </ul>
      <div className="navbar-search">
        <span className="material-symbols-outlined search-icon" onClick={handleIconClick}>
            search
          </span>
          {showSearch && (
            <>
              <input
                type="text"
                placeholder="Search Google..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <span class="material-symbols-outlined">
              search
              </span>
              </>
          )}
      </div>
    </nav>
  );
};

export default NavBar;
