import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer mt-5">
        <div className="footer-container">
          <div className="footer-section">
            <h2>My Car</h2>
            <p>Your trusted platform for amazing content.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact">
                Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
