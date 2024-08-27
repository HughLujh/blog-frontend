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
  const [signupPasswordError, setSignupPasswordError] = useState('');
  const [signupUsernameError, setSignupUsernameError] = useState('');
  const [signupEmailErrors, setSignupEmailErrors] = useState(''); 

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
      fetch('http://localhost:8080/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(async response =>{
        if (response.ok) {
        return response.json();
      } else {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
      })
      .then(data => {
        console.log('Success:', data);
        setSignupError('');
        setFormErrors({});
      })
      .catch((error) => {
        console.error('Error:', error);
        try {
          const errorData = JSON.parse(error.message);
          if(errorData.errors.username){
            setSignupPasswordError(errorData.errors.username);
          }
          if(errorData.errors.password){
            setSignupPasswordError(errorData.errors.password);
          }
          setSignupError(errorData.message || 'An error occurred');
          setFormErrors(errorData.errors || {});
        } catch (e) {
          setSignupError('An unexpected error occurred');
        }      });
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
        {signupUsernameError && <p className="error-message">{signupUsernameError}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {signupEmailError && <p className="error-message">{signupEmailError}</p>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {signupPasswordError && <p className="error-message">{signupPasswordError}</p>}
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
