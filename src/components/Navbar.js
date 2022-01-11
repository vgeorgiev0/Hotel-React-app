import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/logo.png';
import { Trans } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const home = <Trans i18nKey='home'></Trans>;
  const apartments = <Trans i18nKey='apartments'></Trans>;
  const contact = <Trans i18nKey='about'></Trans>;
  const restaurant = <Trans i18nKey='introRestaurant'></Trans>;

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link className='nav-logo' to='/'>
            <img width='30%' src={logo} alt='ZIS' />
          </Link>
          <button type='button' className='nav-btn' onClick={handleToggle}>
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link onClick={handleToggle} to='/'>
              {home}
            </Link>
          </li>
          <li>
            <Link onClick={handleToggle} to='/restaurant'>
              {restaurant}
            </Link>
          </li>
          <li>
            <Link onClick={handleToggle} to='/apartments'>
              {apartments}
            </Link>
          </li>
          <li>
            <Link onClick={handleToggle} to='/contact'>
              {contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
