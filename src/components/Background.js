import React from 'react';
import IntroImg from '../assets/background-waves.mp4';
import Navbar from './Navbar';
import SideCard from './SideCard';
import '../styles/Background.css';

const Background = () => {
  return (
    <div className="background-container">
      <video className="intro-video" autoPlay loop muted>
        <source src={IntroImg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="sidecard-container">
        <SideCard />
      </div>
    </div>
  );
};

export default Background;
