import React, { useState } from 'react'
import './Header.css'
import { FaGlobe, FaAlignJustify } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <header>
      <div className="navbar">

        <div className='logo'><Link to='/'><img className='logo-dolo' src='/images/Logo.png' alt='logo' /></Link></div>
        <div>
          <div className="hamburger-menu">
            <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}><FaAlignJustify /></a>
          </div>
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <NavLink to="/accomodation">Accomoodation</NavLink>
              </li>
              <li>
                <NavLink to="/luxury">Luxury</NavLink>
              </li>
              <li>
                <NavLink to="/">Smart Dolomites</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="list-icon"><FaGlobe /></div>
      </div>
    </header>
  )
}

export default Header
