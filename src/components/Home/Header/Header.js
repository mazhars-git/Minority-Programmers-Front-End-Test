import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import MainMenu from '../MainMenu/MainMenu';

const Header = () => {
    return (
        <div>
            <MainMenu></MainMenu>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;