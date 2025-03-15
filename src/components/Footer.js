import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About Section */}
        <div className="footer-section">
          <img src="/logo.png" alt="Ecofare Gaming" className="footer-logo" />
          <p>
            BGM Gaming is India's best online Rummy game portal, owned and operated by
            BGM GAME PRIVATE LIMITED. We strive to provide the best Rummy experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* More Links */}
        <div className="footer-section">
          <h3>More</h3>
          <ul>
            <li><Link to="/refund">Refund & Cancellation</Link></li>
            <li><Link to="/responsible-rummy">Responsible Rummy</Link></li>
            {/* <li><Link to="/legality">Legality</Link></li> */}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@bgmgame.com</p>
        </div>
      </div>

      {/* Download Button */}
      {/* <div className="download-section">
        <Link to="/download" className="download-btn">
          <img src="/logo.png" alt="Android Icon" className="android-icon" />
          Download Now
        </Link>
      </div> */}
          <div className="download-section">
        <a href="/assets/therummy.apk" download className="download-btn">
          <img src="/logo.png" alt="Android Icon" className="android-icon" />
          Download Now
        </a>
      </div>


      {/* Copyright */}
      <div className="footer-bottom">
        <p>© Bgm Game 2023, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
