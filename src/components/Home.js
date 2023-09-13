import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';

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

  return (
    <div className="home-div">
        <div className="content">

        <div className="heading">
        <h1 className="home-heading">Hello, I'm Leslie <span className="mobile-name">Gudo</span>,<br /> <span ref={el} /></h1>
        <p className="home-para">Step into my world where technology meets creativity, and code transforms into innovation. With a wealth of expertise in crafting elegant software solutions for a global audience,
         my journey comprises over 1500 hours of hands-on experience. I've not only mastered the art of software development but also guided and mentored a dynamic team of 10+ junior developers, empowering them
         to meet ambitious goals within the constraints of tight timelines. Proficient in an array of cutting-edge tools and technologies, my toolkit includes React, Redux, JavaScript, Ruby on Rails, Figma, and
          a palette of Animation Libraries, each adding a unique hue to my vibrant portfolio.
        </p> 
        <div className="my-buttons-container">
            <Link to={"/Projects"} className="home-buttons">Projects</Link>
            <Link to={"/Contact"} className="home-buttons">Contact</Link>
            <Link to={"/About"} className="home-buttons">About Me</Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default HomeImg;