import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/ProjectsCard.css';

const ProjectsCard = ({ imgsrc, title, text, live, source }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`project-card ${isActive ? 'active' : ''} ${isActive ? 'slide-in' : ''}`} // Apply active and animation class
      onClick={handleClick} // Handle click event
    >
      <img className="project-image" src={imgsrc} alt="Project" />

      <h2 className="project-title">{title}</h2>
      <div>
        <p className="project-description">{text}</p>
        <div className="project-btns">
          <NavLink to={live}>Live</NavLink>
          <NavLink to={source}>Source</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
