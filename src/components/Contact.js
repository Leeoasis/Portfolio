import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

// Initialize EmailJS with your public key
emailjs.init('2NxF4OqnIoJV0DlyM');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, send the email using EmailJS
      emailjs
        .send('service_dee4oun', 'template_1m5fhl5', formData)
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            setIsSubmitted(true); // Set the form submission flag
          },
          (error) => {
            console.error('Email send error:', error);
          }
        );

      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Clear any validation errors
      setErrors({});
    } else {
      // Form is invalid, display validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div className="home-div">
      <div className="content">
        <div className="heading">
          <h1 className="contact-heading">Contact Me</h1>
          {isSubmitted ? (
            <p className="success-message">Form submitted successfully!</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <p className="error-message">{errors.name}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
