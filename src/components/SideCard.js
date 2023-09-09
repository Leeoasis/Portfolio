// SideCard.js
import React from 'react';
import '../styles/SideCard.css';
import myImage from '../assets/leslie.jpeg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faInstagram, 
  faGithub, 
  faLinkedin,
  faMedium,
 } from '@fortawesome/free-brands-svg-icons';

const SideCard = () => {
  return (
    <div className="left-sidebar">
        <div className="side-bar-header d-flex align-items-center justify-content-between">
            <h2 className="logo-name">Leslie</h2>
            <span className="designation">Full Stack Developer</span>
        </div>
        <img src={myImage} alt="my logo" />
        <h2 className="email">leeegd99@gmail.com</h2>
        <h2 className="address">Based in CapeTown, SA</h2>
        <p className="copyright"> @2023 Leslie. All Rights Reserved</p>
        <div className="social-profile d-flex align-items-center flex-wrap ">
      <a href="https://github.com">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://medium.com">
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    <Link to={"/Contact"} className="theme-btn">Hire me!</Link>
    </div>
  );
};

export default SideCard;
