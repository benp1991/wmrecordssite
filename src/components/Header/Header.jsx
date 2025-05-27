import React from 'react';
import NavBar from './NavBar';
import WMpowerliftingLogo from '../../images/WMpowerliftingLogo.png';

function Header() {
    return (
        <header className="App-header">
            <p>
                Hello West Midlands Powerlifting!
            </p>
            <NavBar />
            <img src={WMpowerliftingLogo} className="header-logo" alt="West Midlands Powerlifting Logo"></img>
        </header>
    );
}

export default Header;