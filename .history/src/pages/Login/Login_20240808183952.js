import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const [loginError, setLoginError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send the credentials to a server for authentication
    if (credentials.username && credentials.password) {
      console.log('Submitting:', credentials);
      setLoginError('');
      // Redirect or show success message
    } else {
      setLoginError('Please enter both username and password.');
    }
  };
  
  return (
    <div className="login-page">
      <h1>Login</h1>
      {loginError && <p className="error-message">{loginError}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
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
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
