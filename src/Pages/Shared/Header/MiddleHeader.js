import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './MiddleHeader.css';

const MiddleHeader = () => {
    return (
        <div className='w-full md:w-11/12 px-4 md:px-2 py-6 mx-auto flex justify-between items-center'>
            <div>
                <Link className='text-4xl font-bold text-primary' to='/'>RM - COMMERCE</Link>
            </div>
            <div className='border border-primary flex items-center pl-3'>
                <input type="search" name="search" id="search" placeholder='Search for Products' />
                <select name="category" id="products" className='outline-0'>
                    <option value="">Select Category</option>
                    <option value="">Shoes</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Bags</option>
                </select>
                <div className='bg-primary px-4 py-[9.5px] ml-2'>
                    <FontAwesomeIcon className='text-secondary' icon={faSearch}></FontAwesomeIcon>
                </div>
            </div>
            <div className='flex'>
                <Link className='uppercase font-bold login-register px-2' to='/'>Login/Register</Link>
                <p className='px-3 login-register'> <FontAwesomeIcon className='text-primary text-xl' icon={faCartShopping}></FontAwesomeIcon> <sup className='bg-secondary text-primary font-medium px-2 rounded-full text-lg mb-2'>1</sup> <span className='text-lg font-medium'>$210</span> </p>
            </div>
        </div>
    );
};

export default MiddleHeader;