import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { loginUser } from '../../features/user/userSlice'; // Import loginUser action
import './SignIn.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { error, loggedIn } = useSelector((state) => state.user); // Access error and loggedIn state from Redux

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      // Dispatch the loginUser action
      dispatch(loginUser(credentials))
        .then(() => {
          if (!error) {
            navigate('/'); // Redirect to home after successful login
          }
        });
    } else {
      setFormErrors({ general: 'Please enter both email and password.' });
    }
  };

  return (
    <div className="SignIn-page">
      <h1>Sign in</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="SignIn-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign in</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
