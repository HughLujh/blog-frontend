import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import the useSelector hook
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
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
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default NavBar;
