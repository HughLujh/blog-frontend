import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../config/apiConfig'; // Import Axios instance
import './SignUp.css';

const SignUp = () => {
  const initialFormData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [signupError, setSignupError] = useState('');
  const [signupUsernameError, setSignupUsernameError] = useState('');
  const [signupEmailError, setSignupEmailError] = useState(''); 
  const [signupPasswordError, setSignupPasswordError] = useState('');
  const [signupConfirmPasswordError, setSignupConfirmPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setSignupConfirmPasswordError('Passwords do not match.');
      return;
    }

    if (formData.username && formData.email && formData.password) {
      setSignupError('');
      setSignupUsernameError('');
      setSignupEmailError('');
      setSignupPasswordError('');
      setSignupConfirmPasswordError('');

      try {
        const response = await api.post('sign-up', formData);

        console.log('Success:', response.data);
        setSuccessMessage('Sign up successful! Redirecting to login page...');

        // Clear form data after successful submission
        setFormData(initialFormData);

        // Redirect to login page after a short delay
        setTimeout(() => {
          navigate('/login'); // Redirect to login page
        }, 2000); // 2 seconds delay

      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          const errorData = error.response.data;

          if (errorData.errors) {
            setSignupUsernameError(errorData.errors.username || '');
            setSignupEmailError(errorData.errors.email || '');
            setSignupPasswordError(errorData.errors.password || '');
          }

          setSignupError(errorData.message || 'An error occurred');
        } else {
          setSignupError('An unexpected error occurred');
        }
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
        {signupConfirmPasswordError && <p className="error-message">{signupConfirmPasswordError}</p>}

        <button type="submit">Sign up</button>
        <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
      </form>
    </div>
  );
};

export default SignUp;
