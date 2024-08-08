import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { ReactComponent as GoogleIcon } from './google-icon.svg'; // Ensure you have this icon file

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [signInError, setSignInError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic
    if (credentials.email && credentials.password) {
      console.log('Submitting:', credentials);
      setSignInError('');
      // Redirect or show success message
    } else {
      setSignInError('Please enter both email and password.');
    }
  };
  
  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google Sign-In');
  };
  
  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      {signInError && <p className="error-message">{signInError}</p>}
      <form className="signin-form" onSubmit={handleSubmit}>
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
        
        <button type="submit">Sign In</button>
      </form>
      <div className="separator">Or</div>
      <button className="google-signin" onClick={handleGoogleSignIn}>
        <GoogleIcon className="google-icon" />
        Sign in with Google
      </button>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
