import React from 'react';
import NavBar from './NavBar';
import WMpowerliftingLogo from '../../static/images/WMpowerliftingLogo.png';

function Header() {
    return (
        <header className="App-header">
            <img src={WMpowerliftingLogo} className="header-logo" alt="West Midlands Powerlifting Logo"></img>
            <NavBar />
        </header>
    );
}

export default Header;