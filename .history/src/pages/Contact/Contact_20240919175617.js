import React, { useState } from 'react';
import './Contact.css';
import { api } from '../../config/apiConfig'; // Import Axios instance

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Form validation
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Using Axios api instance to send the POST request
        const response = await api.post('contact', formData);

        // Handle success
        alert(`Success: ${response.data.message}`);
        setErrors({});
        
        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormSubmitted(true);
      } catch (error) {
        // Handle errors
        if (error.response) {
          console.error('Failed to send message:', error.response.data);
        } else {
          console.error('Failed to send message:', error.message || error);
        }
      }
    }
  };

  
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {formSubmitted ? (
        <p className="thank-you-message">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
          
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
          
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
          
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
          
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
