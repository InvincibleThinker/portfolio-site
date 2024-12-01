import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link to="/" className="logo">
        <img src="/src/assets/images/logo-s.png" alt="logo" />
        <img className="sub-logo" src="/src/assets/images/logo_sub.png" alt="Subtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className=" about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
    </div>
  )
}