import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2 className="footer-logo">🎬 MovieHub</h2>
          <p>
            Your ultimate destination for movies, TV shows, and trending
            entertainment content.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Trending</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 MovieHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;