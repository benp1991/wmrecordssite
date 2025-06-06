import React from 'react';
import NavBar from './NavBar';
import WMpowerliftingLogo from '../../static/images/WMpowerliftingLogo.png';

function Header() {
    return (
        <header className="App-header">
            <div className="header-logo">
                <img src={WMpowerliftingLogo} className="header-logo-image" alt="West Midlands Powerlifting Logo"></img>
            </div>
            
            <NavBar />
        </header>
    );
}

export default Header;