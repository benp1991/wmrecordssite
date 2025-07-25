import NavBar from './NavBar';
import WMpowerliftingLogo from '../../static/images/WMpowerliftingLogo.png';
import Logout from './Logout';
import './Header.css';



function Header() {
    

    return (
        <div className="Header-Container">
            <header className="App-header">
                <div className="header-logo">
                    <img src={WMpowerliftingLogo} className="header-logo-image" alt="West Midlands Powerlifting Logo"></img>
                </div>
                <NavBar />
                <Logout />
            </header>
        </div>
    );
}

export default Header;