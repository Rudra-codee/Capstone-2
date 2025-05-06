import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="navbar" className={menuOpen ? 'nav-open' : ''}>
        <div className="logo">Kairo</div>
        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="menu"
          id="menuButton"
          onClick={toggleMenu}
        >
          <img className='menu' src="https://img.icons8.com/?size=96&id=RN0Htqdavr02&format=png" alt="" />
        </button>
        <div className="nav-links" id="menu">
          <a href="#">Features</a>
          <a href="#">Testimonials</a>
          <a href="#">Why Kairo?</a>
        </div>
        <div className="nav-actions">
          <button className="btn-login" type="button">Login</button>
          <button className="btn-tryfree" type="button">Try Free</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
