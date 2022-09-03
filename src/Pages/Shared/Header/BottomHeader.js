import React from 'react';
import './BottomHeader.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';

const BottomHeader = () => {

  const menuItem = <>
    <li className='menu-link'><Link className='text-secondary text-lg pr-4 font-semibold bottom-head first' to='/'>Male</Link></li>
    <li className='menu-link'><Link className='text-secondary text-lg pr-4 font-semibold bottom-head' to='/'>Female</Link></li>
    <li className='menu-link'><Link className='text-secondary text-lg pr-4 font-semibold bottom-head' to='/'>Bags</Link></li>
    <li className='menu-link'><Link className='text-secondary text-lg pr-4 font-semibold bottom-head' to='/'>Shoes</Link></li>
  </>;

  return (
    <div className='bg-primary bottom-header flex items-center'>
      <div className='w-full md:w-11/12 px-4 md:px-2 py-6 mx-auto flex justify-between items-center'>
        <div className="navbar p-0">
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItem}
              </ul>
            </div>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuItem}
            </ul>
          </div>
          <div className='navbar-end w-full'>
            <p className='text-secondary pseudo-both text-xl flex items-center px-2 mr-5'> <FontAwesomeIcon className='text-2xl text-secondary pr-4' icon={faLocationDot}></FontAwesomeIcon> International City </p>
            <p className='text-secondary pseudo-right text-xl flex items-center px-2'> <FontAwesomeIcon className='text-2xl text-secondary pr-4' icon={faWhatsapp}></FontAwesomeIcon> +99 00 000 000 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;