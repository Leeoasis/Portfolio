import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useRef, useEffect, useState } from 'react';
import IntroImg from '../assets/background-waves.mp4';
import Navbar from './Navbar';
import SideCard from './SideCard';
import { useLocation } from 'react-router-dom';

const HomeImg = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

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
    <div className="relative min-h-screen">
      <video className="absolute inset-0 w-full h-full bg-repeat object-cover z-0" autoPlay loop muted>
        <source src={IntroImg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add an overlay with background color */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="absolute inset-0">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="flex">
        <div className="sidecard-container">
          {showSideCard && <SideCard />}
        </div>

        <div className="absolute inset-0">
          <div className="container mx-auto px-4 py-16 z-10">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">
                Hello, I'm Leslie <span className="mobile-name">Gudo</span>,<br /> <span ref={el}></span>
              </h1>
              <p className="text-xl mb-8">
                Step into my world where technology meets creativity, and code transforms into innovation.
                With a wealth of expertise in crafting elegant software solutions for a global audience,
                my journey comprises over 1500 hours of hands-on experience. I've not only mastered the art of
                software development but also guided and mentored a dynamic team of 10+ junior developers,
                empowering them to meet ambitious goals within the constraints of tight timelines.
                Proficient in an array of cutting-edge tools and technologies, my toolkit includes React, Redux,
                JavaScript, Ruby on Rails, Figma, and a palette of Animation Libraries, each adding a unique
                hue to my vibrant portfolio.
              </p>
              <div className="flex space-x-4">
                <Link to="/Projects" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Projects
                </Link>
                <Link to="/Contact" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                  Contact
                </Link>
                <Link to="/About" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
                  About Me
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;
