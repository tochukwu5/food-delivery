import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Experience the joy of fresh, flavorful dishes with every visit.
           Whether dining in or ordering online, we’re here to serve you the best.
            Stay connected with us on Facebook, Twitter, and LinkedIn for updates and special offers!
          </p>
          <div className="footer-social-icons">
          <a href="https://www.facebook.com/profile.php?id=100087945637354" target="_blank" rel="noopener noreferrer">
          <img src={assets.facebook_icon} alt="Facebook" />
          </a>
          <a href="https://x.com/david_toch42007" target="_blank" rel="noopener noreferrer">
          <img src={assets.twitter_icon} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/tochukwu-emeremgini-287662248" target="_blank" rel="noopener noreferrer">
          <img src={assets.linkedin_icon} alt="LinkedIn" />
          </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+2347088679581</li>
            <li>tochukwud750@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
