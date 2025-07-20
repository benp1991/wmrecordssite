import { useState, useEffect } from 'react';
import { Link }  from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useGetAuthData } from '../../hooks/useGetAuthData';

function NavBar() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  
  let navLinks = [];
  const getAuthData = useGetAuthData(authStatus);

  let showAdminLinks = false;
  if (getAuthData.groups) {
    console.log("Has groups");
        if ((getAuthData.groups.indexOf("ADMINS") > -1) || (getAuthData.groups.indexOf("EDITORS") > -1)) {
          showAdminLinks = true;
        }
  }
  else {
      showAdminLinks = false;
  }

  if (showAdminLinks === true) {
    navLinks = [
      {route:'Home', label:'Home'},
      {route:'Events', label:'Events'},
      {route:'Results', label:'Results'},
      {route:'Records', label:'Records'},
      {route:'RecordsUpdate', label:'Update Records'},
      {route:'Contact', label:'Contact'},
      {route:'UsefulInformation', label:'Useful Information'},
    ];
  }
  else {
      navLinks = [
        {route:'Home', label:'Home'},
        {route:'Events', label:'Events'},
        {route:'Results', label:'Results'},
        {route:'Records', label:'Records'},
        {route:'Contact', label:'Contact'},
        {route:'UsefulInformation', label:'Useful Information'},
      ];
  }

  const navList = navLinks.map((navLink,i) =>
  <Link className="Header-Links" to={navLink.route} key={navLink.label}>{navLink.label}</Link>
  );

  return (
    <div>
      
      <nav>
        {navList}
      </nav>
    </div>
    
  );
}

export default NavBar;