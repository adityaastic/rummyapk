import React,{useEffect} from "react";

const Contact = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []);
    return (
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        
  
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />
  
          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />
  
          <label>Message:</label>
          <textarea placeholder="Your Message" required></textarea>
  
          <button type="submit">Send Message</button>
          <p>Email: <a href="mailto:support@ecofaregaming.com">support@bgmgame.in</a></p>
      
        <p>Address :Dev Associates, RIICO INDUSTRIAL AREA Gheeloth, Alwar, Rajasthan, 301705</p>
        </form>
      </div>
    );
  };
  
  export default Contact;
