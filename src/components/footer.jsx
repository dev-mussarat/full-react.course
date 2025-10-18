import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaPinterestP /></a>
      </div>

      <p className="footer-text">
        Copyright ©2025 All rights reserved | This template is made with 
        <span className="heart"> ❤️ </span> by 
        <a href="#" className="footer-link"> Colorlib</a>
      </p>
    </footer>
  );
};

export default Footer;
