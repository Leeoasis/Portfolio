import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
    <ul>
      <li><a href="/" className="nav-links" >Home</a></li>
      <li><a href="projects" className="nav-links" >Projects</a></li>
      <li><a href="/skills" className="nav-links" >Skills</a></li>
      <li><a href="/about" className="nav-links" >About</a></li>
      <li><a href="/contact" className="nav-links" >Contact</a></li>
    </ul>
  </nav>

  )
}

export default Navbar;
