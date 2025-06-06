import React from 'react';
import { Link }  from 'react-router-dom';

function NavBar(props) {
    return (
      <nav>
        <Link className="Header-Links" to="/Home" key="Home">Home</Link>
        <Link className="Header-Links" to="/Events" key="Events">Events</Link>    
        <Link className="Header-Links" to="/Results" key="Results">Results</Link>        
        <Link className="Header-Links" to="/Records" key="Records">Records</Link>           
        <Link className="Header-Links" to="/RecordsUpdate" key="RecordsUpdate">Update Records</Link>          
        <Link className="Header-Links" to="/Contact" key="Contact">Contact</Link>          
        <Link className="Header-Links" to="/UsefulInformation" key="UsefulInformation">Useful Information</Link>     
      </nav>
    );
}

export default NavBar;
