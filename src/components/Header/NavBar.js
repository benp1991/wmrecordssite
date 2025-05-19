import React from 'react';

function NavBar(props) {
    const pages = ['Home', 'Events', 'Results', 'Records', 'Records Update', 'Contact', 'Useful Information'];
    
    const navLinks = pages.map(page => {
      return (
          <a className="Header-Links" href={'/' + page} key={page}>
            {page}
          </a>
      )
    });
    return <nav>{navLinks}</nav>;
}

export default NavBar;
