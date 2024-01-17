import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRound } from 'react-icons/cg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  return (
    <div>
      <nav className={openMenu ? 'responsive-nav' : ''}>
        <ul>
          <li><NavLink to="/" exact className="nav-links" activeClassName="active">Home</NavLink></li>
           <li><NavLink to="/projects" className="nav-links" activeClassName="active">Projects</NavLink></li>
           <li><NavLink to="/skills" className="nav-links" activeClassName="active">Skills</NavLink></li>
          <li><NavLink to="/about" className="nav-links" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" className="nav-links" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
      <button
        type="button"
        onClick={toggleMenu}
        className="nav-btn"
      >
        {openMenu ? <FaTimes /> : <CgMenuRound />}
      </button>
    </div>
  )
}

export default Navbar;
