import React from 'react';
import { useNavigate, Link }  from 'react-router-dom';

function NavBar(props) {
  const navigate = useNavigate();

  const navLinks = [
    {route:'Home', label:'Home'},
    {route:'Events', label:'Events'},
    {route:'Results', label:'Results'},
    {route:'Records', label:'Records'},
    {route:'RecordsUpdate', label:'Update Records'},
    {route:'Contact', label:'Contact'},
    {route:'UsefulInformation', label:'Useful Information'},
];

  const navList = navLinks.map((navLink,i) =>
  <Link className="Header-Links" to={navLink.route} key={navLink.label}>{navLink.label}</Link>
  );

  return (
    <nav>
      {navList}
    </nav>
  );
}

export default NavBar;