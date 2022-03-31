import React, { useEffect, useState } from 'react';
import '../../Styles/Navbar/Navbar.css';

import Logo from './Logo';
import NavList from './NavList';
import Bars from './Bars';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 991.98;

  const [isVisible, setIsVisible] = useState(false);

    const onClickBars = () =>{
        setIsVisible(!isVisible);
        console.log(isVisible);
    }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
        });
    }, []);

    useEffect(() =>{
      if(isMobile === false){
        setIsVisible(false);
      }
    },[isMobile])

  return (
    <div className={isVisible ? scroll ? "navbar-container-visible scroll":"navbar-container-visible":
    scroll ? "navbar-container scroll":"navbar-container"}>
      <div className='navbar-content'>
        <div className='navbar-content-left'>
            <Logo></Logo>
        </div>
        {isMobile ? 
            <Bars
              isVisible={isVisible}
              onClickBars={onClickBars}
            />
            : 
            <div className='navbar-content-right'>
              <NavList/>
            </div>
        }
      </div>
      <div className='navbar-menu'>
          {isVisible ? 
          <NavList
            isVisible={isVisible}
          />
          :<></>}
      </div>
    </div>
  );
}

export default Navbar;
