import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
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
    if (credentials.email && credentials.password) {
      console.log('Submitting:', credentials);
      setSignInError('');
      fetch('http://localhost:8080/sign-in',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setSignInError(response.body.values);
        }
      })
      .then(data=>{
        console.log('Success', data)
      })
      .catch((error) =>{
        console.error('Error', error)
      });
    }else {
      setSignInError('Please enter both email and password.');
    }
  };
  
  return (
    <div className="SignIn-page">
      <h1>Sign in</h1>
      {SignInError && <p className="error-message">{SignInError}</p>}
      <form className="SignIn-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Email:</label>
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
