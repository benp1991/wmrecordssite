import NavBar from './NavBar';
import WMpowerliftingLogo from '../../static/images/WMpowerliftingLogo.png';
import Logout from './Logout';


function Header() {
    

    return (
        <header className="App-header">
            <div className="header-logo">
                <img src={WMpowerliftingLogo} className="header-logo-image" alt="West Midlands Powerlifting Logo"></img>
            </div>
            <NavBar />
            <Logout />
        </header>
    );
}

export default Header;