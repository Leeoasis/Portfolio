import { useState } from 'react';
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
          <li><a href="/" className="nav-links">Home</a></li>
          <li><a href="projects" className="nav-links">Projects</a></li>
          <li><a href="/skills" className="nav-links">Skills</a></li>
          <li><a href="/about" className="nav-links">About</a></li>
          <li><a href="/contact" className="nav-links">Contact</a></li>
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
