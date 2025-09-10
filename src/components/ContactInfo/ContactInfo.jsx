import React, { useState, useEffect } from 'react';
import './ContactInfo.css';
import { FaRegHandshake, FaUser, FaPhone, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (EMAILJS_USER_ID) {
      emailjs.init(EMAILJS_USER_ID);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    if (formData.phone && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionMessage('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      title: formData.message.substring(0, 50),
      email: formData.email,
      name: formData.name,
    };

    try {
      // Send main email
      const mainResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams
      );
      console.log('Email sent to owner:', mainResponse);

      // Send auto-reply if template is configured
      if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        try {
          const autoReplyResponse = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTOREPLY_TEMPLATE_ID,
            emailParams
          );
          console.log('Auto-reply sent to user:', autoReplyResponse);
        } catch (autoReplyError) {
          console.warn('Auto-reply failed:', autoReplyError);
          // Don't fail the main submission if auto-reply fails
        }
      }

      setFormData({ name: '', phone: '', email: '', message: '' });
      setSubmissionMessage('Thank you for your message! I\'ll get back to you soon.');
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmissionMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <header className="contact-header">
          <h2>
            Get In Touch
            <FaRegHandshake className="header-icon" />
          </h2>
          <p className="contact-subtitle">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <FaUser className="label-icon" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="error-text" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <FaPhone className="label-icon" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="Enter your phone number"
                disabled={isSubmitting}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="error-text" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="label-icon" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="error-text" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              <FaCommentDots className="label-icon" />
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
              placeholder="Tell me about your project, questions, or how I can help you..."
              required
              disabled={isSubmitting}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className="error-text" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
              aria-describedby="submit-status"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>

          {submissionMessage && (
            <div 
              id="submit-status"
              className={`submission-message ${
                submissionMessage.includes('error') || submissionMessage.includes('Sorry') 
                  ? 'error' 
                  : 'success'
              }`}
              role="alert"
              aria-live="polite"
            >
              {submissionMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;