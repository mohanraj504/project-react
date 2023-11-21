
import React from 'react';
import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to us using the contact information below, or fill out the form, and we'll get back to you as soon as possible.
      </p>
      <div className="contact-info">
        <p>Email: info@homehelp.com</p>
        <p>Phone: +91 69672828299</p>
        <p>Address:  SKCET,Coimbatore</p>
      </div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
