import React, { useState } from 'react';
import './ContactInfo.css';
import { FaRegHandshake } from 'react-icons/fa';  // Move the import here

const ContactInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
        setSubmissionMessage('Please fill in all required fields.');
        return;
    }

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwAI4bzOxd66awYZIv-1wMfte2I3dLDEuuKm0idqjUG7rPjwlvIR4M0Mirpp93_-Hp8/exec", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Google Sheets Response:", result);

        setFormData({ name: '', phone: '', email: '', message: '' });
        setSubmissionMessage('Thank you! Your data has been submitted.');
    } catch (error) {
        console.error('Error submitting data:', error);
        setSubmissionMessage('An error occurred. Please try again later.');
    }
};

    return (
        <div className="contact-container">
            <h2>Contact <FaRegHandshake /> </h2>  {/* Displaying the icon here */}
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
                    />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </div>

                <button type="submit">Submit</button>
                {submissionMessage && <p>{submissionMessage}</p>}
            </form>
        </div>
    );
};

export default ContactInfo;
