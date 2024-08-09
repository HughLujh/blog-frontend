import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const [SignInError, setSignInError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      console.log('Submitting:', credentials);
      setSignInError('');
      fetch('http://localhost:8080/sign-in',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      .then(response=>response.json())
      .then(data=>{
        console.log('Success', data)
      })
      .catch((error) =>{
        console.error('Error', error)
      });
    }else {
      setSignInError('Please enter both username and password.');
    }
  };
  
  return (
    <div className="SignIn-page">
      <h1>Sign in</h1>
      {SignInError && <p className="error-message">{SignInError}</p>}
      <form className="SignIn-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
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
