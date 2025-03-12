import React from "react";

const Contact = () => {
    return (
      <div className="contact-container">
        <h2>Contact Us</h2>
        
  
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />
  
          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />
  
          <label>Message:</label>
          <textarea placeholder="Your Message" required></textarea>
  
          <button type="submit">Send Message</button>
          <p>Email: <a href="mailto:support@ecofaregaming.com">2023 © Thebgmgame.com</a></p>
        <p>Phone: +91 123-456-7890</p>
        <p>Address: 123, Ecofare Street, India</p>
        </form>
      </div>
    );
  };
  
  export default Contact;
