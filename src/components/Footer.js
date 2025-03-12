import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About Section */}
        <div className="footer-section">
          <img src="/logo.png" alt="Ecofare Gaming" className="footer-logo" />
          <p>
            Ecofare Gaming is India's best online Rummy game portal, owned and operated by
            ECOFARE TECHNOLOGIES PRIVATE LIMITED. We strive to provide the best Rummy experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* More Links */}
        <div className="footer-section">
          <h3>More</h3>
          <ul>
            <li><a href="#">Refund & Cancellation</a></li>
            <li><a href="#">Responsible Rummy</a></li>
            <li><a href="#">Legality</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@ecofaregaming.com</p>
        </div>
      </div>

      {/* Download Button */}
      <div className="download-section">
        <a href="/download" className="download-btn">
          <img src="/logo.png" alt="Android Icon" className="android-icon" />
          Download Now
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© Ecofare Gaming 2024, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
