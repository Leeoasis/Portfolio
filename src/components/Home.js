import React from 'react'
import SideCard from "./SideCard";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const HomeImg = () => {
  return (
    <div className="home-div">
        <div className="content">

        <SideCard />
        <Navbar />
        <div className="heading">
        <h1 className="home-heading">Hello, I'm Leslie Gudo,<br /> Full Stack Web Developer</h1>
        <p className="home-para">Step into my world where technology meets creativity, and code transforms into innovation. With a wealth of expertise in crafting elegant software solutions for a global audience,
         my journey comprises over 1500 hours of hands-on experience. I've not only mastered the art of software development but also guided and mentored a dynamic team of 10+ junior developers, empowering them
         to meet ambitious goals within the constraints of tight timelines. Proficient in an array of cutting-edge tools and technologies, my toolkit includes React, Redux, JavaScript, Ruby on Rails, Figma, and
          a palette of Animation Libraries, each adding a unique hue to my vibrant portfolio.
        </p> 
        <div>
            <Link to={"/Projects"} className="project-btn">Projects</Link>
            <Link to={"/Contact"} className="contact-btn">Contact</Link>
            <Link to={"/About"} className="contact-btn">About Me</Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default HomeImg;