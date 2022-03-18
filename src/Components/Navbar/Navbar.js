import React, { useEffect, useState } from 'react';
import '../../Styles/Navbar/Navbar.css';

import Logo from './Logo';
import NavList from './NavList';

function Navbar() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
        });
    }, []);

  return (
    <div className={scroll ? "navbar-container scroll":"navbar-container"}>
      <div className='navbar-content'>
        <Logo></Logo>
        <NavList></NavList>
      </div>
    </div>
  );
}

export default Navbar;
