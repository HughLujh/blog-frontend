import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [SignInError, setSignInError] = useState('');
  const [formErrors, setFormErrors] = useState({}); 
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
          return response.json().then(errorData => {
            throw new Error(JSON.stringify(errorData));
          });
        }
      })
      .then(data=>{
        console.log('Success', data)
        setSignInError('');
        setFormErrors({});
      })
      .catch((error) =>{
        try {
          const errorData = JSON.parse(error.message);
          setSignInError(errorData.message || 'An error occurred');
          setFormErrors(errorData.errors || {});
        } catch (e) {
          setSignInError('An unexpected error occurred');
        }
      });
    }else {
      setSignInError('Please enter both email and password.');
    }
  };
  
  return (
    <div className="SignIn-page">
      <h1>Sign in</h1>
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
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {formErrors.password && <p className="error-message">{formErrors.password}</p>}
        <button type="submit">Sign in</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
