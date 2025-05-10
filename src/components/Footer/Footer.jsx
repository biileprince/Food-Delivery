import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <h1>Foodie</h1>
              <div className="fdot"></div>
            </div>
            <p className="footer-description">
              Delivering delicious meals straight to your doorstep. Experience
              the finest local cuisine with our fast and reliable service.
            </p>
            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.facebook_icon}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.twitter_icon}
                  alt="Twitter"
                  className="social-icon"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.linkedin_icon}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/partners">Partners</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li>
                <a href="tel:+233555902675" className="contact-link">
                  +233-555-902-675
                </a>
              </li>
              <li>
                <a href="mailto:contact@foodie.com" className="contact-link">
                  contact@foodie.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Accra, Ghana
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <hr className="footer-divider" />
          <p className="footer-copyright">
            © {new Date().getFullYear()} Foodie. All rights reserved.
            <span className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Settings</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
