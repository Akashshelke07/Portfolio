import React, { useState, useEffect } from 'react';
import './ContactInfo.css';
import { FaRegHandshake } from 'react-icons/fa';
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

  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionMessage('');
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      title: formData.message.substring(0, 50),
      email: formData.email, // for auto-reply
      name: formData.name,   // for auto-reply
    };

    try {
      // Send main email to you
      const mainResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams
      );
      console.log('Email sent to owner:', mainResponse);

      // Auto-reply to the client
      const autoReplyResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        emailParams
      );
      console.log('Auto-reply sent to user:', autoReplyResponse);

      setFormData({ name: '', phone: '', email: '', message: '' });
      setSubmissionMessage('Thank you! Your message has been sent successfully.');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmissionMessage('Submission failed: ' + (error.text || 'Please try again later.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact <FaRegHandshake /></h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {submissionMessage && (
          <p className={submissionMessage.includes('failed') ? 'error-message' : 'success-message'}>
            {submissionMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactInfo;
