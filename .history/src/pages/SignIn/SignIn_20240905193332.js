import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { loginUser } from '../../features/user/userSlice'; 
import './SignIn.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { error, loggedIn } = useSelector((state) => state.user); 

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
      dispatch(loginUser(credentials))
        .then(() => {
          if (!error) {
            navigate('/'); 
          }
        });
    } else {
      setFormErrors({ general: 'Please enter both email and password.' });
    }
  };

  return (
    <div className="SignIn-page">
      <h1 className="SignIn-title">Sign in</h1>
      {formErrors.general && <p className="error-message">{formErrors.general}</p>}
      {error && <p className="error-message">{error}</p>}
      
      <form className="SignIn-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Sign in</button>
      </form>

      <p className="signup-link">
        Don't have an account? <Link to="/signup" className="signup-link-text">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
