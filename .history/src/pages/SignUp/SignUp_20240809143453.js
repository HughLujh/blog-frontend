import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [signupError, setSignupError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setSignupError('Passwords do not match.');
      return;
    }
    if (formData.username && formData.email && formData.password) {
      console.log('Submitting:', formData);
      setSignupError('');
    // Send the POST request
    fetch('http://localhost:8080/your-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success (e.g., redirect or show success message)
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error (e.g., show error message)
    });
  } else {
    setSignupError('Please fill in all fields.');
  }
    } else {
      setSignupError('Please fill in all fields.');
    }
  };
  
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      {signupError && <p className="error-message">{signupError}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Sign up</button>
        <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
      </form>
    </div>
  );
};

export default SignUp;
