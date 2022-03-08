import React from "react";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="boost">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
      <div className="footer-links">
        <span className="logo">Shortly</span>
        <div className="feature-list">
          <div>Features</div>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="resource-list">
          <div>Resources</div>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="company-list">
          <div>Company</div>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="icons">
          <Facebook className="footer-icon" alt="facebook logo" />
          <Twitter className="footer-icon" alt="twitter logo" />
          <Pinterest className="footer-icon" alt="pinterest logo" />
          <Instagram className="footer-icon" alt="instagram logo" />
        </div>
      </div>
    </div>
  );
}
