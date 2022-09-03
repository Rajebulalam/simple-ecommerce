import React from 'react';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MiddleHeader></MiddleHeader>
            <BottomHeader></BottomHeader>
        </div>
    );
};

export default Header;