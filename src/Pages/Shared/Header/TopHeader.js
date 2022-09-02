import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div className='bg-primary py-3'>
            <div className='w-full md:w-11/12 px-4 md:px-4 mx-auto flex justify-between header'>
                <p className='text-secondary font-semibold text-sm'>CASH ON DELIVERY | FREE SHIPPING ON ORDERS OVER 400 AED+</p>
                <p className='text-secondary font-semibold text-sm'>WARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL</p>
            </div>
        </div>
    );
};

export default TopHeader;