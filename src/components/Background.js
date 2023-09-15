import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IntroImg from '../assets/background-waves.mp4';
import Navbar from './Navbar';
import SideCard from './SideCard';
import '../styles/Background.css';

const Background = () => {

  const location = useLocation();

  const [showSideCard, setShowSideCard] = useState(true); // Initially, show the SideCard

  useEffect(() => {
    const handleResize = () => {
      // Conditionally hide the SideCard on the About page for screens below 768px
      if (window.location.pathname === '/about' && window.innerWidth < 769) {
        setShowSideCard(false);
      } else {
        setShowSideCard(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);

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
        { showSideCard &&<SideCard />}
      </div>
    </div>
  );
};

export default Background;
