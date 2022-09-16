import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        LE HOANG SANG
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100013260851885">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/lh.sang_/?fbclid=IwAR2zBYk6GZNGnVBHqDLvlKosH9gPzJJaWNfS7LKXDEyNLn6VJy6C5KlEadQ">
          <FiInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
